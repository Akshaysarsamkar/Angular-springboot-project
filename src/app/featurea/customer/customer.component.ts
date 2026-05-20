import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerService } from '../../services/customer/customer.service';
import { CarDetailsCardComponent } from '../../shared/components/car-details-card/car-details-card.component';
import { SpinnerLoaderComponent } from '../../shared/loaders/common-loader/spinner-loader/spinner-loader.component';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [CommonModule,CarDetailsCardComponent,SpinnerLoaderComponent],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss'
})
export class CustomerComponent implements OnInit {

  carDetails = signal<any[]>([]);
  isLoading = signal<boolean>(false);

  constructor(private readonly customerService: CustomerService) { }

  ngOnInit(): void {
    this.getAllCarDetails();
  }

  getAllCarDetails() {
    this.isLoading.set(true);
    this.customerService.getAllCarDetails().subscribe({
      next: (response: any) => {
        this.isLoading.set(false);
        this.carDetails.set(response?.data || []);
      },
      error: (error: any) => {
        this.isLoading.set(false);
        console.error('Error fetching car details:', error);
      }
    });
  }

}