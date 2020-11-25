import { Injectable, Component } from '@angular/core';
import { rejects } from 'assert';
import {Observable, of} from 'rxjs';
import {tap, delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  gettoken(){
    return !!localStorage.getItem("sessionUser");
  }
  users=[
    {
      username: 'admin',
      password: 'admin'
    },
   
  ]
  isLoggedIn = true;
  redirectUrl: string;

  constructor() {}

  login(): Promise<boolean> {
    this.isLoggedIn = true;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.isLoggedIn);
      },1000);
    });
  }
}