import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CareersRoutingModule } from './careers-routing.module';
import { CareerComponent } from './career/career.component';


@NgModule({
  declarations: [
    CareerComponent
  ],
  imports: [
    CommonModule,
    CareersRoutingModule
  ]
})
export class CareersModule { }
