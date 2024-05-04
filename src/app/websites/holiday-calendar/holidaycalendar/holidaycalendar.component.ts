import { Component, OnInit } from '@angular/core';
import { PdffilesService } from 'src/app/services/pdffiles.service';

@Component({
  selector: 'app-holidaycalendar',
  templateUrl: './holidaycalendar.component.html',
  styleUrls: ['./holidaycalendar.component.css']
})
export class HolidaycalendarComponent implements OnInit {
  shortLink: string = ''; 
  loading: boolean = false; 
  file: File | any = null;

  constructor(private fileDownloadService: PdffilesService) {}

  ngOnInit(): void {
    
  }
  
  downloadExcel() {
    this.fileDownloadService.downloadExcelFile().subscribe((response:any) => {
      this.saveFile(response.body);
    });
  }

  private saveFile(blob: Blob) {
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'Holiday_Calendar.docx';
    link.click();
    window.URL.revokeObjectURL(link.href);
  }

}
