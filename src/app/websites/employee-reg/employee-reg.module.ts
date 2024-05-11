import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRegRoutingModule } from './employee-reg-routing.module';
import { EmployeeRegComponent } from './employee-reg/employee-reg.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    EmployeeRegComponent
  ],
  imports: [
    CommonModule,
    EmployeeRegRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class EmployeeRegModule { }
