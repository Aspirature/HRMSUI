import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRegRoutingModule } from './employee-reg-routing.module';
import { EmployeeRegComponent } from './employee-reg/employee-reg.component';


@NgModule({
  declarations: [
    EmployeeRegComponent
  ],
  imports: [
    CommonModule,
    EmployeeRegRoutingModule
  ]
})
export class EmployeeRegModule { }
