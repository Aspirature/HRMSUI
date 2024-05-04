import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateregComponent } from './candidatereg/candidatereg.component';
import { CactivateGuard } from 'src/app/guards/cactivate.guard';

const routes: Routes = [
  {path:'',component:CandidateregComponent, canActivate:[CactivateGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidateregRoutingModule { }
