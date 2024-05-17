import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.css']
})
export class ColleagueComponent implements OnInit {

  colleagueDetails:any[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
