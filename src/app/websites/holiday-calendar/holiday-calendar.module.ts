import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HolidayCalendarRoutingModule } from './holiday-calendar-routing.module';
import { HolidaycalendarComponent } from './holidaycalendar/holidaycalendar.component';


@NgModule({
  declarations: [
    HolidaycalendarComponent
  ],
  imports: [
    CommonModule,
    HolidayCalendarRoutingModule
  ]
})
export class HolidayCalendarModule { }
