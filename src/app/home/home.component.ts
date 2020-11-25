import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  

  constructor() { };

  ngOnInit(): void {};

  home():void {
    document.getElementById('home_page').style.zIndex = "5";
    document.getElementById('options').style.zIndex = "1";
    document.getElementById('screen').style.zIndex = "3";
    document.getElementById('white_screen').style.zIndex = "4";
    document.getElementById('superAdmin').style.zIndex = "1";
    document.getElementById('admin').style.zIndex = "-1";

  }
  
  options():void {
    document.getElementById('home_page').style.zIndex = "3";
    document.getElementById('options').style.zIndex = "5";
    document.getElementById('screen').style.zIndex = "4";
    document.getElementById('white_screen').style.zIndex = "2";
  }

  superAdmin(): void
  {
    document.getElementById('home_page').style.zIndex = "1";
    document.getElementById('screen').style.zIndex = "3";
    document.getElementById('options').style.zIndex = "-5";
    document.getElementById('superAdmin').style.zIndex = "5";
    document.getElementById('admin').style.zIndex = "-5";
  }
 
  admin(): void
  {
    document.getElementById('home_page').style.zIndex = "1";
    document.getElementById('screen').style.zIndex = "3";
    document.getElementById('options').style.zIndex = "-5";
    document.getElementById('superAdmin').style.zIndex = "-5";
    document.getElementById('admin').style.zIndex = "5";
  }
}
