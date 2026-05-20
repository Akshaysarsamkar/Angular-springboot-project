import { Component } from '@angular/core';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { SuccessMessageDirective } from './core/directives/ToastDirective/success-message.directive';

@Component({
  selector: 'app-root',
  imports: [LayoutComponent, SuccessMessageDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'car-rental-angular';
}
