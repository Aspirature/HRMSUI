import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplyleavesRoutingModule } from './applyleaves-routing.module';
import { ApplyleavesComponent } from './applyleaves/applyleaves.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ApplyleavesComponent
  ],
  imports: [
    CommonModule,
    ApplyleavesRoutingModule,
    FormsModule
  ]
})
export class ApplyleavesModule { }
