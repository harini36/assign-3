import { Component, OnInit } from '@angular/core';
import { Admin } from './admin';
import { ADMIN } from './admin_list';
import { SUPERADMIN } from './superadmin_list';
import { Superadmin } from './super_admin';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  admin: Admin = {
    name: "",
    employeeCode: "",
    email: "",
  }
  adminlist = ADMIN;

  super_admin: Superadmin = {
    name: "",
    employeeCode: "",
    email: "",
  }
  superadmin_list = SUPERADMIN;

  
  constructor() { };
 

  ngOnInit(): void {

  };




  home(): void {
    document.getElementById('home_page').style.zIndex = "5";
    document.getElementById('options').style.zIndex = "1";
    document.getElementById('screen').style.zIndex = "3";
    document.getElementById('white_screen').style.zIndex = "4";
    document.getElementById('superAdmin').style.zIndex = "1";
    document.getElementById('admin').style.zIndex = "-1";

  }

  options(): void {
    document.getElementById('home_page').style.zIndex = "3";
    document.getElementById('options').style.zIndex = "5";
    document.getElementById('screen').style.zIndex = "4";
    document.getElementById('white_screen').style.zIndex = "2";
  }

  superAdmin(): void {
    document.getElementById('home_page').style.zIndex = "1";
    document.getElementById('screen').style.zIndex = "3";
    document.getElementById('options').style.zIndex = "-5";
    document.getElementById('superAdmin').style.zIndex = "5";
    document.getElementById('admin').style.zIndex = "-5";
  }

  Admin(): void {
    document.getElementById('home_page').style.zIndex = "1";
    document.getElementById('screen').style.zIndex = "3";
    document.getElementById('options').style.zIndex = "-5";
    document.getElementById('superAdmin').style.zIndex = "-5";
    document.getElementById('admin').style.zIndex = "5";
  }
  save() {
    const temp: Admin = { ...this.admin }
    this.adminlist.unshift(temp)
  }

  delete(admin: Admin): void {
    this.adminlist.forEach((item, index) => {
      if (item === admin) {
        this.adminlist.splice(index, 1);
      }
    });
  }

  save_1() {
    const temp: Superadmin = { ...this.super_admin }
    this.superadmin_list.unshift(temp)
  }

  delete_1(super_admin: Superadmin): void {
    this.superadmin_list.forEach((item, index) => {
      if (item === super_admin) {
        this.superadmin_list.splice(index, 1);
      }
    });
  }
}
