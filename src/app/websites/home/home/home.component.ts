import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentTime: Date = new Date();
  greetingMessage: string | null | undefined;

  constructor() { }

  ngOnInit(): void {
    this.currentTime = new Date();
    this.setGreetingMessage();
  }

  setGreetingMessage() {
    const currentHour = this.currentTime.getHours();

    if (currentHour >= 5 && currentHour < 12) {
      this.greetingMessage = 'Good morning';
    } else if (currentHour >= 12 && currentHour < 17) {
      this.greetingMessage = 'Good afternoon';
    } else {
      this.greetingMessage = 'Good evening';
    }
  }


  //  downloadPDF() {
  //   const doc = new jsPDF();
  //   doc.text('Hello, this is a PDF!', 10, 10);
  //   doc.save('example.pdf');
  // }

  // let x= document.getElementById('downloadBtn');
  //     x.addEventListener('click', downloadPDF);

}
