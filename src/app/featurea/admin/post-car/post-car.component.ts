import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SpinnerLoaderComponent } from '../../../shared/loaders/common-loader/spinner-loader/spinner-loader.component';
import { AdminService } from '../../../services/admin/admin.service';
import { ToastService } from '../../../services/toast-service/toast.service';
import { Router } from '@angular/router';
import { validationMessages } from '../../../models/post-cars';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-post-car',
  imports: [CommonModule, ReactiveFormsModule, SpinnerLoaderComponent],
  templateUrl: './post-car.component.html',
  styleUrl: './post-car.component.scss'
})
export class PostCarComponent implements OnInit {

  isEditMode: boolean = false;
  carId: string = '';
  colorList = signal<string[]>(['red', 'blue', 'green', 'yellow', 'black', 'white', 'orange']);
  listOfBrands = signal<string[]>(['Toyota', 'Honda', 'Ford', 'Chevrolet', 'BMW', 'Mercedes-Benz', 'Audi']);
  listOfModels = signal<string[]>(['Camry', 'Civic', 'Mustang', 'Impala', '3 Series', 'C-Class', 'A4']);
  listofTransmission = signal<string[]>(['Automatic', 'Manual', 'CVT', 'Dual-Clutch', 'Semi-Automatic']);
  listOfTypes = signal<string[]>(['Sedan', 'SUV', 'Hatchback', 'Coupe', 'Convertible', 'Wagon', 'Van']);
  isLoading = signal<boolean>(false);

  constructor(private readonly adminService: AdminService, private toastservice: ToastService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.carId = this.route.snapshot.paramMap.get('id') || '';
    if (this.carId) {
      this.isEditMode = true;
      this.getSingleCarDetails();
    }
  }

  cardDetails = new FormGroup({
    brand: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    price: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d+(\.\d{1,2})?$/)
    ]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(10)
    ]),
    year: new FormControl('', [Validators.required]),
    color: new FormControl('', [Validators.required]),
    transmission: new FormControl('', [Validators.required]),
    imgUrl: new FormControl('', [Validators.required])
  });

  get brand() { return this.cardDetails.get('brand')!; }
  get name() { return this.cardDetails.get('name')!; }
  get type() { return this.cardDetails.get('type')!; }
  get year() { return this.cardDetails.get('year')!; }
  get color() { return this.cardDetails.get('color')!; }
  get transmission() { return this.cardDetails.get('transmission')!; }
  get imgUrl() { return this.cardDetails.get('imgUrl')!; }
  get price() { return this.cardDetails.get('price')!; }
  get description() { return this.cardDetails.get('description')!; }

  getErrorMessage(controlName: string): string {
    const control = this.cardDetails.get(controlName);
    if (!control || !control.errors || !control.touched) {
      return '';
    }
    const errors = Object.keys(control.errors);
    if (errors.length > 0) {
      return validationMessages[controlName][errors[0]];
    }
    return '';
  }

  submitCarDetails() {
    this.cardDetails.markAllAsTouched();
    if (this.cardDetails.invalid) { return; }
    this.isLoading.set(true);
    const payload = {
      brand: this.brand.value || '',
      name: this.name.value || '',
      type: this.type.value || '',
      year: this.year.value || '',
      color: this.color.value || '',
      transmission: this.transmission.value || '',
      imgUrl: this.imgUrl.value || '',
      price: this.price.value || '',
      description: this.description.value || ''
    };
    if (this.isEditMode) {
      const id = Number(this.carId);
      this.adminService.updateCarDetails(id, payload).subscribe({
        next: (response: any) => {
          this.isLoading.set(false);
          this.toastservice.show(response?.message || 'Car updated successfully', 'success');
          this.router.navigate(['/admin']);
        },
        error: () => {
          this.isLoading.set(false);
          this.toastservice.show('Error updating car details', 'error');
        }
      });
    } else {
      this.adminService.addCarDetails(payload).subscribe({
        next: (response: any) => {
          this.isLoading.set(false);
          this.toastservice.show(response?.message, 'success');
          this.router.navigate(['/admin']);
        },
        error: () => {
          this.isLoading.set(false);
          this.toastservice.show('Error adding car details', 'error');
        }
      });

    }
  }

  getSingleCarDetails() {
    const id = Number(this.carId);
    this.adminService.getSingleCarDetails(id).subscribe({
      next: (response: any) => {
        const carData = response?.data;
        this.cardDetails.patchValue({
          brand: carData.brand?.trim(),
          name: carData.name,
          type: carData.type?.trim(),
          year: carData.year ? new Date(carData.year).toISOString().split('T')[0] : '',
          color: carData.color?.toLowerCase().trim(),
          transmission: carData.transmission?.trim(),
          imgUrl: carData.imgUrl,
          price: carData.price,
          description: carData.description
        });
      }
    });
  }
}