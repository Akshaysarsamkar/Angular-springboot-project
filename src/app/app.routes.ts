import { Routes } from '@angular/router';
import { LoginComponent } from './shared/components/login/login.component';
import { SignupComponent } from './shared/components/signup/signup.component';
import { MainlayoutComponent } from './shared/components/mainlayout/mainlayout.component';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { AdminComponent } from './featurea/admin/admin.component';
import { authGuard } from './core/guards/auth-guard/auth.guard';
import { PostCarComponent } from './featurea/admin/post-car/post-car.component';
import { ShowCarDetailsComponent } from './featurea/admin/show-car-details/show-car-details.component';
import { CustomerComponent } from './featurea/customer/customer.component';
import { BookCarComponent } from './shared/components/book-car/book-car.component';
import { ShowMyBookingComponent } from './shared/components/show-my-booking/show-my-booking.component';
import { BookedCarsComponent } from './shared/components/booked-cars/booked-cars.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: SignupComponent },
    ]
  },
  {
    path: 'user',
    component: MainlayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: CustomerComponent },
      { path: 'dashboard/:id', component: BookCarComponent },
      { path: 'my-bookings', component: ShowMyBookingComponent },
    ]
  },
  {
    path: 'admin',
    component: MainlayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: AdminComponent },
      { path: "cars", component: PostCarComponent },
      { path: "update-car/:id", component: PostCarComponent },
      { path: "booked-cars", component: BookedCarsComponent }
    ]
  },
  { path: '**', redirectTo: 'login' }
];