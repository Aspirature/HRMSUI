import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerleavesRoutingModule } from './managerleaves-routing.module';
import { ManagerleavesComponent } from './managerleaves/managerleaves.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ManagerleavesComponent
  ],
  imports: [
    CommonModule,
    ManagerleavesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ManagerleavesModule { }
