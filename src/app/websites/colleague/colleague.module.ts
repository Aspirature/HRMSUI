import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColleagueRoutingModule } from './colleague-routing.module';
import { ColleagueComponent } from './colleague/colleague.component';


@NgModule({
  declarations: [
    ColleagueComponent
  ],
  imports: [
    CommonModule,
    ColleagueRoutingModule
  ]
})
export class ColleagueModule { }
