import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CactivateGuard } from 'src/app/guards/cactivate.guard';
import { EmployeeRegComponent } from './employee-reg/employee-reg.component';

const routes: Routes = [
  {path:'',component:EmployeeRegComponent, canActivate:[CactivateGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRegRoutingModule { }
