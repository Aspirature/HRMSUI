import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeentrypage',
  templateUrl: './timeentrypage.component.html',
  styleUrls: ['./timeentrypage.component.css']
})
export class TimeentrypageComponent implements OnInit {

  selectedDate!: string;

  constructor() { }

  ngOnInit(): void {
    this.onDateChange();
  }

  onDateChange() {
    console.log('Selected Date:', this.selectedDate);
  }

}
