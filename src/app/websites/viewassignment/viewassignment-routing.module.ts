import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewassignmentComponent } from './viewassignment/viewassignment.component';
import { CactivateGuard } from 'src/app/guards/cactivate.guard';

const routes: Routes = [
  {path:'',component:ViewassignmentComponent, canActivate:[CactivateGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewassignmentRoutingModule { }
