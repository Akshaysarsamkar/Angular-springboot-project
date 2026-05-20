# 📦 Project Dump: src

## 📁 Project Structure

```
src
├── index.html
├── main.ts
├── styles.scss
├── app
│   ├── app.component.html
│   ├── app.component.scss
│   ├── app.component.spec.ts
│   ├── app.component.ts
│   ├── app.config.ts
│   ├── app.routes.ts
│   ├── core
│   │   ├── directives
│   │   │   └── ToastDirective
│   │   │       ├── success-message.directive.spec.ts
│   │   │       └── success-message.directive.ts
│   │   ├── enums
│   │   │   └── apiEndPoints.ts
│   │   ├── guards
│   │   │   └── auth-guard
│   │   │       ├── auth.guard.spec.ts
│   │   │       └── auth.guard.ts
│   │   ├── interceptors
│   │   └── pipes
│   ├── featurea
│   │   ├── admin
│   │   │   ├── admin.component.html
│   │   │   ├── admin.component.scss
│   │   │   ├── admin.component.spec.ts
│   │   │   ├── admin.component.ts
│   │   │   ├── post-car
│   │   │   │   ├── post-car.component.html
│   │   │   │   ├── post-car.component.scss
│   │   │   │   ├── post-car.component.spec.ts
│   │   │   │   └── post-car.component.ts
│   │   │   └── show-car-details
│   │   │       ├── show-car-details.component.html
│   │   │       ├── show-car-details.component.scss
│   │   │       ├── show-car-details.component.spec.ts
│   │   │       └── show-car-details.component.ts
│   │   └── customer
│   │       ├── customer.component.html
│   │       ├── customer.component.scss
│   │       ├── customer.component.spec.ts
│   │       └── customer.component.ts
│   ├── models
│   │   ├── auth.ts
│   │   └── post-cars.ts
│   ├── services
│   │   ├── admin
│   │   │   ├── admin.service.spec.ts
│   │   │   └── admin.service.ts
│   │   ├── auth
│   │   │   ├── auth.service.spec.ts
│   │   │   └── auth.service.ts
│   │   ├── customer
│   │   │   ├── customer.service.spec.ts
│   │   │   └── customer.service.ts
│   │   ├── store
│   │   │   ├── store.service.spec.ts
│   │   │   └── store.service.ts
│   │   └── toast-service
│   │       ├── toast.service.spec.ts
│   │       └── toast.service.ts
│   └── shared
│       ├── components
│       │   ├── book-car
│       │   │   ├── book-car.component.html
│       │   │   ├── book-car.component.scss
│       │   │   ├── book-car.component.spec.ts
│       │   │   └── book-car.component.ts
│       │   ├── booked-cars
│       │   │   ├── booked-cars.component.html
│       │   │   ├── booked-cars.component.scss
│       │   │   ├── booked-cars.component.spec.ts
│       │   │   └── booked-cars.component.ts
│       │   ├── car-details-card
│       │   │   ├── car-details-card.component.html
│       │   │   ├── car-details-card.component.scss
│       │   │   ├── car-details-card.component.spec.ts
│       │   │   └── car-details-card.component.ts
│       │   ├── header
│       │   │   ├── header.component.html
│       │   │   ├── header.component.scss
│       │   │   ├── header.component.spec.ts
│       │   │   └── header.component.ts
│       │   ├── layout
│       │   │   ├── layout.component.html
│       │   │   ├── layout.component.scss
│       │   │   ├── layout.component.spec.ts
│       │   │   └── layout.component.ts
│       │   ├── login
│       │   │   ├── login.component.html
│       │   │   ├── login.component.scss
│       │   │   ├── login.component.spec.ts
│       │   │   └── login.component.ts
│       │   ├── mainheader
│       │   │   ├── mainheader.component.html
│       │   │   ├── mainheader.component.scss
│       │   │   ├── mainheader.component.spec.ts
│       │   │   └── mainheader.component.ts
│       │   ├── mainlayout
│       │   │   ├── mainlayout.component.html
│       │   │   ├── mainlayout.component.scss
│       │   │   ├── mainlayout.component.spec.ts
│       │   │   └── mainlayout.component.ts
│       │   ├── show-my-booking
│       │   │   ├── show-my-booking.component.html
│       │   │   ├── show-my-booking.component.scss
│       │   │   ├── show-my-booking.component.spec.ts
│       │   │   └── show-my-booking.component.ts
│       │   ├── sidenavbar
│       │   │   ├── sidenavbar.component.html
│       │   │   ├── sidenavbar.component.scss
│       │   │   ├── sidenavbar.component.spec.ts
│       │   │   └── sidenavbar.component.ts
│       │   └── signup
│       │       ├── signup.component.html
│       │       ├── signup.component.scss
│       │       ├── signup.component.spec.ts
│       │       └── signup.component.ts
│       ├── loaders
│       │   └── common-loader
│       │       └── spinner-loader
│       │           ├── spinner-loader.component.html
│       │           ├── spinner-loader.component.scss
│       │           ├── spinner-loader.component.spec.ts
│       │           └── spinner-loader.component.ts
│       ├── models
│       └── snackbars
└── assets
```

---

## 📄 File Contents

---

## 📄 index.html

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>CarRentalAngular</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root></app-root>
</body>
</html>

```


---

## 📄 main.ts

```typescript
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

```


---

## 📄 styles.scss

```
/* You can add global styles to this file, and also import other style files */
*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  width: 100%;
  min-height: 100%;
  margin: 0;
  padding: 0;

  overflow-x: hidden;

  background: #080a12;
}

body {
  background: #080a12;
  font-family: 'DM Sans', sans-serif;
}

app-root {
  display: block;
  width: 100%;
  min-height: 100vh;
}


// used for the toast 
.toast-wrapper {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.toast {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 20px;
  border-radius: 8px;
  min-width: 260px;
  font-size: 14px;
  color: white;
  animation: slideIn 0.3s ease-out;
}

.toast-hide {
  opacity: 0;
  transform: translateX(110%);
  transition: opacity 0.3s, transform 0.3s;
}

.toast-icon {
  font-size: 16px;
  font-weight: bold;
}

.toast-msg {
  flex: 1;
}

.toast-success { background: #1D9E75; }
.toast-error   { background: #E24B4A; }
.toast-info    { background: #185FA5; }

@keyframes slideIn {
  from { transform: translateX(110%); opacity: 0; }
  to   { transform: translateX(0);    opacity: 1; }
}

// ===================================
```


---

## 📄 app\app.component.html

```html
<div appSuccessMessage></div>
<app-layout/>
```


---

## 📄 app\app.component.scss

```

```


---

## 📄 app\app.component.spec.ts

```typescript
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'car-rental-angular' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('car-rental-angular');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, car-rental-angular');
  });
});

```


---

## 📄 app\app.component.ts

```typescript
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

```


---

## 📄 app\app.config.ts

```typescript
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient()
  ]
};  
```


---

## 📄 app\app.routes.ts

```typescript
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
```


---

## 📄 app\core\directives\ToastDirective\success-message.directive.spec.ts

```typescript
import { SuccessMessageDirective } from './success-message.directive';

describe('SuccessMessageDirective', () => {
  it('should create an instance', () => {
    const directive = new SuccessMessageDirective();
    expect(directive).toBeTruthy();
  });
});

```


---

## 📄 app\core\directives\ToastDirective\success-message.directive.ts

```typescript
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
```


---

## 📄 app\core\enums\apiEndPoints.ts

```typescript
const BASEURL = 'http://localhost:8080/api';

export const APIENDPOINTS = {

    SIGNUP: `${BASEURL}/auth/signup`,
    LOGIN: `${BASEURL}/auth/login`,

    admin: {
        POST_CARD_DETAILS: `${BASEURL}/admin/add-Car`,
        GET_ALL_CAR_DETAILS: `${BASEURL}/admin/get-all-cars`,
        DELETE_CAR_DETAILS: `${BASEURL}/admin/deletecar`,
        UPDATE_CAR_DETAILS: `${BASEURL}/admin/update-car`,
        HISTORY_OF_BOOKED_CARS: `${BASEURL}/admin/booked-cars`, 
        CHANGE_BOOKING_STATUS: `${BASEURL}/admin/change-status`
    },

    customer:{
        GET_ALL_CAR_DETAILS: `${BASEURL}/car/get-all-cars`,
        GET_CAR_DETAILS_BY_ID: `${BASEURL}/car/get-all-cars`,
        BOOK_CAR: `${BASEURL}/car/book-car`,
        MY_BOOKING_HISTORY: `${BASEURL}/car/my-booking`

    }
}
```


---

## 📄 app\core\guards\auth-guard\auth.guard.spec.ts

```typescript
import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authGuard } from './auth.guard';

describe('authGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

```


---

## 📄 app\core\guards\auth-guard\auth.guard.ts

```typescript
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
```


---

## 📄 app\featurea\admin\admin.component.html

```html
<app-show-car-details></app-show-car-details>
```


---

## 📄 app\featurea\admin\admin.component.scss

```

```


---

## 📄 app\featurea\admin\admin.component.spec.ts

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComponent } from './admin.component';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

```


---

## 📄 app\featurea\admin\admin.component.ts

```typescript
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

```


---

## 📄 app\featurea\admin\post-car\post-car.component.html

```html
<div class="post-car">
    <div class="post-car__bg"></div>
    <div class="post-car__card">
        <div class="post-car__header">
            <div>
                <h2>{{ isEditMode ? 'Update Car' : 'Add New Car' }}</h2>
                <p>{{ isEditMode ? 'Update vehicle details below' : 'Fill all required vehicle details below' }}</p>
            </div>
            <div class="post-car__badge">Premium Form</div>
        </div>
        <form class="car-form" [formGroup]="cardDetails" autocomplete="off">

            <!-- Row 1 -->
            <div class="car-form__row">
                <!-- Brand -->
                <div class="field">
                    <label>Brand Name</label>
                    <div class="field__wrapper">
                        <select formControlName="brand">
                            <option value="">Select Brand</option>
                            <option *ngFor="let brand of listOfBrands()" [value]="brand">{{ brand }}</option>
                        </select>
                    </div>
                    <div class="field__error">{{ getErrorMessage('brand') }} </div>
                </div>

                <!-- Car Name -->
                <div class="field">
                    <label>Car Name</label>
                    <div class="field__wrapper">
                        <input type="text" formControlName="name" placeholder="Enter Car Name" />
                    </div>
                    <div class="field__error"> {{ getErrorMessage('name') }} </div>
                </div>
            </div>

            <!-- Row 2 -->
            <div class="car-form__row">
                <!-- Type -->
                <div class="field">
                    <label>Type</label>
                    <div class="field__wrapper">
                        <select formControlName="type">
                            <option value="">Select Type</option>
                            <option *ngFor="let type of listOfTypes()" [value]="type">{{ type }}</option>
                        </select>
                    </div>
                    <div class="field__error"> {{ getErrorMessage('type') }}</div>
                </div>

                <!-- Color -->
                <div class="field">
                    <label>Color</label>
                    <div class="field__wrapper">
                        <select formControlName="color">
                            <option value="">Select Color</option>
                            <option *ngFor="let color of colorList()" [value]="color">{{ color }}</option>
                        </select>
                    </div>
                    <div class="field__error"> {{ getErrorMessage('color') }}</div>
                </div>
            </div>

            <!-- Row 3 -->
            <div class="car-form__row">
                <!-- Year -->
                <div class="field">
                    <label>Model Year</label>
                    <div class="field__wrapper">
                        <input type="date" formControlName="year" placeholder="Select Model Year" />
                    </div>
                    <div class="field__error">{{ getErrorMessage('year') }}</div>
                </div>

                <!-- Price -->
                <div class="field">
                    <label>Price</label>
                    <div class="field__wrapper">
                        <input type="text" formControlName="price" placeholder="Enter Price" />
                    </div>
                    <div class="field__error">{{ getErrorMessage('price') }}</div>
                </div>
            </div>

            <!-- Row 4 -->
            <div class="car-form__row">
                <!-- Transmission -->
                <div class="field">
                    <label>Transmission</label>
                    <div class="field__wrapper">
                        <select formControlName="transmission">
                            <option value="">Select Transmission</option>
                            <option *ngFor="let transmission of listofTransmission()" [value]="transmission"> {{
                                transmission }} </option>
                        </select>
                    </div>
                    <div class="field__error">{{ getErrorMessage('transmission') }}</div>
                </div>

                <!-- Image URL -->
                <div class="field">
                    <label>Car Image URL</label>
                    <div class="field__wrapper">
                        <input type="text" formControlName="imgUrl" placeholder="Paste car image URL..." />
                    </div>
                    <div class="field__error"> {{ getErrorMessage('imgUrl') }}</div>
                </div>
            </div>

            <!-- Description -->
            <div class="car-form__row">
                <div class="field field--full">
                    <label>Description</label>
                    <div class="field__wrapper">
                        <textarea formControlName="description" rows="6"
                            placeholder="Write vehicle description..."></textarea>
                    </div>
                    <div class="field__error"> {{ getErrorMessage('description') }} </div>
                </div>
            </div>

            <!-- Actions -->
            <div class="car-form__actions">
                <button type="button" class="btn btn--secondary">Cancel</button>
                <button type="submit" class="btn btn--primary" [disabled]="cardDetails.invalid"
                    (click)="submitCarDetails()">{{ isEditMode ? 'Update Car' : 'Post Car' }}</button>
            </div>
        </form>
    </div>
</div>

<app-spinner-loader *ngIf="isLoading()"></app-spinner-loader>
```


---

## 📄 app\featurea\admin\post-car\post-car.component.scss

```
$bg: #080a12;

$surface: #0f1119;
$surface-light: #171b27;
$surface-hover: #1e2333;

$accent: #6d5ae8;
$accent-light: #b3a4f8;

$text: #ecedf5;
$muted: #6b6f85;

$border: rgba(255, 255, 255, .07);
$border-hover: rgba(255, 255, 255, .14);

$shadow: 0 1.5rem 4rem rgba(0, 0, 0, .45);

$ease: cubic-bezier(.4, 0, .2, 1);

:host {
    width: 100%;
    display: block;
}

.post-car {
    position: relative;

    width: 100%;
    min-height: 100%;

    padding: 1rem;

    overflow: hidden;

    &__bg {
        position: absolute;
        inset: 0;

        background:
            radial-gradient(circle at top right,
                rgba(109, 90, 232, .16),
                transparent 25%),
            radial-gradient(circle at bottom left,
                rgba(59, 130, 246, .10),
                transparent 30%);
    }

    &__card {
        position: relative;
        z-index: 2;

        width: 100%;
        max-width: 75rem;

        margin: 0 auto;

        padding: 2rem;

        border-radius: 1.5rem;

        border: .0625rem solid $border;

        background: rgba($surface, .88);

        backdrop-filter: blur(1.4rem);
        -webkit-backdrop-filter: blur(1.4rem);

        box-shadow: $shadow;
    }

    &__header {
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: space-between;

        gap: 1rem;

        margin-bottom: 2rem;

        h2 {
            font-size: 2rem;
            font-weight: 800;

            color: $text;

            line-height: 1.1;

            margin-bottom: .35rem;
        }

        p {
            font-size: .95rem;

            color: $muted;
        }
    }

    &__badge {
        padding: .8rem 1.2rem;

        border-radius: 100rem;

        background: rgba(109, 90, 232, .14);

        border: .0625rem solid rgba(109, 90, 232, .24);

        color: $accent-light;

        font-size: .85rem;
        font-weight: 600;
    }
}

.car-form {
    width: 100%;

    display: flex;
    flex-direction: column;

    gap: 1.5rem;

    &__row {
        width: 100%;

        display: grid;
        grid-template-columns: repeat(2, 1fr);

        gap: 1.5rem;
    }

    &__actions {
        width: 100%;

        display: flex;
        justify-content: flex-end;

        gap: 1rem;

        margin-top: .5rem;
    }
}

.field {
    width: 100%;

    display: flex;
    flex-direction: column;

    gap: .7rem;

    &__error {
        min-height: 1.2rem;
        font-size: .78rem;
        font-weight: 500;
        color: #ff6b6b;
        padding-left: .2rem;
        transition: all .2s ease;
    }

    &--full {
        grid-column: span 2;
    }

    label {
        font-size: .85rem;
        font-weight: 600;

        letter-spacing: .03rem;

        color: $muted;
    }

    &__wrapper {
        position: relative;
    }

    input,
    select,
    textarea {
        width: 100%;

        border: .0625rem solid $border;

        background: rgba($surface-light, .75);

        color: $text;

        outline: none;

        border-radius: 1rem;

        transition:
            border-color .2s $ease,
            background .2s $ease,
            box-shadow .2s $ease,
            transform .2s $ease;

        &:focus {
            border-color: rgba(109, 90, 232, .45);

            background: rgba($surface-hover, .92);

            box-shadow:
                0 0 0 .2rem rgba(109, 90, 232, .12);
        }

        &:hover {
            border-color: $border-hover;
        }

        &::placeholder {
            color: rgba(107, 111, 133, .6);
        }
    }

    input,
    select {
        height: 3.5rem;

        padding: 0 1rem;

        font-size: .95rem;
    }

    textarea {
        resize: none;

        padding: 1rem;

        font-size: .95rem;

        min-height: 10rem;
    }

    select {
        cursor: pointer;

        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;

        background-image:
            linear-gradient(45deg, transparent 50%, #b3a4f8 50%),
            linear-gradient(135deg, #b3a4f8 50%, transparent 50%);

        background-position:
            calc(100% - 1.2rem) calc(1.5rem),
            calc(100% - .9rem) calc(1.5rem);

        background-size: .4rem .4rem;

        background-repeat: no-repeat;
    }
}

.btn {
    min-width: 9rem;
    height: 3.2rem;

    padding: 0 1.4rem;

    border: none;

    border-radius: 1rem;

    cursor: pointer;

    font-size: .92rem;
    font-weight: 700;

    transition:
        transform .2s $ease,
        box-shadow .2s $ease,
        opacity .2s $ease;

    &:hover {
        transform: translateY(-.1rem);
    }

    &:active {
        transform: scale(.98);
    }

    &--primary {
        color: #fff;

        background:
            linear-gradient(135deg,
                $accent,
                #3b82f6);

        box-shadow:
            0 .7rem 2rem rgba(109, 90, 232, .35);

        &:disabled {
            opacity: .45;
            cursor: not-allowed;
            box-shadow: none;
            transform: none;
        }
    }

    &--secondary {
        background: rgba($surface-light, .9);

        border: .0625rem solid $border;

        color: $text;

        &:hover {
            border-color: $border-hover;
        }
    }
}

@media (max-width: 768px) {

    .post-car {
        padding: .5rem;

        &__card {
            padding: 1.2rem;
        }

        &__header {
            flex-direction: column;
            align-items: flex-start;

            h2 {
                font-size: 1.6rem;
            }
        }
    }

    .car-form {

        &__row {
            grid-template-columns: 1fr;
        }

        &__actions {
            flex-direction: column;
        }
    }

    .field {

        &--full {
            grid-column: span 1;
        }
    }

    .btn {
        width: 100%;
    }

    input[type="date"] {
        color-scheme: dark;
    }
}
```


---

## 📄 app\featurea\admin\post-car\post-car.component.spec.ts

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCarComponent } from './post-car.component';

describe('PostCarComponent', () => {
  let component: PostCarComponent;
  let fixture: ComponentFixture<PostCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostCarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

```


---

## 📄 app\featurea\admin\post-car\post-car.component.ts

```typescript
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SpinnerLoaderComponent } from '../../../shared/loaders/common-loader/spinner-loader/spinner-loader.component';
import { AdminService } from '../../../services/admin/admin.service';
import { ToastService } from '../../../services/toast-service/toast.service';
import { Router } from '@angular/router';
import { validationMessages } from '../../../models/post-cars';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-post-car',
  imports: [CommonModule, ReactiveFormsModule, SpinnerLoaderComponent],
  templateUrl: './post-car.component.html',
  styleUrl: './post-car.component.scss'
})
export class PostCarComponent implements OnInit {

  isEditMode: boolean = false;
  carId: string = '';
  colorList = signal<string[]>(['red', 'blue', 'green', 'yellow', 'black', 'white', 'orange']);
  listOfBrands = signal<string[]>(['Toyota', 'Honda', 'Ford', 'Chevrolet', 'BMW', 'Mercedes-Benz', 'Audi']);
  listOfModels = signal<string[]>(['Camry', 'Civic', 'Mustang', 'Impala', '3 Series', 'C-Class', 'A4']);
  listofTransmission = signal<string[]>(['Automatic', 'Manual', 'CVT', 'Dual-Clutch', 'Semi-Automatic']);
  listOfTypes = signal<string[]>(['Sedan', 'SUV', 'Hatchback', 'Coupe', 'Convertible', 'Wagon', 'Van']);
  isLoading = signal<boolean>(false);

  constructor(private readonly adminService: AdminService, private toastservice: ToastService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.carId = this.route.snapshot.paramMap.get('id') || '';
    if (this.carId) {
      this.isEditMode = true;
      this.getSingleCarDetails();
    }
  }

  cardDetails = new FormGroup({
    brand: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    price: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d+(\.\d{1,2})?$/)
    ]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(10)
    ]),
    year: new FormControl('', [Validators.required]),
    color: new FormControl('', [Validators.required]),
    transmission: new FormControl('', [Validators.required]),
    imgUrl: new FormControl('', [Validators.required])
  });

  get brand() { return this.cardDetails.get('brand')!; }
  get name() { return this.cardDetails.get('name')!; }
  get type() { return this.cardDetails.get('type')!; }
  get year() { return this.cardDetails.get('year')!; }
  get color() { return this.cardDetails.get('color')!; }
  get transmission() { return this.cardDetails.get('transmission')!; }
  get imgUrl() { return this.cardDetails.get('imgUrl')!; }
  get price() { return this.cardDetails.get('price')!; }
  get description() { return this.cardDetails.get('description')!; }

  getErrorMessage(controlName: string): string {
    const control = this.cardDetails.get(controlName);
    if (!control || !control.errors || !control.touched) {
      return '';
    }
    const errors = Object.keys(control.errors);
    if (errors.length > 0) {
      return validationMessages[controlName][errors[0]];
    }
    return '';
  }

  submitCarDetails() {
    this.cardDetails.markAllAsTouched();
    if (this.cardDetails.invalid) { return; }
    this.isLoading.set(true);
    const payload = {
      brand: this.brand.value || '',
      name: this.name.value || '',
      type: this.type.value || '',
      year: this.year.value || '',
      color: this.color.value || '',
      transmission: this.transmission.value || '',
      imgUrl: this.imgUrl.value || '',
      price: this.price.value || '',
      description: this.description.value || ''
    };
    if (this.isEditMode) {
      const id = Number(this.carId);
      this.adminService.updateCarDetails(id, payload).subscribe({
        next: (response: any) => {
          this.isLoading.set(false);
          this.toastservice.show(response?.message || 'Car updated successfully', 'success');
          this.router.navigate(['/admin']);
        },
        error: () => {
          this.isLoading.set(false);
          this.toastservice.show('Error updating car details', 'error');
        }
      });
    } else {
      this.adminService.addCarDetails(payload).subscribe({
        next: (response: any) => {
          this.isLoading.set(false);
          this.toastservice.show(response?.message, 'success');
          this.router.navigate(['/admin']);
        },
        error: () => {
          this.isLoading.set(false);
          this.toastservice.show('Error adding car details', 'error');
        }
      });

    }
  }

  getSingleCarDetails() {
    const id = Number(this.carId);
    this.adminService.getSingleCarDetails(id).subscribe({
      next: (response: any) => {
        const carData = response?.data;
        this.cardDetails.patchValue({
          brand: carData.brand?.trim(),
          name: carData.name,
          type: carData.type?.trim(),
          year: carData.year ? new Date(carData.year).toISOString().split('T')[0] : '',
          color: carData.color?.toLowerCase().trim(),
          transmission: carData.transmission?.trim(),
          imgUrl: carData.imgUrl,
          price: carData.price,
          description: carData.description
        });
      }
    });
  }
}
```


---

## 📄 app\featurea\admin\show-car-details\show-car-details.component.html

```html
<div class="cars-page">
  <!-- Header -->
  <div class="cars-page__header">
    <div>
      <h1>Explore Premium Cars</h1>
      <p>Browse luxury and performance vehicles available now.</p>
    </div>
    <button class="filter-btn">Filters</button>
  </div>

  <!-- Cards -->
  <div class="cars-list">
    <app-car-details-card *ngFor="let car of cars()" [carDetails]="car" (carDeleted)="onCarDeleted($event)" />
  </div>

</div>

<app-spinner-loader *ngIf="isLoading()"></app-spinner-loader> 
```


---

## 📄 app\featurea\admin\show-car-details\show-car-details.component.scss

```
:host {
  width: 100%;
  display: block;
}

.cars-page {
  width: 100%;
  padding: 2rem;
  min-height: 100vh;
  background:radial-gradient( circle at top right, rgba(109,90,232,.12), transparent 25%),#080a12;

  &__header {
    width: 100%;
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    h1 {
      font-size: 2.2rem;
      font-weight: 800;
      color: #f4f6ff;
      margin-bottom: .4rem;
    }

    p {
      font-size: 1rem;
      color: #8f95ad;
    }
  }
}

.cars-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
}

.filter-btn {
  height: 3.2rem;
  padding: 0 1.4rem;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  background:linear-gradient(135deg,#6d5ae8,#3b82f6);
  color: #fff;
  font-size: .92rem;
  font-weight: 700;
  box-shadow:0 .7rem 1.8rem rgba(109,90,232,.28);
  transition:transform .2s ease,opacity .2s ease;

  &:hover {
    transform: translateY(-.1rem);
  }
}

/* ================= RESPONSIVE ================= */

@media (max-width: 768px) {
  .cars-page {
    padding: 1rem;

    &__header {
      flex-direction: column;
      align-items: flex-start;
      h1 {
        font-size: 1.7rem;
      }
    }
  }
  .filter-btn {
    width: 100%;
  }
}
```


---

## 📄 app\featurea\admin\show-car-details\show-car-details.component.spec.ts

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCarDetailsComponent } from './show-car-details.component';

describe('ShowCarDetailsComponent', () => {
  let component: ShowCarDetailsComponent;
  let fixture: ComponentFixture<ShowCarDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowCarDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowCarDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

```


---

## 📄 app\featurea\admin\show-car-details\show-car-details.component.ts

```typescript
import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarDetailsCardComponent } from '../../../shared/components/car-details-card/car-details-card.component';
import { carDetails, getCarDetailsResponse } from '../../../models/post-cars';
import { AdminService } from '../../../services/admin/admin.service';
import { SpinnerLoaderComponent } from '../../../shared/loaders/common-loader/spinner-loader/spinner-loader.component';

@Component({
  selector: 'app-show-car-details',
  standalone: true,
  imports: [CommonModule, CarDetailsCardComponent, SpinnerLoaderComponent],
  templateUrl: './show-car-details.component.html',
  styleUrl: './show-car-details.component.scss'
})
export class ShowCarDetailsComponent implements OnInit {

  cars = signal<getCarDetailsResponse[]>([]);
  isLoading = signal<boolean>(false);

  constructor(private readonly adminService: AdminService) { }

  ngOnInit(): void {
    this.loadAllCarDetails();
  }

  loadAllCarDetails() {
    this.isLoading.set(true);
    this.adminService.getAllCarDetailsData().subscribe({
      next: (response: any) => {
        this.isLoading.set(false);
        this.cars.set(response?.data || []);
      },
      error: (error) => {
        console.error('Error fetching car details:', error);
        this.isLoading.set(false);
      }
    })
  }

  onCarDeleted(carId: string) {
    this.cars.update(cars =>
      cars.filter(car => car.carId !== carId)  
    );
  }

}
```


---

## 📄 app\featurea\customer\customer.component.html

```html
<div class="customer-page">
    <!-- Header -->
    <div class="customer-page__header">
        <div>
            <h1>Available Cars</h1>
            <p>Choose your perfect ride from premium collections.</p>
        </div>
        <button class="explore-btn"> Explore Cars</button>
    </div>

    <!-- Car List -->
    <div class="cars-list">
        <app-car-details-card
            *ngFor="let car of carDetails()"
            [carDetails]="car">
        </app-car-details-card>
    </div>
</div>
<app-spinner-loader *ngIf="isLoading()"></app-spinner-loader>
```


---

## 📄 app\featurea\customer\customer.component.scss

```
:host {
    width: 100%;
    display: block;
}

.customer-page {
    width: 100%;
    min-height: 100vh;
    padding: 2rem;
    background:radial-gradient( circle at top right, rgba(109, 90, 232, .12), transparent 25%),#080a12;

    &__header {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        margin-bottom: 2rem;

        h1 {
            font-size: 2.2rem;
            font-weight: 800;
            color: #f4f6ff;
            margin-bottom: .4rem;
        }

        p {
            font-size: 1rem;
            color: #8f95ad;
        }
    }
}

.cars-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
}

.explore-btn {
    height: 3.2rem;
    padding: 0 1.5rem;
    border: none;
    border-radius: 1rem;
    cursor: pointer;
    background:linear-gradient( 135deg, #6d5ae8, #3b82f6);
    color: #ffffff;
    font-size: .92rem;
    font-weight: 700;
    box-shadow:0 .7rem 1.8rem rgba(109, 90, 232, .28);
    transition: transform .2s ease, opacity .2s ease;

    &:hover {
        transform: translateY(-.1rem);
    }
}

/* ================= RESPONSIVE ================= */

@media (max-width: 768px) {

    .customer-page {
        padding: 1rem;
        &__header {
            flex-direction: column;
            align-items: flex-start;

            h1 {
                font-size: 1.7rem;
            }
        }
    }

    .explore-btn {
        width: 100%;
    }
}
```


---

## 📄 app\featurea\customer\customer.component.spec.ts

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerComponent } from './customer.component';

describe('CustomerComponent', () => {
  let component: CustomerComponent;
  let fixture: ComponentFixture<CustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

```


---

## 📄 app\featurea\customer\customer.component.ts

```typescript
import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerService } from '../../services/customer/customer.service';
import { CarDetailsCardComponent } from '../../shared/components/car-details-card/car-details-card.component';
import { SpinnerLoaderComponent } from '../../shared/loaders/common-loader/spinner-loader/spinner-loader.component';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [CommonModule,CarDetailsCardComponent,SpinnerLoaderComponent],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss'
})
export class CustomerComponent implements OnInit {

  carDetails = signal<any[]>([]);
  isLoading = signal<boolean>(false);

  constructor(private readonly customerService: CustomerService) { }

  ngOnInit(): void {
    this.getAllCarDetails();
  }

  getAllCarDetails() {
    this.isLoading.set(true);
    this.customerService.getAllCarDetails().subscribe({
      next: (response: any) => {
        this.isLoading.set(false);
        this.carDetails.set(response?.data || []);
      },
      error: (error: any) => {
        this.isLoading.set(false);
        console.error('Error fetching car details:', error);
      }
    });
  }

}
```


---

## 📄 app\models\auth.ts

```typescript
export interface SignupData {
    name: string;
    email: string;
    password: string;
}

export interface LoginData {
    email: string;
    password: string;
}
```


---

## 📄 app\models\post-cars.ts

```typescript
export interface carDetails{
    brand: string;
    name: string;
    type: string;
    year: string;
    color: string;
    transmission: string;
    imgUrl: string;
    price: string;
    description: string;
}


export interface getCarDetailsResponse{
    brand: string;
    name: string;
    type: string;
    year: string;
    color: string;
    transmission: string;
    imgUrl: string;
    price: string;
    description: string;
    carId: string;
}

 export const validationMessages: any = {
    brand: {
      required: 'Brand is required'
    },
    name: {
      required: 'Car name is required'
    },
    type: {
      required: 'Car type is required'
    },
    price: {
      required: 'Price is required',
      pattern: 'Enter valid price'
    },
    description: {
      required: 'Description is required',
      minlength: 'Minimum 10 characters required'
    },
    year: {
      required: 'Year is required'
    },
    color: {
      required: 'Color is required'
    },
    transmission: {
      required: 'Transmission is required'
    },
    imgUrl: {
      required: 'Image URL is required'
    }
  };
```


---

## 📄 app\services\admin\admin.service.spec.ts

```typescript
import { TestBed } from '@angular/core/testing';

import { AdminService } from './admin.service';

describe('AdminService', () => {
  let service: AdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

```


---

## 📄 app\services\admin\admin.service.ts

```typescript
import { Injectable } from '@angular/core';
import { APIENDPOINTS } from '../../core/enums/apiEndPoints';
import { HttpClient } from '@angular/common/http';
import { carDetails } from '../../models/post-cars';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  apiendpoints = APIENDPOINTS

  constructor(private http: HttpClient) { }

  addCarDetails(payload: carDetails) {
    const url = this.apiendpoints.admin.POST_CARD_DETAILS;
    return this.http.post(url, payload);
  }

  getAllCarDetailsData() {
    const url = this.apiendpoints.admin.GET_ALL_CAR_DETAILS;
    return this.http.get(url);
  }

  deleteCarDetails(id: number) {
    const url = `${this.apiendpoints.admin.DELETE_CAR_DETAILS}/${id}`;
    return this.http.delete(url);
  }


  getSingleCarDetails(id: number) {
    const url = `${this.apiendpoints.admin.GET_ALL_CAR_DETAILS}/${id}`;
    return this.http.get(url);
  }

  updateCarDetails(id: number, payload: carDetails) {
    const url = `${this.apiendpoints.admin.UPDATE_CAR_DETAILS}/${id}`;
    return this.http.put(url, payload);
  }

  getHistoryOfBookedCars() {
    const url = this.apiendpoints.admin.HISTORY_OF_BOOKED_CARS;
    return this.http.get(url);
  }

  changestatusOfBooking(id: number, status: string) {
    const url = `${this.apiendpoints.admin.CHANGE_BOOKING_STATUS}/${id}/${status}`;
    return this.http.get(url);
  }
}

```


---

## 📄 app\services\auth\auth.service.spec.ts

```typescript
import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

```


---

## 📄 app\services\auth\auth.service.ts

```typescript
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginData, SignupData } from '../../models/auth';
import { APIENDPOINTS } from '../../core/enums/apiEndPoints';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiendpoints = APIENDPOINTS
  constructor(private http: HttpClient) { }

  userSignup(signupData: SignupData) {
    const Url = this.apiendpoints.SIGNUP
    return this.http.post(Url, signupData);
  }

  userLogin(logindata: LoginData) {
    const Url = this.apiendpoints.LOGIN
    return this.http.post(Url, logindata);
  }

  setUserdata(userdata: any) {
    localStorage.setItem('userdata', JSON.stringify(userdata));
  }

  getUserdata() {
    const userdata = localStorage.getItem('userdata');
    if (userdata) {return JSON.parse(userdata);}
    return null;
  }

  clearUserdata() {
    localStorage.removeItem('userdata');
  }

  static userRole(){
    const userdata = localStorage.getItem('userdata');
    if (userdata) {
      const parsedData = JSON.parse(userdata);
      return parsedData.role;
    }
    return null;
  }

  static isAdminLoggedIn() {
    const userdata = localStorage.getItem('userdata');
    if (userdata) {
      const parsedData = JSON.parse(userdata);
      return parsedData.role === 'ADMIN';
    }
    return false;
  }

  static isUserLoggedIn() {
    const userdata = localStorage.getItem('userdata');
    if (userdata) {
      const parsedData = JSON.parse(userdata);
      return parsedData.role === 'CUSTOMER';
    }
    return false;
  }



}

```


---

## 📄 app\services\customer\customer.service.spec.ts

```typescript
import { TestBed } from '@angular/core/testing';

import { CustomerService } from './customer.service';

describe('CustomerService', () => {
  let service: CustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

```


---

## 📄 app\services\customer\customer.service.ts

```typescript
import { Injectable } from '@angular/core';
import { APIENDPOINTS } from '../../core/enums/apiEndPoints';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiendpoints = APIENDPOINTS

  constructor(private http: HttpClient) { }

  getAllCarDetails(){
    return this.http.get(this.apiendpoints.customer.GET_ALL_CAR_DETAILS)
  }

  getCarDetailsById(carId: string){
    const url = this.apiendpoints.customer.GET_CAR_DETAILS_BY_ID+`/${carId}`;
    return this.http.get(url);
  }

  bookCar(payload:any){
    const url = this.apiendpoints.customer.BOOK_CAR;
    return this.http.post(url,payload);
  }

  getMyBookingHistory(id: string){
    const url = this.apiendpoints.customer.MY_BOOKING_HISTORY+`/${id}`;
    return this.http.get(url);
  }

}

```


---

## 📄 app\services\store\store.service.spec.ts

```typescript
import { TestBed } from '@angular/core/testing';

import { StoreService } from './store.service';

describe('StoreService', () => {
  let service: StoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

```


---

## 📄 app\services\store\store.service.ts

```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }
}

```


---

## 📄 app\services\toast-service\toast.service.spec.ts

```typescript
import { TestBed } from '@angular/core/testing';

import { ToastService } from './toast.service';

describe('ToastService', () => {
  let service: ToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

```


---

## 📄 app\services\toast-service\toast.service.ts

```typescript
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface Toast {           
  message: string;
  type: 'success' | 'error' | 'info';
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  private toastSubject = new Subject<Toast>();
  toast$ = this.toastSubject.asObservable();

  constructor() { }

  show(message: string, type: Toast['type'] = 'success') {
    this.toastSubject.next({ message, type });
  }
}
```


---

## 📄 app\shared\components\book-car\book-car.component.html

```html
<div class="book-page">

    <div class="book-card">

        <!-- LEFT IMAGE -->
        <div class="book-card__image">

            <img
                [src]="carDetails().imgUrl"
                [alt]="carDetails().name">

            <div class="image-overlay"></div>

            <div class="brand-badge">
                {{ carDetails().brand }}
            </div>

        </div>

        <!-- RIGHT CONTENT -->
        <div class="book-card__content">

            <!-- HEADER -->
            <div class="car-header">

                <div>

                    <h1>
                        {{ carDetails().name }}
                    </h1>

                    <p class="car-type">
                        {{ carDetails().type }}
                    </p>

                </div>

                <div class="price-box">

                    <span>
                        Rental Price
                    </span>

                    <h2>
                        ₹ {{ carDetails().price }}
                    </h2>

                    <p>
                        Per Day
                    </p>

                </div>

            </div>

            <!-- SPECS -->
            <div class="specs-grid">

                <div class="spec-card">

                    <span class="label">
                        Year
                    </span>

                    <span class="value">
                        {{ carDetails().year }}
                    </span>

                </div>

                <div class="spec-card">

                    <span class="label">
                        Color
                    </span>

                    <span class="value">
                        {{ carDetails().color }}
                    </span>

                </div>

                <div class="spec-card">

                    <span class="label">
                        Transmission
                    </span>

                    <span class="value">
                        {{ carDetails().transmission }}
                    </span>

                </div>

            </div>

            <!-- DESCRIPTION -->
            <div class="description-section">

                <h3>
                    About This Car
                </h3>

                <p>
                    {{ carDetails().description }}
                </p>

            </div>

            <!-- BOOKING FORM -->
            <form
                class="booking-form"
                [formGroup]="bookingForm">

                <h3>
                    Book This Car
                </h3>

                <div class="form-grid">

                    <div class="form-field">

                        <label>
                            From Date
                        </label>

                        <input
                            type="date"
                            formControlName="fromDate">

                    </div>

                    <div class="form-field">

                        <label>
                            To Date
                        </label>

                        <input
                            type="date"
                            formControlName="toDate">

                    </div>

                </div>

                <!-- SUMMARY -->
                <div class="booking-summary">

                    <div class="summary-card">

                        <span>
                            Total Days
                        </span>

                        <h4>
                            {{ calculateTotalDays() }}
                        </h4>

                    </div>

                    <div class="summary-card">

                        <span>
                            Total Amount
                        </span>

                        <h4>
                            ₹ {{ getTotalAmount() }}
                        </h4>

                    </div>

                </div>

            </form>

            <!-- AVAILABILITY -->
            <div class="booking-info">

                <div class="booking-info__item">

                    <span class="booking-label">
                        Availability
                    </span>

                    <span class="booking-value available">
                        Available
                    </span>

                </div>

            </div>

            <!-- BUTTONS -->
            <div class="action-section">

                <button
                    type="button"
                    class="btn btn--secondary"
                    (click)="navigateToCarDetails()">

                    Back

                </button>

                <button
                    type="button"
                    class="btn btn--primary"
                    [disabled]="bookingForm.invalid"
                    (click)="confirmBooking()">

                    Confirm Booking

                </button>

            </div>

        </div>

    </div>

</div>

<app-spinner-loader *ngIf="isLoading()"></app-spinner-loader>
```


---

## 📄 app\shared\components\book-car\book-car.component.scss

```
:host {

    width: 100%;
    display: block;
}

.book-page {

    width: 100%;
    min-height: 100vh;

    padding: 2rem;

    display: flex;
    justify-content: center;
    align-items: center;

    background:
        radial-gradient(
            circle at top right,
            rgba(109, 90, 232, .14),
            transparent 25%
        ),
        #080a12;
}

.book-card {

    width: 100%;
    max-width: 90rem;

    display: grid;
    grid-template-columns: 42% 58%;

    overflow: hidden;

    border-radius: 2rem;

    background:
        linear-gradient(
            135deg,
            rgba(15, 17, 25, .96),
            rgba(11, 13, 20, .98)
        );

    border: .0625rem solid rgba(255,255,255,.06);

    box-shadow:
        0 1.5rem 4rem rgba(0,0,0,.35);

    &__image {

        position: relative;

        width: 100%;
        height: 100%;

        overflow: hidden;

        img {

            width: 100%;
            height: 100%;

            object-fit: cover;

            transition: transform .4s ease;
        }

        &:hover img {

            transform: scale(1.05);
        }
    }

    &__content {

        padding: 2.5rem;

        display: flex;
        flex-direction: column;
    }
}

.image-overlay {

    position: absolute;

    inset: 0;

    background:
        linear-gradient(
            to top,
            rgba(0,0,0,.7),
            rgba(0,0,0,.15)
        );
}

.brand-badge {

    position: absolute;

    top: 1.5rem;
    left: 1.5rem;

    z-index: 2;

    padding: .65rem 1.2rem;

    border-radius: 100rem;

    background: rgba(109,90,232,.22);

    border: .0625rem solid rgba(109,90,232,.35);

    color: #d8ceff;

    font-size: .82rem;
    font-weight: 700;
}

.car-header {

    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    gap: 1.5rem;

    margin-bottom: 2rem;

    h1 {

        font-size: 2.5rem;
        font-weight: 800;

        color: #f4f6ff;

        margin-bottom: .5rem;
    }
}

.car-type {

    color: #8f95ad;

    font-size: 1rem;
}

.price-box {

    min-width: 13rem;

    padding: 1.4rem;

    border-radius: 1.2rem;

    background:
        linear-gradient(
            135deg,
            rgba(109,90,232,.18),
            rgba(59,130,246,.12)
        );

    border: .0625rem solid rgba(255,255,255,.08);

    text-align: center;

    span {

        color: #a5aed0;

        font-size: .82rem;
    }

    h2 {

        color: #ffffff;

        font-size: 2rem;
        font-weight: 800;

        margin: .5rem 0;
    }

    p {

        color: #8f95ad;

        font-size: .85rem;
    }
}

.specs-grid {

    width: 100%;

    display: grid;

    grid-template-columns: repeat(3, 1fr);

    gap: 1rem;

    margin-bottom: 2rem;
}

.spec-card {

    padding: 1rem;

    border-radius: 1rem;

    background: rgba(255,255,255,.03);

    border: .0625rem solid rgba(255,255,255,.05);

    display: flex;
    flex-direction: column;

    gap: .45rem;
}

.label {

    color: #7f879f;

    font-size: .72rem;

    text-transform: uppercase;
}

.value {

    color: #f4f6ff;

    font-size: 1rem;
    font-weight: 700;
}

.description-section {

    margin-bottom: 2rem;

    h3 {

        color: #ffffff;

        font-size: 1.2rem;

        margin-bottom: 1rem;
    }

    p {

        color: #a4a9be;

        line-height: 1.8;
    }
}

.booking-form {

    width: 100%;

    margin-bottom: 2rem;

    h3 {

        color: #ffffff;

        font-size: 1.2rem;

        margin-bottom: 1.5rem;
    }
}

.form-grid {

    width: 100%;

    display: grid;

    grid-template-columns: repeat(2, 1fr);

    gap: 1rem;
}

.form-field {

    display: flex;
    flex-direction: column;

    gap: .7rem;

    label {

        color: #8f95ad;

        font-size: .85rem;
        font-weight: 600;
    }

    input {

        width: 100%;

        height: 3.4rem;

        padding: 0 1rem;

        border-radius: 1rem;

        border: .0625rem solid rgba(255,255,255,.08);

        background: rgba(255,255,255,.03);

        color: #ffffff;

        outline: none;

        transition:
            border-color .2s ease,
            background .2s ease;

        &:focus {

            border-color: rgba(109,90,232,.45);

            background: rgba(255,255,255,.05);
        }
    }
}

.booking-summary {

    width: 100%;

    display: grid;

    grid-template-columns: repeat(2, 1fr);

    gap: 1rem;

    margin-top: 1.5rem;
}

.summary-card {

    padding: 1.2rem;

    border-radius: 1rem;

    background: rgba(255,255,255,.03);

    border: .0625rem solid rgba(255,255,255,.06);

    span {

        color: #8f95ad;

        font-size: .8rem;
    }

    h4 {

        margin-top: .5rem;

        color: #ffffff;

        font-size: 1.5rem;
        font-weight: 800;
    }
}

.booking-info {

    margin-bottom: 2rem;

    &__item {

        padding: 1rem;

        border-radius: 1rem;

        background: rgba(255,255,255,.03);

        border: .0625rem solid rgba(255,255,255,.05);

        display: flex;
        flex-direction: column;

        gap: .5rem;
    }
}

.booking-label {

    color: #8f95ad;

    font-size: .8rem;
}

.booking-value {

    font-size: 1rem;
    font-weight: 700;
}

.available {

    color: #4ade80;
}

.action-section {

    display: flex;

    gap: 1rem;
}

.btn {

    flex: 1;

    height: 3.3rem;

    border: none;

    border-radius: 1rem;

    cursor: pointer;

    font-size: .95rem;
    font-weight: 700;

    transition:
        transform .2s ease,
        opacity .2s ease;

    &:hover {

        transform: translateY(-.1rem);
    }

    &:disabled {

        opacity: .45;

        cursor: not-allowed;

        transform: none;
    }

    &--primary {

        color: #ffffff;

        background:
            linear-gradient(
                135deg,
                #6d5ae8,
                #3b82f6
            );

        box-shadow:
            0 .7rem 1.8rem rgba(109,90,232,.28);
    }

    &--secondary {

        background: rgba(255,255,255,.05);

        border: .0625rem solid rgba(255,255,255,.08);

        color: #ffffff;
    }
}

@media (max-width: 992px) {

    .book-card {

        grid-template-columns: 1fr;

        &__image {

            height: 24rem;
        }
    }

    .car-header {

        flex-direction: column;
    }

    .price-box {

        width: 100%;
    }

    .specs-grid {

        grid-template-columns: 1fr;
    }
}

@media (max-width: 768px) {

    .book-page {

        padding: 1rem;
    }

    .book-card {

        &__content {

            padding: 1.4rem;
        }
    }

    .form-grid {

        grid-template-columns: 1fr;
    }

    .booking-summary {

        grid-template-columns: 1fr;
    }

    .action-section {

        flex-direction: column;
    }
}
```


---

## 📄 app\shared\components\book-car\book-car.component.spec.ts

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCarComponent } from './book-car.component';

describe('BookCarComponent', () => {
  let component: BookCarComponent;
  let fixture: ComponentFixture<BookCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookCarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

```


---

## 📄 app\shared\components\book-car\book-car.component.ts

```typescript
import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {FormControl,FormGroup,ReactiveFormsModule,Validators} from '@angular/forms';

import { CustomerService } from '../../../services/customer/customer.service';
import { SpinnerLoaderComponent } from '../../loaders/common-loader/spinner-loader/spinner-loader.component';
import { ToastService } from '../../../services/toast-service/toast.service';

@Component({
  selector: 'app-book-car',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule, SpinnerLoaderComponent],
  templateUrl: './book-car.component.html',
  styleUrl: './book-car.component.scss'
})
export class BookCarComponent implements OnInit {

  carId = signal<string>('');
  carDetails = signal<any>({});
  isLoading = signal<boolean>(false);

  bookingForm = new FormGroup({
    fromDate: new FormControl('', [Validators.required]),
    toDate: new FormControl('', [Validators.required])
  });

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private customerService: CustomerService,
    private toastService: ToastService
  ) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(params => {
      this.carId.set(params.get('id') || '');
      this.loadData(this.carId());
    });
  }

  loadData(carId: string) {
    this.isLoading.set(true);
    this.customerService.getCarDetailsById(carId).subscribe({
      next: (response: any) => {
        this.carDetails.set(response?.data || {});
        this.isLoading.set(false);
      },

      error: (error: any) => {
        this.isLoading.set(false);
        this.toastService.show(
          error?.error?.message || 'Failed to fetch car details.',
          'error'
        );
      }

    });

  }

  calculateTotalDays(): number {
    const fromDate = this.bookingForm.value.fromDate;
    const toDate = this.bookingForm.value.toDate;
    if (!fromDate || !toDate) {
      return 0;
    }

    const start = new Date(fromDate).getTime();
    const end = new Date(toDate).getTime();
    const diff = end - start;
    return Math.ceil(diff / (1000 * 60 * 60 * 24));

  }

  getTotalAmount(): number {
    const totalDays = this.calculateTotalDays();
    const price = Number(this.carDetails()?.price || 0);
    return totalDays * price;
  }

  confirmBooking() {
    this.bookingForm.markAllAsTouched();
    if (this.bookingForm.invalid) {
      return;
    }

    const totalDays = this.calculateTotalDays();
    const pricePerDay = Number(
      this.carDetails()?.price || 0
    );

    const totalAmount = this.getTotalAmount();
    const payload = {
      carId: Number(this.carId()),
      userId: JSON.parse(
        localStorage.getItem('userdata') || '{}'
      )?.userId,
      fromDate: this.bookingForm.value.fromDate,
      toDate: this.bookingForm.value.toDate,
      days: totalDays,
      pricePerDay: pricePerDay,
      price: totalAmount
    };

    this.isLoading.set(true);
    this.customerService.bookCar(payload).subscribe({
      next: (response: any) => {
        this.isLoading.set(false);
        this.toastService.show(response?.message || 'Car booked successfully.','success');
        this.router.navigate(['/user/dashboard']);
      },
      error: (error: any) => {
        this.isLoading.set(false);
        this.toastService.show(error?.error?.message || 'Failed to book car.','error');
      }
    });

  }

  navigateToCarDetails() {
    this.router.navigate(['/user/dashboard']);
  }

}
```


---

## 📄 app\shared\components\booked-cars\booked-cars.component.html

```html
<div class="booked-cars">

    <div class="booked-cars__header">

        <h1>
            Booked Cars History
        </h1>

        <p>
            All customer booked car details
        </p>

    </div>

    <div class="table-wrapper">

        <table class="booking-table">

            <thead>

                <tr>

                    <th>#</th>

                    <th>Customer</th>

                    <th>Email</th>

                    <th>Car Image</th>

                    <th>Days</th>

                    <th>From Date</th>

                    <th>To Date</th>

                    <th>Total Price</th>

                    <th>Status</th>

                    <th>Action</th>

                </tr>

            </thead>

            <tbody>

                <tr *ngFor="let booking of bookedCars; let i = index">

                    <td>
                        {{ i + 1 }}
                    </td>

                    <td>
                        {{ booking.user_name }}
                    </td>

                    <td>
                        {{ booking.email }}
                    </td>

                    <td>

                        <img
                            [src]="booking.imgUrl"
                            alt="car-image"
                            class="car-image">

                    </td>

                    <td>
                        {{ booking.days }}
                    </td>

                    <td>
                        {{ booking.fromDate | date:'dd MMM yyyy' }}
                    </td>

                    <td>
                        {{ booking.toDate | date:'dd MMM yyyy' }}
                    </td>

                    <td>
                        ₹ {{ booking.price }}
                    </td>

                    <td>

                        <span
                            class="status"
                            [ngClass]="{
                                'status--pending': booking.bookCarStatus === 'PENDING',
                                'status--approved': booking.bookCarStatus === 'APPROVED',
                                'status--rejected': booking.bookCarStatus === 'REJECTED'
                            }">

                            {{ booking.bookCarStatus }}

                        </span>

                    </td>

                    <td class="action-column">

                        <div class="action-icons">

                            <button
                                class="icon-btn icon-btn--accept"
                                (click)="updateBookingStatus(booking.id,'APPROVED')"
                                [disabled]="
                                    booking.bookCarStatus === 'APPROVED' ||
                                    booking.bookCarStatus === 'REJECTED' ||
                                    booking.isUpdating
                                ">

                                ✓

                            </button>

                            <button
                                class="icon-btn icon-btn--reject"
                                (click)="updateBookingStatus(booking.id,'REJECTED')"
                                [disabled]="
                                    booking.bookCarStatus === 'APPROVED' ||
                                    booking.bookCarStatus === 'REJECTED' ||
                                    booking.isUpdating
                                ">

                                ✕

                            </button>

                        </div>

                    </td>

                </tr>

                <tr *ngIf="!bookedCars.length">

                    <td colspan="10" class="empty-data">

                        No Booking History Found

                    </td>

                </tr>

            </tbody>

        </table>

    </div>

</div>

<app-spinner-loader *ngIf="isloading"></app-spinner-loader>
```


---

## 📄 app\shared\components\booked-cars\booked-cars.component.scss

```
:host {

    width: 100%;

    display: block;
}

.booked-cars {

    width: 100%;

    min-height: 100vh;

    padding: 2rem;

    background:
        radial-gradient(
            circle at top right,
            rgba(109, 90, 232, .12),
            transparent 25%
        ),
        #080a12;

    &__header {

        margin-bottom: 2rem;

        h1 {

            font-size: 2rem;

            font-weight: 800;

            color: #f4f6ff;

            margin-bottom: .5rem;
        }

        p {

            color: #8f95ad;

            font-size: .95rem;
        }
    }
}

.table-wrapper {

    width: 100%;

    overflow-x: auto;

    border-radius: 1.2rem;

    border: .0625rem solid rgba(255,255,255,.06);

    background: rgba(255,255,255,.03);
}

.booking-table {

    width: 100%;

    border-collapse: collapse;

    min-width: 82rem;

    thead {

        background: rgba(255,255,255,.04);

        th {

            padding: 1rem;

            text-align: left;

            color: #ffffff;

            font-size: .9rem;

            font-weight: 700;

            border-bottom: .0625rem solid rgba(255,255,255,.08);

            white-space: nowrap;
        }
    }

    tbody {

        tr {

            transition: background .2s ease;

            &:hover {

                background: rgba(255,255,255,.03);
            }
        }

        td {

            padding: 1rem;

            color: #d8dcef;

            font-size: .9rem;

            border-bottom: .0625rem solid rgba(255,255,255,.05);

            white-space: nowrap;
        }
    }
}

.car-image {

    width: 6rem;

    height: 4rem;

    object-fit: cover;

    border-radius: .7rem;

    border: .0625rem solid rgba(255,255,255,.08);
}

.status {

    padding: .45rem .9rem;

    border-radius: 100rem;

    font-size: .78rem;

    font-weight: 700;

    display: inline-flex;

    align-items: center;

    justify-content: center;

    &--pending {

        background: rgba(255, 193, 7, .15);

        color: #ffc107;
    }

    &--approved {

        background: rgba(34, 197, 94, .15);

        color: #22c55e;
    }

    &--rejected {

        background: rgba(239, 68, 68, .15);

        color: #ef4444;
    }
}

.action-column {

    width: 1%;

    white-space: nowrap;
}

.action-icons {

    display: flex;

    align-items: center;

    gap: .4rem;
}

.icon-btn {

    width: 2rem;

    height: 2rem;

    padding: 0;

    border: none;

    border-radius: .5rem;

    cursor: pointer;

    display: flex;

    align-items: center;

    justify-content: center;

    font-size: .9rem;

    font-weight: 800;

    line-height: 1;

    transition:
        transform .2s ease,
        background .2s ease;

    &:hover {

        transform: translateY(-.05rem);
    }

    &:disabled {

        opacity: .45;

        cursor: not-allowed;

        pointer-events: none;
    }

    &--accept {

        background: rgba(34,197,94,.15);

        color: #22c55e;

        &:hover {

            background: rgba(34,197,94,.22);
        }
    }

    &--reject {

        background: rgba(239,68,68,.15);

        color: #ef4444;

        &:hover {

            background: rgba(239,68,68,.22);
        }
    }
}

.empty-data {

    text-align: center;

    padding: 2rem !important;

    color: #8f95ad !important;
}

@media (max-width: 768px) {

    .booked-cars {

        padding: 1rem;

        &__header {

            h1 {

                font-size: 1.6rem;
            }
        }
    }
}
```


---

## 📄 app\shared\components\booked-cars\booked-cars.component.spec.ts

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedCarsComponent } from './booked-cars.component';

describe('BookedCarsComponent', () => {
  let component: BookedCarsComponent;
  let fixture: ComponentFixture<BookedCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookedCarsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookedCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

```


---

## 📄 app\shared\components\booked-cars\booked-cars.component.ts

```typescript
import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';

import { AdminService } from '../../../services/admin/admin.service';
import { SpinnerLoaderComponent } from '../../loaders/common-loader/spinner-loader/spinner-loader.component';
import { ToastService } from '../../../services/toast-service/toast.service';

@Component({
  selector: 'app-booked-cars',
  standalone: true,
  imports: [
    CommonModule,
    DatePipe,
    SpinnerLoaderComponent
  ],
  templateUrl: './booked-cars.component.html',
  styleUrl: './booked-cars.component.scss'
})
export class BookedCarsComponent {

  bookedCars: any[] = [];

  isloading: boolean = false;

  constructor(
    private adminService: AdminService,
    private toastService: ToastService
  ) { }

  ngOnInit() {

    this.getBookedCars();
  }

  getBookedCars() {

    this.isloading = true;

    this.adminService.getHistoryOfBookedCars().subscribe({

      next: (response: any) => {

        this.isloading = false;

        this.bookedCars = response?.data || [];
      },

      error: (error) => {

        this.isloading = false;

        console.error(
          'Error fetching booked cars history:',
          error
        );
      }
    });
  }

  updateBookingStatus(
    bookingId: number,
    status: string
  ) {

    const selectedBooking = this.bookedCars.find(
      booking => booking.id === bookingId
    );

    if (!selectedBooking) {

      return;
    }

    selectedBooking.isUpdating = true;

    const payloadStatus =
      status.charAt(0).toUpperCase() +
      status.slice(1).toLowerCase();

    this.adminService
      .changestatusOfBooking(
        bookingId,
        payloadStatus
      )
      .subscribe({

        next: (response: any) => {

          this.toastService.show(
            response?.Message ||
            'Booking status updated successfully',
            'success'
          );

          selectedBooking.bookCarStatus = status;

          selectedBooking.isUpdating = false;
        },

        error: (error: any) => {

          selectedBooking.isUpdating = false;

          this.toastService.show(
            error?.error?.Message ||
            'Error updating booking status',
            'error'
          );
        }
      });
  }
}
```


---

## 📄 app\shared\components\car-details-card\car-details-card.component.html

```html
<div class="car-card">

  <!-- Image -->
  <div class="car-card__image">
    <img [src]="carDetails.imgUrl" [alt]="carDetails.name" />
    <div class="car-card__overlay"></div>

    <div class="car-card__top">
      <span class="tag">{{ carDetails.brand }}</span>
      <span class="price">₹ {{ carDetails.price }}</span>
    </div>

  </div>

  <!-- Content -->
  <div class="car-card__content">
    <div class="car-card__heading">
      <div>
        <h2>{{ carDetails.name }}</h2>
        <p>{{ carDetails.type }}</p>
      </div>

      <div class="car-card__heading">
        <div class="admin-actions" *ngIf="isAdmin">
          <!-- Edit -->
          <button class="action-btn action-btn--edit" [disabled]="isLoading"
            (click)="updateCarDetails(carDetails.carId)"> 
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M11 4H4C3.44772 4 3 4.44772 3 5V20C3 20.5523 3.44772 21 4 21H19C19.5523 21 20 20.5523 20 19V12"
                stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
              <path
                d="M18.5 2.5C19.3284 1.67157 20.6716 1.67157 21.5 2.5C22.3284 3.32843 22.3284 4.67157 21.5 5.5L12 15L8 16L9 12L18.5 2.5Z"
                stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
          <!-- Delete -->
          <button class="action-btn action-btn--delete" [disabled]="isLoading"
            (click)="deleteCarDetails(carDetails.carId)">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M3 6H21" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
              <path d="M8 6V4C8 3.44772 8.44772 3 9 3H15C15.5523 3 16 3.44772 16 4V6" stroke="currentColor"
                stroke-width="1.8" />
              <path
                d="M19 6L18.2 19C18.1368 20.027 17.2852 20.8333 16.2563 20.8333H7.74366C6.71479 20.027 5.86318 20.027 5.8 19L5 6"
                stroke="currentColor" stroke-width="1.8" />
              <path d="M10 11V17" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
              <path d="M14 11V17" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
            </svg>
          </button>
        </div>
      </div>

    </div>

    <!-- Specs -->
    <div class="specs">

      <div class="spec">
        <span class="spec__label">Year</span>
        <span class="spec__value"> {{ carDetails.year | date:'yyyy' }}</span>
      </div>

      <div class="spec">
        <span class="spec__label">Color</span>
        <span class="spec__value">{{ carDetails.color }}</span>
      </div>

      <div class="spec">
        <span class="spec__label">Transmission</span>
        <span class="spec__value">{{ carDetails.transmission }}</span>
      </div>

    </div>

    <!-- Description -->
    <p class="description">
      {{ carDetails.description }}
    </p>

    <!-- Footer -->
    <div class="car-card__footer">
      <button class="btn btn--secondary" *ngIf="isAdmin">Details</button>
      <button class="btn btn--primary" *ngIf="!isAdmin" (click)="navigateToBookCar(carDetails.carId)">Book</button>
    </div>

  </div>

</div>
```


---

## 📄 app\shared\components\car-details-card\car-details-card.component.scss

```
:host {
  width: 100%;
  display: block;
}

.car-card {
  width: 100%;
  display: flex;
  align-items: stretch;
  overflow: hidden;
  border-radius: 1.8rem;

  background:
  linear-gradient(135deg, rgba(15, 17, 25, .96), rgba(11, 13, 20, .98));
  border: .0625rem solid rgba(255, 255, 255, .06);
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, .35);

  transition:
    transform .25s ease,
    border-color .25s ease,
    box-shadow .25s ease;

  &:hover {
    border-color: rgba(109, 90, 232, .28);
    box-shadow:0 2rem 4rem rgba(0, 0, 0, .45);
  }

  &__image {
    position: relative;
    width: 22rem;
    min-width: 22rem;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform .4s ease;
    }

    &:hover img {
      transform: scale(1.05);
    }
  }

  &__overlay {
    position: absolute;
    inset: 0;
    background:linear-gradient(to top,rgba(0, 0, 0, .55),rgba(0, 0, 0, .08));
  }

  &__top {
    position: absolute;
    top: 1rem;
    left: 1rem;
    right: 1rem;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__content {
    flex: 1;
    padding: 1.8rem;
    display: flex;
    flex-direction: column;
  }

  &__heading {
    margin-bottom: 1.5rem;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;

    h2 {
      font-size: 1.7rem;
      font-weight: 800;
      color: #f4f6ff;
      margin-bottom: .35rem;
    }

    p {
      font-size: .95rem;
      color: #8f95ad;
    }
  }

  &__footer {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: auto;
  }
}

.tag {
  padding: .55rem 1rem;
  border-radius: 100rem;
  background: rgba(109, 90, 232, .18);
  border: .0625rem solid rgba(109, 90, 232, .35);
  color: #d5ccff;
  font-size: .78rem;
  font-weight: 700;
  backdrop-filter: blur(.8rem);
}

.price {
  padding: .6rem 1rem;
  border-radius: 100rem;
  background: rgba(0, 0, 0, .42);
  color: #fff;
  font-size: .88rem;
  font-weight: 700;
  backdrop-filter: blur(.8rem);
}

.admin-actions {
  display: flex;
  align-items: center;
  gap: .5rem;
  flex-shrink: 0;
}

.action-btn {
  width: 2.6rem;
  height: 2.6rem;
  border-radius: .9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition:transform .2s ease,background .2s ease,border-color .2s ease;

  &:disabled {
    opacity: .45;
    cursor: not-allowed;
    pointer-events: none;
  }

  svg {
    width: 1rem;
    height: 1rem;
  }

  &--edit {
    background: rgba(59, 130, 246, .12);
    border: .0625rem solid rgba(59, 130, 246, .22);
    color: #60a5fa;

    &:hover {
      transform: translateY(-.08rem);
      background: rgba(59, 130, 246, .22);
      border-color: rgba(59, 130, 246, .38);
    }
  }

  &--delete {
    background: rgba(255, 59, 92, .14);
    border: .0625rem solid rgba(255, 59, 92, .22);
    color: #ff6b81;

    &:hover {
      transform: translateY(-.08rem);
      background: rgba(255, 59, 92, .22);
      border-color: rgba(255, 59, 92, .38);
    }
  }
}

.specs {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.spec {
  flex: 1;
  padding: 1rem;
  border-radius: 1rem;
  background: rgba(255, 255, 255, .03);
  border:.625rem solid rgba(255, 255, 255, .05);
  display: flex;
  flex-direction: column;
  gap: .35rem;

  &__label {
    font-size: .72rem;
    color: #7f879f;
    text-transform: uppercase;
    letter-spacing: .04rem;
  }

  &__value {
    font-size: .95rem;
    font-weight: 700;
    color: #f4f6ff;
  }
}

.description {
  font-size: .95rem;
  line-height: 1.8;
  color: #a4a9be;
  margin-bottom: 1.5rem;
}

.btn {
  flex: 1;
  height: 3.1rem;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  font-size: .9rem;
  font-weight: 700;
  transition:transform .2s ease,opacity .2s ease;

  &:hover {
    transform: translateY(-.1rem);
  }

  &--primary {
    color: #fff;
    background:linear-gradient(135deg,#6d5ae8,#3b82f6);
    box-shadow:0 .7rem 1.8rem rgba(109, 90, 232, .3);
  }

  &--secondary {
    background: rgba(255, 255, 255, .04);
    border: .0625rem solid rgba(255, 255, 255, .08);
    color: #f4f6ff;
  }
}

@media (max-width: 992px) {
  .car-card {
    flex-direction: column;
    &__image {
      width: 100%;
      min-width: 100%;
      height: 16rem;
    }
  }
}

@media (max-width: 768px) {

  .car-card {
    &__content {
      padding: 1.2rem;
    }

    &__heading {
      h2 {
        font-size: 1.4rem;
      }
    }

    &__footer {
      flex-direction: column;
    }
  }

  .specs {
    flex-direction: column;
  }

  .spec {
    width: 100%;
  }

  .btn {
    width: 100%;
  }
}
```


---

## 📄 app\shared\components\car-details-card\car-details-card.component.spec.ts

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDetailsCardComponent } from './car-details-card.component';

describe('CarDetailsCardComponent', () => {
  let component: CarDetailsCardComponent;
  let fixture: ComponentFixture<CarDetailsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarDetailsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

```


---

## 📄 app\shared\components\car-details-card\car-details-card.component.ts

```typescript
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminService } from '../../../services/admin/admin.service';
import { ToastService } from '../../../services/toast-service/toast.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-car-details-card',
  imports: [CommonModule, RouterModule],
  templateUrl: './car-details-card.component.html',
  styleUrl: './car-details-card.component.scss'
})
export class CarDetailsCardComponent implements OnInit {

  isAdmin: boolean = false;
  isLoading: boolean = false;
  @Input() carDetails: any;
  @Output() carDeleted = new EventEmitter<string>();


  constructor(private adminService: AdminService, private toastService: ToastService, private router: Router,private activeRouter:ActivatedRoute) { }

  ngOnInit(): void {
    const userData = JSON.parse(localStorage.getItem('userdata') || '{}');
    this.isAdmin = userData?.role?.toUpperCase() === 'ADMIN';
    console.log(userData);
    console.log(this.isAdmin);
  }

  deleteCarDetails(id: string) {
    this.isLoading = true;
    const carId = parseInt(id);
    this.adminService.deleteCarDetails(carId).subscribe({
      next: (response: any) => {
        this.isLoading = false;
        this.toastService.show(response?.message || 'Car details deleted successfully.');
        this.carDeleted.emit(id);
      },
      error: (error: any) => {
        this.isLoading = false;
        console.error('Error deleting car details:', error);
        this.toastService.show(error?.error?.message || 'Failed to delete car details.', 'error');
      }
    });
  }

  updateCarDetails(id: string) {
    this.router.navigate(['/admin/update-car', id]);
  }

  navigateToBookCar(carId: string) {
    this.router.navigate(['/user/dashboard', carId]);
  }
}

```


---

## 📄 app\shared\components\header\header.component.html

```html
<header class="header">
  <div class="header__inner">

    <div class="logo">
      <div class="logo__icon">
        <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
          <path d="M11 2L19.5 7V15L11 20L2.5 15V7L11 2Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
          <circle cx="11" cy="11" r="3" fill="currentColor"/>
        </svg>
      </div>
      <span class="logo__name">DriveEasy</span>
    </div>

    <div class="header__actions">
      <a class="btn-login" (click)="onLoginClick()">Login</a>
      <a class="btn-register" (click)="onRegisterClick()">Register</a>
    </div>

    <button class="hamburger" type="button" aria-label="Toggle menu">
      <span></span>
      <span></span>
      <span></span>
    </button>

  </div>
</header>
```


---

## 📄 app\shared\components\header\header.component.scss

```
$font-display : 'Syne', sans-serif;
$font-body    : 'DM Sans', sans-serif;

$c-bg           : #080a12;
$c-surface      : #0f1119;
$c-accent       : #6d5ae8;
$c-accent-light : #b3a4f8;
$c-text         : #ecedf5;
$c-muted        : #6b6f85;
$c-border       : rgba(255, 255, 255, .07);
$c-border-hover : rgba(255, 255, 255, .15);

$r-md   : 10px;
$r-pill : 100px;
$ease   : cubic-bezier(.4, 0, .2, 1);

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

a      { color: inherit; text-decoration: none; }
button { cursor: pointer; font-family: $font-body; border: none; background: none; }

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba($c-surface, .82);
  backdrop-filter: blur(20px) saturate(1.5);
  -webkit-backdrop-filter: blur(20px) saturate(1.5);
  border-bottom: 1px solid $c-border;
  font-family: $font-body;

  &__inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    height: 68px;
    display: flex;
    align-items: center;
    gap: 2.5rem;
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: .75rem;
    margin-left: auto;
  }
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;

  &__icon {
    width: 34px;
    height: 34px;
    border-radius: $r-md;
    background: linear-gradient(135deg, $c-accent, #3b82f6);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    box-shadow: 0 4px 14px rgba($c-accent, .4);
  }

  &__name {
    font-family: $font-display;
    font-size: 1.1rem;
    font-weight: 700;
    letter-spacing: -.01em;
    color: $c-text;
  }
}

.nav {
  display: flex;
  align-items: center;
  gap: .25rem;

  &__link {
    font-size: .88rem;
    font-weight: 400;
    color: $c-muted;
    padding: .45rem .85rem;
    border-radius: $r-pill;
    transition: color .2s $ease, background .2s $ease;

    &:hover {
      color: $c-text;
      background: rgba(255, 255, 255, .06);
    }

    &--active {
      color: $c-text;
      font-weight: 500;
      background: rgba(255, 255, 255, .06);
    }
  }
}

.btn-login {
  font-size: .875rem;
  font-weight: 500;
  color: $c-muted;
  padding: .5rem 1.1rem;
  border-radius: $r-pill;
  border: 1px solid $c-border;
  transition: color .2s $ease, border-color .2s $ease, background .2s $ease;

  &:hover {
    color: $c-text;
    border-color: $c-border-hover;
    background: rgba(255, 255, 255, .05);
  }
}

.btn-register {
  font-family: $font-display;
  font-size: .875rem;
  font-weight: 600;
  color: #fff;
  padding: .5rem 1.25rem;
  border-radius: $r-pill;
  background: linear-gradient(135deg, $c-accent, #3b82f6);
  box-shadow: 0 3px 14px rgba($c-accent, .45);
  transition: transform .15s $ease, box-shadow .2s $ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 22px rgba($c-accent, .6);
  }

  &:active {
    transform: translateY(0) scale(.97);
  }
}

.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 36px;
  height: 36px;
  margin-left: auto;
  padding: 6px;
  border-radius: $r-md;
  transition: background .2s $ease;

  span {
    display: block;
    height: 1.5px;
    border-radius: 2px;
    background: $c-muted;
    transition: background .2s $ease;
  }

  &:hover {
    background: rgba(255, 255, 255, .06);

    span {
      background: $c-text;
    }
  }
}

@media (max-width: 768px) {
  .nav {
    display: none;
  }

  .header__actions {
    display: none;
  }

  .hamburger {
    display: flex;
  }
}
```


---

## 📄 app\shared\components\header\header.component.spec.ts

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

```


---

## 📄 app\shared\components\header\header.component.ts

```typescript
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private router: Router) {}

  onLoginClick() {
    this.router.navigate(['/login']);
  }

  onRegisterClick() {
    this.router.navigate(['/register']);
  }

}

```


---

## 📄 app\shared\components\layout\layout.component.html

```html
<div class="layout">
  <main class="layout__content">
    <router-outlet></router-outlet>
  </main>
</div>
```


---

## 📄 app\shared\components\layout\layout.component.scss

```
$header-height: 68px;

.layout {
  width: 100%;
  height: 100vh;
  overflow: hidden;

  &__content {
    height: 100vh;
    // margin-top: 68px;
    overflow: hidden;
  }
}
```


---

## 📄 app\shared\components\layout\layout.component.spec.ts

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutComponent } from './layout.component';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

```


---

## 📄 app\shared\components\layout\layout.component.ts

```typescript
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}

```


---

## 📄 app\shared\components\login\login.component.html

```html
<app-header></app-header> 
<div class="auth-page">
  <div class="bg">
    <div class="bg__blob bg__blob--violet"></div>
    <div class="bg__blob bg__blob--blue"></div>
    <div class="bg__blob bg__blob--rose"></div>
    <div class="bg__grid"></div>
  </div>

  <div class="card">
    <div class="card__body">
      <div class="card__intro">
        <h1 class="card__title">Welcome back</h1>
        <p class="card__sub">Sign in to continue your journey.</p>
      </div>

      <form class="form" [formGroup]="loginForm" autocomplete="off">

        <div class="field" [class.field--error]="email.invalid && email.touched">
          <label class="field__label" for="email">Email address</label>
          <div class="field__wrap">
            <svg class="field__icon" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="1.6">
              <rect x="2" y="4" width="20" height="16" rx="3" />
              <path d="M2 8l10 6 10-6" />
            </svg>
            <input
              class="field__input"
              id="email"
              type="email"
              placeholder="jane@example.com"
              formControlName="email"
              autocomplete="off"
              (input)="email.updateValueAndValidity()" />
          </div>
          <span class="field__error" *ngIf="email.touched && email.hasError('required')">
            Email is required.
          </span>
          <span class="field__error" *ngIf="email.touched && email.hasError('email')">
            Enter a valid email address.
          </span>
        </div>

        <div class="field" [class.field--error]="password.invalid && password.touched">
          <label class="field__label" for="password">Password</label>
          <div class="field__wrap">
            <svg class="field__icon" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="1.6">
              <rect x="3" y="11" width="18" height="11" rx="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <input
              class="field__input"
              id="password"
              type="password"
              placeholder="Min. 6 characters"
              formControlName="password"
              autocomplete="new-password"
              (input)="password.updateValueAndValidity()" />
          </div>
          <span class="field__error" *ngIf="password.touched && password.hasError('required')">
            Password is required.
          </span>
          <span class="field__error" *ngIf="password.touched && password.hasError('minlength')">
            Password must be at least 6 characters.
          </span>
        </div>

        <div class="form__forgot">
          <a href="#" class="link">Forgot password?</a>
        </div>

        <p *ngIf="isError" class="error_msg">{{errorMessage()}}</p>

        <button class="btn-login" type="submit" [disabled]="loginForm.invalid" (click)="onLogin()">
          <span>Sign in</span>
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>

      </form>
    </div>

    <div class="card__footer">
      <p>Don't have an account? <a class="link link--accent" (click)="onSignUp()">Sign up →</a></p>
    </div>
  </div>
</div>

<app-spinner-loader [loading]="isLoading()" [fullscreen]="true" size="md"></app-spinner-loader>

```


---

## 📄 app\shared\components\login\login.component.scss

```
$font-display : 'Syne', sans-serif;
$font-body    : 'DM Sans', sans-serif;

$c-bg           : #080a12;
$c-surface      : #0f1119;
$c-surface-2    : #171b27;
$c-surface-3    : #1e2333;

$c-accent       : #6d5ae8;
$c-accent-light : #b3a4f8;

$c-text         : #ecedf5;
$c-muted        : #6b6f85;

$c-border       : rgba(255, 255, 255, .07);
$c-border-hover : rgba(255, 255, 255, .15);
$c-border-focus : rgba(109, 90, 232, .55);

$c-error        : #f87171;
$c-error-bg     : rgba(248, 113, 113, .08);
$c-error-border : rgba(248, 113, 113, .45);

$r-md   : .625rem;
$r-lg   : 1rem;
$r-xl   : 1.25rem;
$r-pill : 6.25rem;

$ease : cubic-bezier(.4, 0, .2, 1);

*,
*::before,
*::after {
  box-sizing: border-box;
}

.auth-page {
  position: relative;

  width: 100%;
  min-height:100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1rem;

  overflow-x: hidden;

  background: #080a12;
}

.bg {
  position: absolute;
  inset: 0;

  overflow: hidden;

  pointer-events: none;

  &__blob {
    position: absolute;

    border-radius: 50%;

    filter: blur(5rem);

    &--violet {
      width: 28rem;
      height: 28rem;

      top: -10rem;
      right: -8rem;

      background: rgba(109, 90, 232, .22);
    }

    &--blue {
      width: 22rem;
      height: 22rem;

      bottom: -8rem;
      left: -6rem;

      background: rgba(59, 130, 246, .16);
    }

    &--rose {
      width: 16rem;
      height: 16rem;

      top: 40%;
      right: 8%;

      background: rgba(236, 72, 153, .12);
    }
  }

  &__grid {
    position: absolute;
    inset: 0;

    background-image:
      linear-gradient(rgba(255,255,255,.025) .0625rem, transparent .0625rem),
      linear-gradient(90deg, rgba(255,255,255,.025) .0625rem, transparent .0625rem);

    background-size: 3rem 3rem;
  }
}

.card {
  position: relative;
  z-index: 2;

  width: 100%;
  max-width: 30rem;

  background: rgba($c-surface, .88);

  backdrop-filter: blur(1.5rem);
  -webkit-backdrop-filter: blur(1.5rem);

  border: .0625rem solid $c-border;
  border-radius: $r-xl;

  overflow: hidden;

  box-shadow:
    0 1.5rem 4rem rgba(0,0,0,.55),
    0 0 0 .0625rem rgba(255,255,255,.03) inset;

  &__body {
    padding: 1.6rem;
  }

  &__intro {
    margin-bottom: 1.6rem;
  }

  &__title {
    font-family: $font-display;
    font-size: 2.5rem;
    font-weight: 800;

    line-height: 1.05;
    letter-spacing: -.03em;

    margin-bottom: .35rem;

    background: linear-gradient(
      135deg,
      #ffffff 0%,
      $c-accent-light 100%
    );

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &__sub {
    font-size: .92rem;
    color: $c-muted;
  }

  &__footer {
    padding: 1rem 1.6rem 1.3rem;

    border-top: .0625rem solid $c-border;

    text-align: center;

    font-size: .85rem;
    color: $c-muted;
  }
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1.1rem;

  &__forgot {
    display: flex;
    justify-content: flex-end;

    margin-top: -.4rem;

    font-size: .82rem;
  }
}

.error_msg {
  color: $c-error;
  text-align: center;
  font-weight: 500;
}

.field {
  display: flex;
  flex-direction: column;
  gap: .5rem;

  &__label {
    font-size: .8rem;
    font-weight: 500;

    color: $c-muted;

    text-transform: uppercase;
    letter-spacing: .04em;
  }

  &__wrap {
    position: relative;
  }

  &__icon {
    position: absolute;

    top: 50%;
    left: 1rem;

    transform: translateY(-50%);

    color: $c-muted;

    transition: color .2s $ease;
  }

  &__input {
    width: 100%;
    height: 3rem;

    padding: 0 1rem 0 3rem;

    border: .0625rem solid $c-border;
    border-radius: $r-md;

    background: rgba($c-surface-2, .75);

    color: $c-text;

    font-size: .92rem;

    outline: none;

    transition:
      border-color .2s $ease,
      box-shadow .2s $ease,
      background .2s $ease;

    &::placeholder {
      color: rgba($c-muted, .45);
    }

    &:hover {
      border-color: $c-border-hover;
    }

    &:focus {
      border-color: $c-border-focus;

      background: rgba($c-surface-3, .95);

      box-shadow: 0 0 0 .1875rem rgba(109, 90, 232, .15);
    }
  }

  &--error {
    .field__input {
      border-color: $c-error-border;
      background: $c-error-bg;

      &:focus {
        border-color: $c-error-border;
        box-shadow: 0 0 0 .1875rem rgba(248, 113, 113, .15);
      }
    }

    .field__icon {
      color: $c-error;
    }
  }

  &__error {
    display: block;

    font-size: .75rem;
    font-weight: 500;

    color: $c-error;

    padding-left: .25rem;

    animation: slideDown .2s $ease;
  }
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-.25rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.btn-login {
  width: 100%;
  height: 3.1rem;

  margin-top: .2rem;

  border-radius: $r-md;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: .55rem;

  background: linear-gradient(
    135deg,
    $c-accent 0%,
    #5548d4 50%,
    #3b82f6 100%
  );

  color: #fff;

  font-family: $font-display;
  font-size: .98rem;
  font-weight: 700;

  box-shadow: 0 .4rem 1.6rem rgba(109, 90, 232, .45);

  transition:
    transform .15s $ease,
    box-shadow .2s $ease,
    opacity .2s $ease;

  &:hover:not(:disabled) {
    transform: translateY(-.0625rem);

    box-shadow: 0 .6rem 2rem rgba(109, 90, 232, .6);
  }

  &:active:not(:disabled) {
    transform: scale(.985);
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
    box-shadow: none;
  }
}

.link {
  color: $c-accent-light;

  transition: color .2s ease;

  &:hover {
    color: #fff;
  }

  &--accent {
    font-weight: 600;
  }
}

@media (max-width: 768px) {
  .auth-page {
    padding: 1rem;
  }

  .card {
    max-width: 100%;

    &__body {
      padding: 1.2rem;
    }

    &__footer {
      padding: 1rem 1.2rem 1.2rem;
    }

    &__title {
      font-size: 2rem;
    }
  }
}
```


---

## 📄 app\shared\components\login\login.component.spec.ts

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

```


---

## 📄 app\shared\components\login\login.component.ts

```typescript
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
```


---

## 📄 app\shared\components\mainheader\mainheader.component.html

```html
<div class="main-header">

  <div class="breadcrumb">

    <div class="breadcrumb__icon">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="7" height="7" rx="2" fill="currentColor" />
        <rect x="14" y="3" width="7" height="7" rx="2" fill="currentColor" />
        <rect x="14" y="14" width="7" height="7" rx="2" fill="currentColor" />
        <rect x="3" y="14" width="7" height="7" rx="2" fill="currentColor" />
      </svg>
    </div>

    <div class="breadcrumb__text">

      <span>
        {{ isAdminlogin ? 'Admin' : 'Customer' }}
      </span>

      <small>
        {{ isAdminlogin ? 'Dashboard Overview' : 'Customer Dashboard' }}
      </small>

    </div>

  </div>

  <div class="main-header__right">

    <button class="action-btn">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="1.8" />
        <path d="M20 20L17 17" stroke="currentColor" stroke-width="1.8" />
      </svg>
    </button>

    <button class="action-btn notification">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M6 8C6 4.7 8.7 2 12 2C15.3 2 18 4.7 18 8V12L20 16H4L6 12V8Z" stroke="currentColor"
          stroke-width="1.8" />
      </svg>
    </button>

    <div class="profile">

      <div class="profile__avatar">
        {{ userInfo()?.userName?.charAt(0) }}
      </div>

      <div class="profile__info">
        <h4>{{ userInfo()?.userName }}</h4>
        <span>{{ userInfo()?.role | titlecase }}</span>
      </div>

    </div>

  </div>

</div>
```


---

## 📄 app\shared\components\mainheader\mainheader.component.scss

```
$surface: #0f1119;
$surface-light: #171b27;

$accent: #6d5ae8;
$accent-light: #b3a4f8;

$text: #ecedf5;
$muted: #6b6f85;

$border: rgba(255,255,255,.07);
$border-hover: rgba(255,255,255,.12);

$ease: cubic-bezier(.4, 0, .2, 1);

:host {
  width: 100%;
  display: block;
}

.main-header {
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 2rem;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 1rem;

  min-width: 0;

  &__icon {
    width: 3rem;
    height: 3rem;

    min-width: 3rem;

    border-radius: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background: rgba(109, 90, 232, .14);

    color: $accent-light;

    border: .0625rem solid rgba(109, 90, 232, .22);

    box-shadow:
      inset 0 0 1rem rgba(109, 90, 232, .08),
      0 .4rem 1.5rem rgba(109, 90, 232, .12);

    svg {
      width: 1.1rem;
      height: 1.1rem;
    }
  }

  &__text {
    display: flex;
    flex-direction: column;

    span {
      font-size: 1.45rem;
      font-weight: 700;

      line-height: 1.1;

      color: $text;
    }

    small {
      font-size: .95rem;

      color: $muted;
    }
  }
}

.main-header__right {
  margin-left: auto;

  display: flex;
  align-items: center;
  gap: 1rem;

  flex-shrink: 0;
}

.action-btn {
  width: 3.2rem;
  height: 3.2rem;

  border-radius: 1.2rem;

  border: .0625rem solid $border;

  background: rgba($surface-light, .75);

  backdrop-filter: blur(1rem);
  -webkit-backdrop-filter: blur(1rem);

  display: flex;
  align-items: center;
  justify-content: center;

  color: $muted;

  cursor: pointer;

  transition:
    background .2s $ease,
    border-color .2s $ease,
    box-shadow .2s $ease,
    color .2s $ease;

  &:hover {
    background: rgba(255,255,255,.05);

    border-color: $border-hover;

    color: $text;

    box-shadow:
      inset 0 0 1rem rgba(255,255,255,.03),
      0 0 1.2rem rgba(0,0,0,.2);
  }

  svg {
    width: 1.1rem;
    height: 1.1rem;
  }
}

.notification {
  position: relative;

  &::after {
    content: '';

    position: absolute;

    top: .8rem;
    right: .9rem;

    width: .45rem;
    height: .45rem;

    border-radius: 50%;

    background: #fb7185;

    box-shadow: 0 0 .8rem #fb7185;
  }
}

.profile {
  display: flex;
  align-items: center;
  gap: .9rem;

  padding-left: .4rem;

  &__avatar {
    width: 3.2rem;
    height: 3.2rem;

    min-width: 3.2rem;

    border-radius: 50%;

    background: linear-gradient(
      135deg,
      $accent,
      #3b82f6
    );

    display: flex;
    align-items: center;
    justify-content: center;

    color: #fff;

    font-size: 1rem;
    font-weight: 700;

    box-shadow:
      0 .5rem 1.6rem rgba(109, 90, 232, .4),
      0 0 2rem rgba(109, 90, 232, .2);
  }

  &__info {
    display: flex;
    flex-direction: column;

    h4 {
      font-size: 1rem;
      font-weight: 700;

      line-height: 1.1;

      color: $text;
    }

    span {
      font-size: .82rem;

      color: $muted;
    }
  }
}

@media (max-width: 768px) {

  .breadcrumb__text {
    display: none;
  }

  .profile__info {
    display: none;
  }

  .main-header {
    gap: 1rem;
  }

  .main-header__right {
    gap: .6rem;
  }

  .action-btn,
  .profile__avatar {
    width: 2.8rem;
    height: 2.8rem;
  }
}
```


---

## 📄 app\shared\components\mainheader\mainheader.component.spec.ts

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainheaderComponent } from './mainheader.component';

describe('MainheaderComponent', () => {
  let component: MainheaderComponent;
  let fixture: ComponentFixture<MainheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainheaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

```


---

## 📄 app\shared\components\mainheader\mainheader.component.ts

```typescript
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

```


---

## 📄 app\shared\components\mainlayout\mainlayout.component.html

```html
<!-- mainlayout.component.html -->
<div class="layout">

  <aside class="layout__sidebar">
    <app-sidenavbar [isAdminlogin]="isAdminlogin" [isUserlogin]="isUserlogin"></app-sidenavbar>
  </aside>

  <div class="layout__right">

    <header class="layout__header">
      <app-mainheader [isAdminlogin]="isAdminlogin" [isUserlogin]="isUserlogin"></app-mainheader>
    </header>

    <main class="layout__content">
      <router-outlet></router-outlet>
    </main>

  </div>

</div>
```


---

## 📄 app\shared\components\mainlayout\mainlayout.component.scss

```
:host {
  display: block;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.layout {
  width: 100%;
  height: 100vh;

  display: flex;

  overflow: hidden;

  background: #080a12;

  &__sidebar {
    width: 5rem;
    min-width: 5rem;
    height: 100vh;

    overflow: hidden;

    flex-shrink: 0;

    background: transparent;
  }

  &__right {
    flex: 1;

    height: 100vh;

    display: flex;
    flex-direction: column;

    overflow: hidden;

    background:
      radial-gradient(circle at top right,
        rgba(109, 90, 232, .12),
        transparent 25%),
      radial-gradient(circle at bottom left,
        rgba(59, 130, 246, .08),
        transparent 25%),
      #080a12;
  }

  &__header {
    width: 100%;
    height: 5rem;
    min-height: 5rem;

    padding: 0 1.5rem;

    border-bottom: .0625rem solid rgba(255,255,255,.06);

    background: rgba(15, 17, 25, .72);

    backdrop-filter: blur(1.2rem);
    -webkit-backdrop-filter: blur(1.2rem);

    display: flex;
    align-items: center;

    position: relative;
    z-index: 20;
  }

  &__content {
    flex: 1;

    overflow-y: auto;

    padding: 1.5rem;

    background: transparent;

    color: #ecedf5;

    scrollbar-width: thin;
    scrollbar-color: rgba(255,255,255,.15) transparent;

    &::-webkit-scrollbar {
      width: .4rem;
    }

    &::-webkit-scrollbar-thumb {
      background: rgba(255,255,255,.12);
      border-radius: 10rem;
    }
  }
}
```


---

## 📄 app\shared\components\mainlayout\mainlayout.component.spec.ts

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainlayoutComponent } from './mainlayout.component';

describe('MainlayoutComponent', () => {
  let component: MainlayoutComponent;
  let fixture: ComponentFixture<MainlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainlayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

```


---

## 📄 app\shared\components\mainlayout\mainlayout.component.ts

```typescript
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

```


---

## 📄 app\shared\components\show-my-booking\show-my-booking.component.html

```html
<div class="booking-page">

    <!-- HEADER -->
    <div class="booking-page__header">

        <h1>
            My Bookings
        </h1>

        <p>
            View all your booked cars and booking details.
        </p>

    </div>

    <!-- EMPTY STATE -->
    <div
        class="empty-state"
        *ngIf="!bookings().length && !isLoading()">

        <h2>
            No Bookings Found
        </h2>

        <p>
            You have not booked any cars yet.
        </p>

    </div>

    <!-- BOOKING LIST -->
    <div
        class="booking-list"
        *ngIf="bookings().length">

        <div
            class="booking-card"
            *ngFor="let booking of bookings()">

            <!-- IMAGE -->
            <div class="booking-card__image">

                <img
                    [src]="booking.imgUrl"
                    [alt]="booking.carName">

            </div>

            <!-- CONTENT -->
            <div class="booking-card__content">

                <!-- TOP -->
                <div class="booking-card__top">

                    <div>

                        <h2>
                            {{ booking.carName }}
                        </h2>

                        <p>
                            {{ booking.brand }}
                        </p>

                    </div>

                    <div
                        class="status"
                        [ngClass]="{
                            'pending': booking.bookCarStatus === 'PENDING',
                            'approved': booking.bookCarStatus === 'APPROVED',
                            'rejected': booking.bookCarStatus === 'REJECTED'
                        }">

                        {{ booking.bookCarStatus }}

                    </div>

                </div>

                <!-- DETAILS -->
                <div class="booking-details">

                    <div class="detail-item">

                        <span>
                            Booking ID
                        </span>

                        <h4>
                            #{{ booking.id }}
                        </h4>

                    </div>

                    <div class="detail-item">

                        <span>
                            Total Days
                        </span>

                        <h4>
                            {{ booking.days }} Days
                        </h4>

                    </div>

                    <div class="detail-item">

                        <span>
                            From Date
                        </span>

                        <h4>
                            {{ booking.fromDate | date:'dd MMM yyyy' }}
                        </h4>

                    </div>

                    <div class="detail-item">

                        <span>
                            To Date
                        </span>

                        <h4>
                            {{ booking.toDate | date:'dd MMM yyyy' }}
                        </h4>

                    </div>

                    <div class="detail-item">

                        <span>
                            Total Price
                        </span>

                        <h4>
                            ₹ {{ booking.price }}
                        </h4>

                    </div>

                    <div class="detail-item">

                        <span>
                            Email
                        </span>

                        <h4>
                            {{ booking.email }}
                        </h4>

                    </div>

                </div>

            </div>

        </div>

    </div>

</div>

<app-spinner-loader *ngIf="isLoading()"></app-spinner-loader>
```


---

## 📄 app\shared\components\show-my-booking\show-my-booking.component.scss

```
:host {

    width: 100%;
    display: block;
}

.booking-page {

    width: 100%;
    min-height: 100vh;

    padding: 2rem;

    background:
        radial-gradient(
            circle at top right,
            rgba(109, 90, 232, .12),
            transparent 25%
        ),
        #080a12;

    &__header {

        margin-bottom: 2rem;

        h1 {

            color: #ffffff;

            font-size: 2.5rem;
            font-weight: 800;

            margin-bottom: .5rem;
        }

        p {

            color: #8f95ad;

            font-size: 1rem;
        }
    }
}

.booking-list {

    width: 100%;

    display: flex;
    flex-direction: column;

    gap: 1.5rem;
}

.booking-card {

    width: 100%;

    display: grid;

    grid-template-columns: 22rem 1fr;

    overflow: hidden;

    border-radius: 1.5rem;

    background:
        linear-gradient(
            135deg,
            rgba(15,17,25,.96),
            rgba(11,13,20,.98)
        );

    border: .0625rem solid rgba(255,255,255,.06);

    box-shadow:
        0 1rem 3rem rgba(0,0,0,.25);

    &__image {

        width: 100%;
        height: 100%;

        img {

            width: 100%;
            height: 100%;

            object-fit: cover;
        }
    }

    &__content {

        padding: 1.5rem;
    }

    &__top {

        display: flex;
        justify-content: space-between;
        align-items: center;

        gap: 1rem;

        padding-bottom: 1.2rem;

        margin-bottom: 1.5rem;

        border-bottom:
            .0625rem solid rgba(255,255,255,.06);

        h2 {

            color: #ffffff;

            font-size: 1.5rem;
            font-weight: 700;

            margin-bottom: .4rem;
        }

        p {

            color: #8f95ad;

            font-size: .92rem;
        }
    }
}

.status {

    padding: .7rem 1rem;

    border-radius: 100rem;

    font-size: .8rem;
    font-weight: 700;

    text-transform: uppercase;
}

.pending {

    background: rgba(250,204,21,.15);

    color: #facc15;
}

.approved {

    background: rgba(74,222,128,.15);

    color: #4ade80;
}

.rejected {

    background: rgba(248,113,113,.15);

    color: #f87171;
}

.booking-details {

    width: 100%;

    display: grid;

    grid-template-columns: repeat(3, 1fr);

    gap: 1rem;
}

.detail-item {

    padding: 1rem;

    border-radius: 1rem;

    background: rgba(255,255,255,.03);

    border: .0625rem solid rgba(255,255,255,.05);

    span {

        color: #8f95ad;

        font-size: .78rem;
    }

    h4 {

        color: #ffffff;

        font-size: 1rem;
        font-weight: 700;

        margin-top: .5rem;
    }
}

.empty-state {

    width: 100%;

    min-height: 60vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;

    h2 {

        color: #ffffff;

        font-size: 2rem;

        margin-bottom: 1rem;
    }

    p {

        color: #8f95ad;
    }
}

@media (max-width: 992px) {

    .booking-card {

        grid-template-columns: 1fr;

        &__image {

            height: 20rem;
        }
    }

    .booking-details {

        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {

    .booking-page {

        padding: 1rem;
    }

    .booking-card {

        &__content {

            padding: 1rem;
        }

        &__top {

            flex-direction: column;
            align-items: flex-start;
        }
    }

    .booking-details {

        grid-template-columns: 1fr;
    }
}
```


---

## 📄 app\shared\components\show-my-booking\show-my-booking.component.spec.ts

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMyBookingComponent } from './show-my-booking.component';

describe('ShowMyBookingComponent', () => {
  let component: ShowMyBookingComponent;
  let fixture: ComponentFixture<ShowMyBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowMyBookingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowMyBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

```


---

## 📄 app\shared\components\show-my-booking\show-my-booking.component.ts

```typescript
import { Component, OnInit, signal } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { SpinnerLoaderComponent } from '../../loaders/common-loader/spinner-loader/spinner-loader.component';
import { CustomerService } from '../../../services/customer/customer.service';

@Component({
  selector: 'app-show-my-booking',
  standalone: true,
  imports: [CommonModule,DatePipe,SpinnerLoaderComponent],
  templateUrl: './show-my-booking.component.html',
  styleUrl: './show-my-booking.component.scss'
})
export class ShowMyBookingComponent implements OnInit {

  isLoading = signal<boolean>(false);
  bookings = signal<any[]>([]);

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.getMyBookingHistory();
  }

  getMyBookingHistory() {
    this.isLoading.set(true);
    const userId = JSON.parse(localStorage.getItem('userdata') || '{}')?.userId;
     this.customerService.getMyBookingHistory(userId).subscribe({
      next: (res: any) => {
        this.bookings.set(res?.data);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Error fetching booking history:', err);
        this.isLoading.set(false);
      }
    });
  }

}
```


---

## 📄 app\shared\components\sidenavbar\sidenavbar.component.html

```html
<div class="sidebar">

  <div class="sidebar__top">

    <!-- KEEP SAME -->
    <div class="logo">
      <div class="logo__icon">
        <svg width="18" height="18" viewBox="0 0 22 22" fill="none">
          <path d="M11 2L19.5 7V15L11 20L2.5 15V7L11 2Z" stroke="currentColor" stroke-width="1.6"
            stroke-linejoin="round" />
          <circle cx="11" cy="11" r="3" fill="currentColor" />
        </svg>
      </div>
    </div>

    <div class="nav">

      <!-- ================= ADMIN ================= -->
      <ng-container *ngIf="isAdminlogin">

        <a class="nav__item" routerLink="/admin/dashboard" routerLinkActive="nav__item--active">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="3" width="7" height="7" rx="2" stroke="currentColor" stroke-width="1.8" />
            <rect x="14" y="3" width="7" height="7" rx="2" stroke="currentColor" stroke-width="1.8" />
            <rect x="14" y="14" width="7" height="7" rx="2" stroke="currentColor" stroke-width="1.8" />
            <rect x="3" y="14" width="7" height="7" rx="2" stroke="currentColor" stroke-width="1.8" />
          </svg>
        </a>

        <!-- Post Cars -->
        <a class="nav__item" routerLink="/admin/cars" routerLinkActive="nav__item--active">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M5 17H19L17 10H7L5 17Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" />
            <circle cx="7.5" cy="17.5" r="1.5" fill="currentColor" />
            <circle cx="16.5" cy="17.5" r="1.5" fill="currentColor" />
            <path d="M8 10L10 6H14L16 10" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" />
          </svg>
        </a>

        <!-- booked car info -->
        <a class="nav__item" routerLink="/admin/booked-cars" routerLinkActive="nav__item--active">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="7" width="18" height="14" rx="2" stroke="currentColor" stroke-width="1.8" />
            <path d="M6 3V7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
            <path d="M18 3V7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
            <path d="M3 11H21" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
            <path d="M8 15H16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
            <path d="M8 18H13" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
          </svg>
        </a>

      </ng-container>

      <!-- ================= CUSTOMER ================= -->
      <ng-container *ngIf="isUserlogin">

        <!-- Dashboard -->
        <a class="nav__item" routerLink="/user/dashboard" routerLinkActive="nav__item--active">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="3" width="7" height="7" rx="2" stroke="currentColor" stroke-width="1.8" />
            <rect x="14" y="3" width="7" height="7" rx="2" stroke="currentColor" stroke-width="1.8" />
            <rect x="14" y="14" width="7" height="7" rx="2" stroke="currentColor" stroke-width="1.8" />
            <rect x="3" y="14" width="7" height="7" rx="2" stroke="currentColor" stroke-width="1.8" />
          </svg>
        </a>

        <!-- Analytics -->
        <a class="nav__item" routerLink="/user/my-bookings" routerLinkActive="nav__item--active">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M5 17L10 12L14 16L19 11" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"
              stroke-linejoin="round" />
            <circle cx="19" cy="11" r="2" fill="currentColor" />
          </svg>
        </a>

        <!-- Bookings -->
        <a class="nav__item" routerLink="/user/bookings" routerLinkActive="nav__item--active">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M3 7H21" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
            <path d="M6 3V7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
            <path d="M18 3V7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
            <rect x="3" y="7" width="18" height="14" rx="2" stroke="currentColor" stroke-width="1.8" />
          </svg>
        </a>

        <!-- Customers -->
        <a class="nav__item" routerLink="/user/customers" routerLinkActive="nav__item--active">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <circle cx="9" cy="8" r="4" stroke="currentColor" stroke-width="1.8" />
            <path d="M17 11L21 15" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
            <path d="M3 20C3 16.7 5.7 14 9 14C12.3 14 15 16.7 15 20" stroke="currentColor" stroke-width="1.8"
              stroke-linecap="round" />
          </svg>
        </a>

      </ng-container>

    </div>

  </div>

  <!-- KEEP SAME -->
  <div class="sidebar__bottom">
    <a class="nav__item" (click)="logout()">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M15 17L20 12L15 7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"
          stroke-linejoin="round" />
        <path d="M20 12H9" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
        <path d="M9 21H5C4.44772 21 4 20.5523 4 20V4C4 3.44772 4 3 5 3H9" stroke="currentColor" stroke-width="1.8"
          stroke-linecap="round" />
      </svg>
    </a>
  </div>

</div>
```


---

## 📄 app\shared\components\sidenavbar\sidenavbar.component.scss

```
$bg: #080a12;
$surface: #0f1119;
$surface-light: #171b27;

$accent: #6d5ae8;
$accent-light: #b3a4f8;

$text: #ecedf5;
$muted: #6b6f85;

$border: rgba(255,255,255,.07);
$border-hover: rgba(255,255,255,.12);

$ease: cubic-bezier(.4, 0, .2, 1);

.sidebar {
  width: 5rem;
  height: 100vh;

  background: rgba($surface, .92);

  backdrop-filter: blur(1.5rem);
  -webkit-backdrop-filter: blur(1.5rem);

  border-right: .0625rem solid $border;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 1rem 0;

  &__top,
  &__bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
}

.logo {
  margin-bottom: 1rem;

  &__icon {
    width: 2.8rem;
    height: 2.8rem;

    border-radius: 1rem;

    background: linear-gradient(
      135deg,
      $accent,
      #3b82f6
    );

    display: flex;
    align-items: center;
    justify-content: center;

    color: #fff;

    box-shadow: 0 .5rem 1.5rem rgba(109, 90, 232, .45);
  }
}

.nav {
  display: flex;
  flex-direction: column;
  gap: .7rem;

  &__item {
    width: 3rem;
    height: 3rem;

    border-radius: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    color: $muted;

    cursor: pointer;

    border: .0625rem solid transparent;

    background: transparent;

    transition:
      background .2s $ease,
      color .2s $ease,
      border-color .2s $ease,
      box-shadow .2s $ease;

    &:hover {
      background: rgba(255,255,255,.04);

      color: $text;

      border-color: rgba(255,255,255,.05);

      box-shadow:
        inset 0 0 1rem rgba(255,255,255,.02),
        0 0 1rem rgba(0,0,0,.15);
    }

    &--active {
      background: rgba(109, 90, 232, .18);

      color: $accent-light;

      border: .0625rem solid rgba(109, 90, 232, .35);

      box-shadow:
        inset 0 0 1rem rgba(109, 90, 232, .08),
        0 .3rem 1rem rgba(109, 90, 232, .16);
    }

    svg {
      width: 1.2rem;
      height: 1.2rem;
    }
  }
}
```


---

## 📄 app\shared\components\sidenavbar\sidenavbar.component.spec.ts

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavbarComponent } from './sidenavbar.component';

describe('SidenavbarComponent', () => {
  let component: SidenavbarComponent;
  let fixture: ComponentFixture<SidenavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidenavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidenavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

```


---

## 📄 app\shared\components\sidenavbar\sidenavbar.component.ts

```typescript
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

```


---

## 📄 app\shared\components\signup\signup.component.html

```html
<app-header></app-header> 
<div class="auth-page">

  <div class="bg">
    <div class="bg__blob bg__blob--violet"></div>
    <div class="bg__blob bg__blob--blue"></div>
    <div class="bg__blob bg__blob--rose"></div>
    <div class="bg__grid"></div>
  </div>

  <div class="card">
    <div class="card__body">
      <div class="card__intro">
        <h1 class="card__title">Create account</h1>
        <p class="card__sub">Book your perfect ride in minutes.</p>
      </div>

      <form class="form" [formGroup]="signupForm" autocomplete="off">

        <div class="field" [class.field--error]="name.invalid && name.touched">
          <label class="field__label" for="name">Full name</label>
          <div class="field__wrap">
            <svg class="field__icon" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="1.6">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
            </svg>
            <input
              class="field__input"
              id="name"
              type="text"
              placeholder="Jane Doe"
              formControlName="name"
              autocomplete="off" />
          </div>
          <span class="field__error" *ngIf="name.touched && name.hasError('required')">
            Full name is required.
          </span>
        </div>

        <div class="field" [class.field--error]="email.invalid && email.touched">
          <label class="field__label" for="email">Email address</label>
          <div class="field__wrap">
            <svg class="field__icon" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="1.6">
              <rect x="2" y="4" width="20" height="16" rx="3" />
              <path d="M2 8l10 6 10-6" />
            </svg>
            <input
              class="field__input"
              id="email"
              type="email"
              placeholder="jane@example.com"
              formControlName="email"
              autocomplete="off"
              (input)="email.updateValueAndValidity()" />
          </div>
          <span class="field__error" *ngIf="email.touched && email.hasError('required')">
            Email is required.
          </span>
          <span class="field__error" *ngIf="email.touched && email.hasError('email')">
            Enter a valid email address.
          </span>
        </div>

        <div class="field" [class.field--error]="password.invalid && password.touched">
          <label class="field__label" for="password">Password</label>
          <div class="field__wrap">
            <svg class="field__icon" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="1.6">
              <rect x="3" y="11" width="18" height="11" rx="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <input
              class="field__input"
              id="password"
              type="password"
              placeholder="Min. 6 characters"
              formControlName="password"
              autocomplete="new-password"
              (input)="password.updateValueAndValidity()" />
          </div>
          <span class="field__error" *ngIf="password.touched && password.hasError('required')">
            Password is required.
          </span>
          <span class="field__error" *ngIf="password.touched && password.hasError('minlength')">
            Password must be at least 6 characters.
          </span>
        </div>

        <label class="checkbox">
          <input class="checkbox__input" type="checkbox" />
          <span class="checkbox__box"></span>
          <span class="checkbox__text">
            I agree to the
            <a href="#" class="link">Terms of Service</a>
            and
            <a href="#" class="link">Privacy Policy</a>
          </span>
        </label>

        <p class="error-message" *ngIf="isError">{{(errorMessage())}}</p>

        <button class="btn-register" type="submit" [disabled]="signupForm.invalid" (click)="onSignUp()">
          <span>Create account</span>
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>

      </form>
    </div>

    <div class="card__footer">
      <p>Already have an account? <a class="link link--accent" (click)="onSignIn()">Sign in →</a></p>
    </div>
  </div>
</div>

<app-spinner-loader [loading]="isLoading" [fullscreen]="true" size="md"></app-spinner-loader>

```


---

## 📄 app\shared\components\signup\signup.component.scss

```
$font-display : 'Syne', sans-serif;
$font-body    : 'DM Sans', sans-serif;

$c-bg           : #080a12;
$c-surface      : #0f1119;
$c-surface-2    : #171b27;
$c-surface-3    : #1e2333;
$c-accent       : #6d5ae8;
$c-accent-light : #b3a4f8;
$c-text         : #ecedf5;
$c-muted        : #6b6f85;
$c-border       : rgba(255, 255, 255, .07);
$c-border-hover : rgba(255, 255, 255, .15);
$c-border-focus : rgba(109, 90, 232, .55);
$c-error        : #f87171;
$c-error-bg     : rgba(248, 113, 113, .08);
$c-error-border : rgba(248, 113, 113, .45);
$r-md   : .625rem;
$r-lg   : 1rem;
$r-xl   : 1.25rem;
$r-pill : 6.25rem;
$ease : cubic-bezier(.4, 0, .2, 1);

.auth-page {
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  overflow-x: hidden;
  background: #080a12;
}

.bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;

  &__blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(5rem);

    &--violet {
      width: 28rem;
      height: 28rem;
      top: -10rem;
      right: -8rem;
      background: rgba(109, 90, 232, .22);
    }

    &--blue {
      width: 22rem;
      height: 22rem;
      bottom: -8rem;
      left: -6rem;
      background: rgba(59, 130, 246, .16);
    }

    &--rose {
      width: 16rem;
      height: 16rem;
      top: 40%;
      right: 8%;
      background: rgba(236, 72, 153, .12);
    }
  }

  &__grid {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(255,255,255,.025) .0625rem, transparent .0625rem),
      linear-gradient(90deg, rgba(255,255,255,.025) .0625rem, transparent .0625rem);
    background-size: 3rem 3rem;
  }
}

.card {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 30rem;
  background: rgba($c-surface, .88);
  backdrop-filter: blur(1.5rem);
  -webkit-backdrop-filter: blur(1.5rem);
  border: .0625rem solid $c-border;
  border-radius: $r-xl;
  overflow: hidden;
  box-shadow:
    0 1.5rem 4rem rgba(0,0,0,.55),
    0 0 0 .0625rem rgba(255,255,255,.03) inset;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.4rem 1.6rem 0;
  }

  &__body {
    padding: 1.6rem;
  }

  &__intro {
    margin-bottom: 1.6rem;
  }

  &__title {
    font-family: $font-display;
    font-size: 2.5rem;
    font-weight: 800;
    line-height: 1.05;
    letter-spacing: -.03em;
    margin-bottom: .35rem;

    background: linear-gradient(
      135deg,
      #ffffff 0%,
      $c-accent-light 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &__sub {
    font-size: .92rem;
    color: $c-muted;
  }

  &__footer {
    padding: 1rem 1.6rem 1.3rem;
    border-top: .0625rem solid $c-border;
    text-align: center;
    font-size: .85rem;
    color: $c-muted;
  }
}

.logo {
  display: flex;
  align-items: center;
  gap: .75rem;

  &__icon {
    width: 3rem;
    height: 3rem;
    border-radius: $r-md;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background: linear-gradient(
      135deg,
      $c-accent,
      #3b82f6
    );
    box-shadow: 0 .25rem 1rem rgba(109, 90, 232, .45);
  }

  &__name {
    font-family: $font-display;
    font-size: 1.2rem;
    font-weight: 700;
  }
}

.badge {
  padding: .35rem .85rem;
  border-radius: $r-pill;
  border: .0625rem solid rgba(109, 90, 232, .3);
  background: rgba(109, 90, 232, .12);
  color: $c-accent-light;
  font-size: .72rem;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
}

.field {
  display: flex;
  flex-direction: column;
  gap: .5rem;

  &__label {
    font-size: .8rem;
    font-weight: 500;
    color: $c-muted;
    text-transform: uppercase;
    letter-spacing: .04em;
  }

  &__wrap {
    position: relative;
  }

  &__icon {
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);
    color: $c-muted;
    transition: color .2s $ease;
  }

  &__input {
    width: 100%;
    height: 3rem;
    padding: 0 1rem 0 3rem;
    border: .0625rem solid $c-border;
    border-radius: $r-md;
    background: rgba($c-surface-2, .75);
    color: $c-text;
    font-size: .92rem;
    outline: none;

    transition:
      border-color .2s $ease,
      box-shadow .2s $ease,
      background .2s $ease;

    &::placeholder {
      color: rgba($c-muted, .45);
    }

    &:hover {
      border-color: $c-border-hover;
    }

    &:focus {
      border-color: $c-border-focus;
      background: rgba($c-surface-3, .95);
      box-shadow: 0 0 0 .1875rem rgba(109, 90, 232, .15);
    }
  }

  &--error {
    .field__input {
      border-color: $c-error-border;
      background: $c-error-bg;

      &:focus {
        border-color: $c-error-border;
        box-shadow: 0 0 0 .1875rem rgba(248, 113, 113, .15);
      }
    }

    .field__icon {
      color: $c-error;
    }
  }

  &__error {
    display: block;
    font-size: .75rem;
    font-weight: 500;
    color: $c-error;
    padding-left: .25rem;
    animation: slideDown .2s $ease;
  }
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-.25rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.checkbox {
  display: flex;
  align-items: flex-start;
  gap: .7rem;
  cursor: pointer;
  position: relative;

  &__input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }

  &__box {
    position: relative;
    width: 1.1rem;
    height: 1.1rem;
    margin-top: .1rem;
    flex-shrink: 0;
    border-radius: .3rem;
    border: .09375rem solid $c-border-hover;
    background: rgba($c-surface-2, .7);

    transition:
      background .2s ease,
      border-color .2s ease,
      box-shadow .2s ease;

    &::after {
      content: '';
      position: absolute;
      top: 45%;
      left: 50%;
      width: .5rem;
      height: .28rem;
      border-left: .12rem solid #fff;
      border-bottom: .12rem solid #fff;

      transform:
        translate(-50%, -60%)
        rotate(-45deg)
        scale(0);
      transition: transform .2s ease;
    }
  }

  &__text {
    font-size: .84rem;
    line-height: 1.5;
    color: $c-muted;
  }
}

.checkbox__input:checked + .checkbox__box {
  background: $c-accent;
  border-color: $c-accent;
  box-shadow: 0 0 0 .18rem rgba(109, 90, 232, .18);
}

.checkbox__input:checked + .checkbox__box::after {
  transform:
    translate(-50%, -60%)
    rotate(-45deg)
    scale(1);
}

.btn-register {
  width: 100%;
  height: 3.1rem;
  margin-top: .2rem;
  border-radius: $r-md;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .55rem;

  background: linear-gradient(
    135deg,
    $c-accent 0%,
    #5548d4 50%,
    #3b82f6 100%
  );

  color: #fff;

  font-family: $font-display;
  font-size: .98rem;
  font-weight: 700;

  box-shadow: 0 .4rem 1.6rem rgba(109, 90, 232, .45);

  transition:
    transform .15s $ease,
    box-shadow .2s $ease,
    opacity .2s $ease;

  &:hover:not(:disabled) {
    transform: translateY(-.0625rem);

    box-shadow: 0 .6rem 2rem rgba(109, 90, 232, .6);
  }

  &:active:not(:disabled) {
    transform: scale(.985);
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
    box-shadow: none;
  }
}

.link {
  color: $c-accent-light;

  transition: color .2s ease;

  &:hover {
    color: #fff;
  }

  &--accent {
    font-weight: 600;
  }
}

.error-message{
  color:red;
  font-size: .85rem;
  text-align: center;
}

@media (max-width: 768px) {
  .auth-page {
    padding: 1rem;
  }

  .card {
    max-width: 100%;

    &__header {
      padding: 1.2rem 1.2rem 0;
    }

    &__body {
      padding: 1.2rem;
    }

    &__footer {
      padding: 1rem 1.2rem 1.2rem;
    }

    &__title {
      font-size: 2rem;
    }
  }

  .badge {
    display: none;
  }
}
```


---

## 📄 app\shared\components\signup\signup.component.spec.ts

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupComponent } from './signup.component';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

```


---

## 📄 app\shared\components\signup\signup.component.ts

```typescript
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import { SpinnerLoaderComponent } from '../../loaders/common-loader/spinner-loader/spinner-loader.component';
import { Router } from '@angular/router';
import { ToastService } from '../../../services/toast-service/toast.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, SpinnerLoaderComponent, HeaderComponent],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  isLoading: boolean = false;
  isError: boolean = false;
  errorMessage = signal<string>('');
  constructor(private authService: AuthService, private router: Router, private toastService: ToastService) { }

  signupForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  get name() { return this.signupForm.get('name')!; }
  get email() { return this.signupForm.get('email')!; }
  get password() { return this.signupForm.get('password')!; }

  onSignUp(): void {
    this.isLoading = true;
    if (this.signupForm.valid) {
      let payload = {
        name: this.signupForm.value.name || '',
        email: this.signupForm.value.email || '',
        password: this.signupForm.value.password || ''
      }
      this.authService.userSignup(payload).subscribe({
        next: (response: any) => {
          console.log(response);
          this.isLoading = false;
          this.toastService.show(response?.message || 'Signup successful!', 'success');
          console.log('Signup successful:', response);
          this.router.navigate(['/login']);

        },
        error: (error) => {
          this.isLoading = false;
          this.isError = true;
          this.errorMessage.set(error.error?.message || 'An error occurred during signup. Please try again.');
          console.error('Signup failed:', error);
        }
      });
    } else {
      this.isLoading = false;
      this.signupForm.markAllAsTouched();
    }
  }

  onSignIn(): void {
    this.router.navigate(['/login']);
  }
}
```


---

## 📄 app\shared\loaders\common-loader\spinner-loader\spinner-loader.component.html

```html
<div
  *ngIf="loading"
  class="spinner-overlay"
  [class.fullscreen]="fullscreen"
>
  <div class="spinner-box">
    <div class="spinner" [ngClass]="size"></div>
  </div>

</div>
```


---

## 📄 app\shared\loaders\common-loader\spinner-loader\spinner-loader.component.scss

```
$c-accent       : #6d5ae8;
$c-accent-mid   : #8b76f0;
$c-accent-light : #b3a4f8;
$c-accent-fade  : rgba(109, 90, 232, .15);

$c-surface      : rgba(15, 17, 25, .94);
$c-border       : rgba(255, 255, 255, .06);
$c-text         : #ecedf5;

.spinner-overlay {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &.fullscreen {
    position: fixed;
    inset: 0;
    z-index: 999;
    background: rgba(8, 10, 18, .72);
    backdrop-filter: blur(.5rem);
    -webkit-backdrop-filter: blur(.5rem);
  }
}

.spinner-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  min-width: 11rem;
  padding: 1.5rem;

  border-radius: 1.25rem;

  background: $c-surface;
  border: .0625rem solid $c-border;

  box-shadow:
    0 1.5rem 3rem rgba(0, 0, 0, .45),
    0 0 0 .0625rem rgba(255, 255, 255, .03) inset;
}

.spinner {
  border-radius: 50%;
  animation: spin 0.9s linear infinite;

  border: 5px solid $c-accent-fade;
  border-top-color: $c-accent;
  border-right-color: $c-accent-mid;
  border-bottom-color: $c-accent-light;

  box-shadow: 0 0 8px rgba(109, 90, 232, .3);

  @supports (background: conic-gradient(red, blue)) {
    border: none;

    background: conic-gradient(
      from 0deg,
      $c-accent,
      $c-accent-mid,
      $c-accent-light,
      rgba(179, 164, 248, .25),
      transparent 80%
    );

    -webkit-mask: radial-gradient(farthest-side,
      transparent calc(100% - 5px),
      black 0);

    mask: radial-gradient(farthest-side,
      transparent calc(100% - 5px),
      black 0);
  }

  &.sm {
    width: 20px;
    height: 20px;
    border-width: 2px;
  }

  &.md {
    width: 40px;
    height: 40px;
    border-width: 4px;
  }

  &.lg {
    width: 60px;
    height: 60px;
    border-width: 5px;
  }

  &.xl {
    width: 80px;
    height: 80px;
    border-width: 6px;
  }
}

.spinner-text {
  font-size: .92rem;
  font-weight: 500;
  color: $c-text;
  letter-spacing: .02em;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
```


---

## 📄 app\shared\loaders\common-loader\spinner-loader\spinner-loader.component.spec.ts

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerLoaderComponent } from './spinner-loader.component';

describe('SpinnerLoaderComponent', () => {
  let component: SpinnerLoaderComponent;
  let fixture: ComponentFixture<SpinnerLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpinnerLoaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpinnerLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

```


---

## 📄 app\shared\loaders\common-loader\spinner-loader\spinner-loader.component.ts

```typescript
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
```

