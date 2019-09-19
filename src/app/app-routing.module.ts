import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {TestPageComponent} from './pages/test-page/test-page.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {AuthGuard} from './shared/services/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'home/login', component: LoginPageComponent},
  {path: 'home/login/home', redirectTo: 'home'},
  {path: 'test', component: TestPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'home/login/test', component: TestPageComponent, canActivate: [AuthGuard]},
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
