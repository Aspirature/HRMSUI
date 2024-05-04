import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HolidaycalendarComponent } from './holidaycalendar/holidaycalendar.component';
import { CactivateGuard } from 'src/app/guards/cactivate.guard';

const routes: Routes = [
  {path:'',component:HolidaycalendarComponent, canActivate:[CactivateGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HolidayCalendarRoutingModule { }
