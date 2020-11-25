import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './login/login.component';
import { MatInputModule} from '@angular/material/input';
import { EntryComponent } from './entry/entry.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ChangePasswordFilledComponent } from './change-password-filled/change-password-filled.component';
import { MatDatepickerModule} from '@angular/material/datepicker';

import { AdminComponent } from './admin/admin.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    
    EntryComponent,
    
    ForgotpasswordComponent,
    
    ChangePasswordComponent,
    
    ChangePasswordFilledComponent,
    
    
    
    AdminComponent,
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
   
    
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
