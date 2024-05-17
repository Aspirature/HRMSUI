import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColleagueComponent } from './colleague/colleague.component';
import { CactivateGuard } from 'src/app/guards/cactivate.guard';

const routes: Routes = [
  {path:'',component:ColleagueComponent,}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColleagueRoutingModule { }
