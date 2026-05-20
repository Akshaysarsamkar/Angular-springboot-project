import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spinner-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spinner-loader.component.html',
  styleUrls: ['./spinner-loader.component.scss']
})
export class SpinnerLoaderComponent {

  @Input() loading: boolean = false;
  @Input() fullscreen: boolean = false;
  @Input() size: 'sm' | 'md' | 'lg' | 'xl' = 'md';
}