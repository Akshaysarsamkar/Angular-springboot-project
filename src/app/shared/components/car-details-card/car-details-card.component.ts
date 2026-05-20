import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminService } from '../../../services/admin/admin.service';
import { ToastService } from '../../../services/toast-service/toast.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-car-details-card',
  imports: [CommonModule, RouterModule],
  templateUrl: './car-details-card.component.html',
  styleUrl: './car-details-card.component.scss'
})
export class CarDetailsCardComponent implements OnInit {

  isAdmin: boolean = false;
  isLoading: boolean = false;
  @Input() carDetails: any;
  @Output() carDeleted = new EventEmitter<string>();


  constructor(private adminService: AdminService, private toastService: ToastService, private router: Router,private activeRouter:ActivatedRoute) { }

  ngOnInit(): void {
    const userData = JSON.parse(localStorage.getItem('userdata') || '{}');
    this.isAdmin = userData?.role?.toUpperCase() === 'ADMIN';
    console.log(userData);
    console.log(this.isAdmin);
  }

  deleteCarDetails(id: string) {
    this.isLoading = true;
    const carId = parseInt(id);
    this.adminService.deleteCarDetails(carId).subscribe({
      next: (response: any) => {
        this.isLoading = false;
        this.toastService.show(response?.message || 'Car details deleted successfully.');
        this.carDeleted.emit(id);
      },
      error: (error: any) => {
        this.isLoading = false;
        console.error('Error deleting car details:', error);
        this.toastService.show(error?.error?.message || 'Failed to delete car details.', 'error');
      }
    });
  }

  updateCarDetails(id: string) {
    this.router.navigate(['/admin/update-car', id]);
  }

  navigateToBookCar(carId: string) {
    this.router.navigate(['/user/dashboard', carId]);
  }
}
