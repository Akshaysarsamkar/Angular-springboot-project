import { Component, OnInit, signal } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { SpinnerLoaderComponent } from '../../loaders/common-loader/spinner-loader/spinner-loader.component';
import { CustomerService } from '../../../services/customer/customer.service';

@Component({
  selector: 'app-show-my-booking',
  standalone: true,
  imports: [CommonModule,DatePipe,SpinnerLoaderComponent],
  templateUrl: './show-my-booking.component.html',
  styleUrl: './show-my-booking.component.scss'
})
export class ShowMyBookingComponent implements OnInit {

  isLoading = signal<boolean>(false);
  bookings = signal<any[]>([]);

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.getMyBookingHistory();
  }

  getMyBookingHistory() {
    this.isLoading.set(true);
    const userId = JSON.parse(localStorage.getItem('userdata') || '{}')?.userId;
     this.customerService.getMyBookingHistory(userId).subscribe({
      next: (res: any) => {
        this.bookings.set(res?.data);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Error fetching booking history:', err);
        this.isLoading.set(false);
      }
    });
  }

}