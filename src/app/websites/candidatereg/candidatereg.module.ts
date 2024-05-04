import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidateregRoutingModule } from './candidatereg-routing.module';
import { CandidateregComponent } from './candidatereg/candidatereg.component';


@NgModule({
  declarations: [
    CandidateregComponent
  ],
  imports: [
    CommonModule,
    CandidateregRoutingModule
  ]
})
export class CandidateregModule { }
