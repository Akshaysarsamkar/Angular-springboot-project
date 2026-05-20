import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import { SpinnerLoaderComponent } from '../../loaders/common-loader/spinner-loader/spinner-loader.component';
import { Router } from '@angular/router';
import { ToastService } from '../../../services/toast-service/toast.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, SpinnerLoaderComponent, HeaderComponent],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  isLoading: boolean = false;
  isError: boolean = false;
  errorMessage = signal<string>('');
  constructor(private authService: AuthService, private router: Router, private toastService: ToastService) { }

  signupForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  get name() { return this.signupForm.get('name')!; }
  get email() { return this.signupForm.get('email')!; }
  get password() { return this.signupForm.get('password')!; }

  onSignUp(): void {
    this.isLoading = true;
    if (this.signupForm.valid) {
      let payload = {
        name: this.signupForm.value.name || '',
        email: this.signupForm.value.email || '',
        password: this.signupForm.value.password || ''
      }
      this.authService.userSignup(payload).subscribe({
        next: (response: any) => {
          console.log(response);
          this.isLoading = false;
          this.toastService.show(response?.message || 'Signup successful!', 'success');
          console.log('Signup successful:', response);
          this.router.navigate(['/login']);

        },
        error: (error) => {
          this.isLoading = false;
          this.isError = true;
          this.errorMessage.set(error.error?.message || 'An error occurred during signup. Please try again.');
          console.error('Signup failed:', error);
        }
      });
    } else {
      this.isLoading = false;
      this.signupForm.markAllAsTouched();
    }
  }

  onSignIn(): void {
    this.router.navigate(['/login']);
  }
}