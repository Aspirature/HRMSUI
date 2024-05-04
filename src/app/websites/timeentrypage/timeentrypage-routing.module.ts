import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeentrypageComponent } from './timeentrypage/timeentrypage.component';
import { CactivateGuard } from 'src/app/guards/cactivate.guard';

const routes: Routes = [
  {path:'',component:TimeentrypageComponent, canActivate:[CactivateGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeentrypageRoutingModule { }
