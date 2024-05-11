import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerleavesComponent } from './managerleaves/managerleaves.component';
import { CactivateGuard } from 'src/app/guards/cactivate.guard';

const routes: Routes = [
  {path:'',component:ManagerleavesComponent, }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerleavesRoutingModule { }
