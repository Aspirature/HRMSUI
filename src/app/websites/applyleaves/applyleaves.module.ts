import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplyleavesRoutingModule } from './applyleaves-routing.module';
import { ApplyleavesComponent } from './applyleaves/applyleaves.component';


@NgModule({
  declarations: [
    ApplyleavesComponent
  ],
  imports: [
    CommonModule,
    ApplyleavesRoutingModule
  ]
})
export class ApplyleavesModule { }
