import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRegRoutingModule } from './employee-reg-routing.module';
import { EmployeeRegComponent } from './employee-reg/employee-reg.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EmployeeRegComponent
  ],
  imports: [
    CommonModule,
    EmployeeRegRoutingModule,
    FormsModule
  ]
})
export class EmployeeRegModule { }
