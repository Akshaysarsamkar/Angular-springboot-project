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
