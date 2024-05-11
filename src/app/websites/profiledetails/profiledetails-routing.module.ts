import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfiledetailsComponent } from './profiledetails/profiledetails.component';
import { CactivateGuard } from 'src/app/guards/cactivate.guard';

const routes: Routes = [
  {path:'',component:ProfiledetailsComponent, }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfiledetailsRoutingModule { }
