import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyleavesComponent } from './applyleaves/applyleaves.component';
import { CactivateGuard } from 'src/app/guards/cactivate.guard';

const routes: Routes = [
  {path:'',component:ApplyleavesComponent, }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplyleavesRoutingModule { }
