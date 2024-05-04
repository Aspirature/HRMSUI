import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { CactivateGuard } from 'src/app/guards/cactivate.guard';

const routes: Routes = [
  {path:'',component:RegisterComponent, canActivate:[CactivateGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
