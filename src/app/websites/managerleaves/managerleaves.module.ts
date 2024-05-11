import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerleavesRoutingModule } from './managerleaves-routing.module';
import { ManagerleavesComponent } from './managerleaves/managerleaves.component';


@NgModule({
  declarations: [
    ManagerleavesComponent
  ],
  imports: [
    CommonModule,
    ManagerleavesRoutingModule
  ]
})
export class ManagerleavesModule { }
