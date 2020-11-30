import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {ChangePasswordComponent} from './change-password/change-password.component';
import {ForgotpasswordComponent} from './forgotpassword/forgotpassword.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'forgotpassword',component: ForgotpasswordComponent},
  { path: 'home', component: HomeComponent,canActivate:[AuthGuard],data:['ADMIN']},
  { path: 'changepassword', component: ChangePasswordComponent },
  { path: 'home', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
