import { Component, OnInit } from '@angular/core';
import { MainheaderComponent } from '../mainheader/mainheader.component';
import { Router, RouterOutlet } from '@angular/router';
import { SidenavbarComponent } from '../sidenavbar/sidenavbar.component';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-mainlayout',
  imports: [MainheaderComponent, RouterOutlet, SidenavbarComponent],
  templateUrl: './mainlayout.component.html',
  styleUrl: './mainlayout.component.scss'
})
export class MainlayoutComponent implements OnInit {

  constructor(private router: Router) { }


  isAdminlogin: boolean = AuthService.isAdminLoggedIn();
  isUserlogin: boolean = AuthService.isUserLoggedIn();


  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event.constructor.name === "NavigationEnd") {
        this.isAdminlogin = AuthService.isAdminLoggedIn();
        this.isUserlogin = AuthService.isUserLoggedIn();
      }
    });
  }

}
