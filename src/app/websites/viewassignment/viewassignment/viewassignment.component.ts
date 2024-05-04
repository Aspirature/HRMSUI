import { Component, OnInit } from '@angular/core';
import { viewAssignService } from 'src/app/services/viewAssign.service';

@Component({
  selector: 'app-viewassignment',
  templateUrl: './viewassignment.component.html',
  styleUrls: ['./viewassignment.component.css']
})
export class ViewassignmentComponent implements OnInit {

  currentTab: string = 'tab1';
  viewAssignDetails:any[]=[];
  currentAssign: any;
  historyAssign:any;

  constructor(private viewAssign:viewAssignService) { }

  ngOnInit(): void {
    this.getViewAssign();
  }

  getViewAssign(){
    let empId = 1;
    this.viewAssign.getViewwAssignData(empId).subscribe((data:any)=>{
    this.viewAssignDetails=data;
    this.currentAssign=data.filter((x:any) => x.isactive == true)
    this.historyAssign=data.filter((x:any) => x.isactive == false)
    },(error) => {
      console.error('Error fetching View Assignment details:', error);
    });
  }

  changeTab(tabName: string) {
    this.currentTab = tabName;
  }
  
}
