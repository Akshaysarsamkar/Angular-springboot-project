import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';

import { AdminService } from '../../../services/admin/admin.service';
import { SpinnerLoaderComponent } from '../../loaders/common-loader/spinner-loader/spinner-loader.component';
import { ToastService } from '../../../services/toast-service/toast.service';

@Component({
  selector: 'app-booked-cars',
  standalone: true,
  imports: [
    CommonModule,
    DatePipe,
    SpinnerLoaderComponent
  ],
  templateUrl: './booked-cars.component.html',
  styleUrl: './booked-cars.component.scss'
})
export class BookedCarsComponent {

  bookedCars: any[] = [];

  isloading: boolean = false;

  constructor(
    private adminService: AdminService,
    private toastService: ToastService
  ) { }

  ngOnInit() {

    this.getBookedCars();
  }

  getBookedCars() {

    this.isloading = true;

    this.adminService.getHistoryOfBookedCars().subscribe({

      next: (response: any) => {

        this.isloading = false;

        this.bookedCars = response?.data || [];
      },

      error: (error) => {

        this.isloading = false;

        console.error(
          'Error fetching booked cars history:',
          error
        );
      }
    });
  }

  updateBookingStatus(
    bookingId: number,
    status: string
  ) {

    const selectedBooking = this.bookedCars.find(
      booking => booking.id === bookingId
    );

    if (!selectedBooking) {

      return;
    }

    selectedBooking.isUpdating = true;

    const payloadStatus =
      status.charAt(0).toUpperCase() +
      status.slice(1).toLowerCase();

    this.adminService
      .changestatusOfBooking(
        bookingId,
        payloadStatus
      )
      .subscribe({

        next: (response: any) => {

          this.toastService.show(
            response?.Message ||
            'Booking status updated successfully',
            'success'
          );

          selectedBooking.bookCarStatus = status;

          selectedBooking.isUpdating = false;
        },

        error: (error: any) => {

          selectedBooking.isUpdating = false;

          this.toastService.show(
            error?.error?.Message ||
            'Error updating booking status',
            'error'
          );
        }
      });
  }
}