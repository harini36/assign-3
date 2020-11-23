import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  minDate: Date;
  maxDate: Date;

  constructor() { 
    this.setDateConstraints();
  }

  ngOnInit(): void {
  }
  

    setDateConstraints(): void {
      const currentYear = new Date().getFullYear();
      this.minDate = new Date(currentYear - 20, 0, 1);
      this.maxDate = new Date(currentYear + 10, 11, 31);
    }

}
