import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewassignmentRoutingModule } from './viewassignment-routing.module';
import { ViewassignmentComponent } from './viewassignment/viewassignment.component';


@NgModule({
  declarations: [
    ViewassignmentComponent
  ],
  imports: [
    CommonModule,
    ViewassignmentRoutingModule
  ]
})
export class ViewassignmentModule { }
