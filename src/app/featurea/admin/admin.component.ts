import { Component } from '@angular/core';
import { ShowCarDetailsComponent } from './show-car-details/show-car-details.component';

@Component({
  selector: 'app-admin',
  imports: [ShowCarDetailsComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

}
