import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, signal } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-mainheader',
  imports: [CommonModule],
  templateUrl: './mainheader.component.html',
  styleUrl: './mainheader.component.scss'
})
export class MainheaderComponent implements OnInit {

  @Input() isAdminlogin: boolean = false;
  @Input() isUserlogin: boolean = false;

  userInfo = signal<any>(null);

  constructor(private readonly authService:AuthService) { }

  ngOnInit() {
    this.userInfo.set(this.authService.getUserdata());
    console.log(this.userInfo());
  }



  

}
