import { Component, Input } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ToastService } from '../../../services/toast-service/toast.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidenavbar',
  imports: [CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './sidenavbar.component.html',
  styleUrl: './sidenavbar.component.scss'
})
export class SidenavbarComponent {

  @Input() isAdminlogin: boolean = false;
  @Input() isUserlogin: boolean = false;

  constructor(private readonly authService: AuthService,private router:Router,private toastService:ToastService) { }

  logout() {
    this.authService.clearUserdata();
    this.toastService.show('Logged out successfully');
    this.router.navigate(['/login']); 
  }

}
