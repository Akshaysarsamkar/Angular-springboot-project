import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {FormControl,FormGroup,ReactiveFormsModule,Validators} from '@angular/forms';

import { CustomerService } from '../../../services/customer/customer.service';
import { SpinnerLoaderComponent } from '../../loaders/common-loader/spinner-loader/spinner-loader.component';
import { ToastService } from '../../../services/toast-service/toast.service';

@Component({
  selector: 'app-book-car',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule, SpinnerLoaderComponent],
  templateUrl: './book-car.component.html',
  styleUrl: './book-car.component.scss'
})
export class BookCarComponent implements OnInit {

  carId = signal<string>('');
  carDetails = signal<any>({});
  isLoading = signal<boolean>(false);

  bookingForm = new FormGroup({
    fromDate: new FormControl('', [Validators.required]),
    toDate: new FormControl('', [Validators.required])
  });

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private customerService: CustomerService,
    private toastService: ToastService
  ) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(params => {
      this.carId.set(params.get('id') || '');
      this.loadData(this.carId());
    });
  }

  loadData(carId: string) {
    this.isLoading.set(true);
    this.customerService.getCarDetailsById(carId).subscribe({
      next: (response: any) => {
        this.carDetails.set(response?.data || {});
        this.isLoading.set(false);
      },

      error: (error: any) => {
        this.isLoading.set(false);
        this.toastService.show(
          error?.error?.message || 'Failed to fetch car details.',
          'error'
        );
      }

    });

  }

  calculateTotalDays(): number {
    const fromDate = this.bookingForm.value.fromDate;
    const toDate = this.bookingForm.value.toDate;
    if (!fromDate || !toDate) {
      return 0;
    }

    const start = new Date(fromDate).getTime();
    const end = new Date(toDate).getTime();
    const diff = end - start;
    return Math.ceil(diff / (1000 * 60 * 60 * 24));

  }

  getTotalAmount(): number {
    const totalDays = this.calculateTotalDays();
    const price = Number(this.carDetails()?.price || 0);
    return totalDays * price;
  }

  confirmBooking() {
    this.bookingForm.markAllAsTouched();
    if (this.bookingForm.invalid) {
      return;
    }

    const totalDays = this.calculateTotalDays();
    const pricePerDay = Number(
      this.carDetails()?.price || 0
    );

    const totalAmount = this.getTotalAmount();
    const payload = {
      carId: Number(this.carId()),
      userId: JSON.parse(
        localStorage.getItem('userdata') || '{}'
      )?.userId,
      fromDate: this.bookingForm.value.fromDate,
      toDate: this.bookingForm.value.toDate,
      days: totalDays,
      pricePerDay: pricePerDay,
      price: totalAmount
    };

    this.isLoading.set(true);
    this.customerService.bookCar(payload).subscribe({
      next: (response: any) => {
        this.isLoading.set(false);
        this.toastService.show(response?.message || 'Car booked successfully.','success');
        this.router.navigate(['/user/dashboard']);
      },
      error: (error: any) => {
        this.isLoading.set(false);
        this.toastService.show(error?.error?.message || 'Failed to book car.','error');
      }
    });

  }

  navigateToCarDetails() {
    this.router.navigate(['/user/dashboard']);
  }

}