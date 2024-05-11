import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfiledetailsRoutingModule } from './profiledetails-routing.module';
import { ProfiledetailsComponent } from './profiledetails/profiledetails.component';


@NgModule({
  declarations: [
    ProfiledetailsComponent
  ],
  imports: [
    CommonModule,
    ProfiledetailsRoutingModule
  ]
})
export class ProfiledetailsModule { }
