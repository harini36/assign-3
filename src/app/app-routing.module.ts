import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {EntryComponent} from './entry/entry.component';
import {ForgotpasswordComponent} from './forgotpassword/forgotpassword.component';
import {ChangePasswordComponent} from './change-password/change-password.component';
import {ChangePasswordFilledComponent} from './change-password-filled/change-password-filled.component';



const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'forgotpassword',component:ForgotpasswordComponent},
  {path:'home',component:HomeComponent},
  {path:'entry',component:EntryComponent},
  {path:'changePassword',component:ChangePasswordComponent},
  {path:'changepasswordfilled',component:ChangePasswordFilledComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
