import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidaycalendarComponent } from './holidaycalendar.component';

describe('HolidaycalendarComponent', () => {
  let component: HolidaycalendarComponent;
  let fixture: ComponentFixture<HolidaycalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HolidaycalendarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HolidaycalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
