// success-message.directive.ts
import { Directive, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToastService, Toast } from '../../../services/toast-service/toast.service';  

@Directive({
  selector: '[appSuccessMessage]',
  standalone: true
})
export class SuccessMessageDirective implements OnInit, OnDestroy {
  private sub!: Subscription;
  private container!: HTMLElement;

  constructor(private toastService: ToastService) {}

  ngOnInit() {
    this.container = document.createElement('div');
    this.container.className = 'toast-wrapper';
    document.body.appendChild(this.container);

    this.sub = this.toastService.toast$.subscribe((toast: Toast) => {
      this.showToast(toast);
    });
  }

  private showToast(toast: Toast) {
    const el = document.createElement('div');
    el.className = `toast toast-${toast.type}`;

    const icon = toast.type === 'success' ? '✓'
               : toast.type === 'error'   ? '✕'
               : 'ℹ';

    el.innerHTML = `
      <span class="toast-icon">${icon}</span>
      <span class="toast-msg">${toast.message}</span>
    `;

    this.container.appendChild(el);

    setTimeout(() => {
      el.classList.add('toast-hide');
      setTimeout(() => el.remove(), 300);
    }, 3500);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.container.remove();
  }
}