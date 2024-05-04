import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeentrypageRoutingModule } from './timeentrypage-routing.module';
import { TimeentrypageComponent } from './timeentrypage/timeentrypage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TimeentrypageComponent
  ],
  imports: [
    CommonModule,
    TimeentrypageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TimeentrypageModule { }
