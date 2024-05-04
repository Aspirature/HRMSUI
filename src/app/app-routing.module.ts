import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';
import { MainRoutes } from './routing/routing';
import { NotfoundComponent } from './websites/notfound/notfound/notfound.component';
import { LoginComponent } from './websites/login/login/login.component';
import { HomeComponent } from './websites/home/home/home.component';
import { CactivateGuard } from './guards/cactivate.guard';

const routes: Routes = [
  {path:'',component:LayoutComponent,children:MainRoutes},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [CactivateGuard] },
  { path: '404', component: NotfoundComponent },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
