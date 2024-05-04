import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CactivateGuard } from 'src/app/guards/cactivate.guard';

const routes: Routes = [
  {path:'',component: AdminComponent,canActivate:[CactivateGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
