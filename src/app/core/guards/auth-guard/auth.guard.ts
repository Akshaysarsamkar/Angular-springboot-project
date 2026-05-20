import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const userdata = localStorage.getItem('userdata');

  // If user not logged in
  if (!userdata) {
    router.navigate(['/login']);
    return false;
  }

  // Convert string into object
  const parsedData = JSON.parse(userdata);  
  // Convert role into lowercase
  const role = parsedData.role?.toLowerCase();
  // Current route
  const currentUrl = state.url;

  // Admin Route Protection
  if (currentUrl.startsWith('/admin')) {
    if (role !== 'admin') {
      router.navigate(['/login']);
      return false;
    }
  }

  // User Route Protection
  if (currentUrl.startsWith('/user')) {
    if (role !== 'customer') {
      router.navigate(['/login']);
      return false;
    }
  }

  return true;
};