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
  currentAssign: any[] = [];
  historyAssign: any[] = [];
  currentCount: number = 0;
  historyCount: number = 0; 
  currentAssignStatus:any;
  historyAssignstatus:any;

  constructor(private viewAssign:viewAssignService) { }

  getViewAssign(){
    let empId = 1;
    this.viewAssign.getViewwAssignData(empId).subscribe((data:any)=>{
    this.viewAssignDetails=data;
    if(this.currentAssign=data.filter((x:any) => x.isactive == true)){
      this.currentAssignStatus="In Progress"
    }

    if(this.historyAssign=data.filter((x:any) => x.isactive == false)){
      this.historyAssignstatus="Completed"
    }
    },(error) => {
      console.error('Error fetching View Assignment details:', error);
    });
  }

  changeTab(tabName: string) {
    this.currentTab = tabName;
    this.updateCounts();
  }
  
  updateCounts(): void {
    this.currentCount = this.currentAssign.length;
    this.historyCount = this.historyAssign.length;
  }

  fetchData(): void {
    this.currentAssign = [];
    this.historyAssign = [];
    this.updateCounts();
  }

  ngOnInit(): void {
    this.getViewAssign();
    this.fetchData();
  }

}
