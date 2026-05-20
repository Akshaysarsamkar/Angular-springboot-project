import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarDetailsCardComponent } from '../../../shared/components/car-details-card/car-details-card.component';
import { carDetails, getCarDetailsResponse } from '../../../models/post-cars';
import { AdminService } from '../../../services/admin/admin.service';
import { SpinnerLoaderComponent } from '../../../shared/loaders/common-loader/spinner-loader/spinner-loader.component';

@Component({
  selector: 'app-show-car-details',
  standalone: true,
  imports: [CommonModule, CarDetailsCardComponent, SpinnerLoaderComponent],
  templateUrl: './show-car-details.component.html',
  styleUrl: './show-car-details.component.scss'
})
export class ShowCarDetailsComponent implements OnInit {

  cars = signal<getCarDetailsResponse[]>([]);
  isLoading = signal<boolean>(false);

  constructor(private readonly adminService: AdminService) { }

  ngOnInit(): void {
    this.loadAllCarDetails();
  }

  loadAllCarDetails() {
    this.isLoading.set(true);
    this.adminService.getAllCarDetailsData().subscribe({
      next: (response: any) => {
        this.isLoading.set(false);
        this.cars.set(response?.data || []);
      },
      error: (error) => {
        console.error('Error fetching car details:', error);
        this.isLoading.set(false);
      }
    })
  }

  onCarDeleted(carId: string) {
    this.cars.update(cars =>
      cars.filter(car => car.carId !== carId)  
    );
  }

}