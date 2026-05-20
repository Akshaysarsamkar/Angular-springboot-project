import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';
import { ToastService } from '../../../services/toast-service/toast.service';
import { SpinnerLoaderComponent } from '../../loaders/common-loader/spinner-loader/spinner-loader.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, SpinnerLoaderComponent, HeaderComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });
  isError = signal<boolean>(false);
  errorMessage = signal<string>('');
  isLoading = signal<boolean>(false);

  constructor(private authService: AuthService, private readonly router: Router, private readonly toastservice: ToastService) { }

  get email() { return this.loginForm.get('email')!; }
  get password() { return this.loginForm.get('password')!; }

  onLogin(): void {
    this.isLoading.set(true);
    if (this.loginForm.valid) {
      Object.keys(this.loginForm.controls).forEach(key => { this.loginForm.get(key)?.setErrors(null); });

      const payload = { email: this.email.value || '', password: this.password.value || '' }
      console.log('Login payload:', payload);
      this.authService.userLogin(payload).subscribe({
        next: (response: any) => {
          this.isError.set(false);
          this.isLoading.set(false);
          this.toastservice.show(response?.message || 'Login successful!', 'success');
          this.authService.setUserdata(response?.data);
          if (response?.data?.role == 'ADMIN') {
            this.router.navigate(['/admin']);
          } else {
            this.router.navigate(['/user']);
          } 
        },
        error: (error: any) => {
          this.isLoading.set(false);
          this.isError.set(true);
          this.errorMessage.set(error.error?.message || 'An error occurred during login. Please try again.');
        }
      });

    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  onSignUp(): void {
    this.router.navigate(['/register']);
  }
}