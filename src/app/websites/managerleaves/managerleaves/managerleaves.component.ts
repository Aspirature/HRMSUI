import { Component, OnInit } from '@angular/core';
import { viewAssignService } from 'src/app/services/viewAssign.service';

@Component({
  selector: 'app-managerleaves',
  templateUrl: './managerleaves.component.html',
  styleUrls: ['./managerleaves.component.css']
})
export class ManagerleavesComponent implements OnInit {

  applyLeavesDetails:any[]=[];
  employeeLeavesDetails:any[]=[];

  // startDate: string | null = null;
  // endDate: string | null = null;
   error: string | null = null;
  // absenceName: string | null = null;
  // requesterComments: string | null = null;

  startDate: string = '';
  endDate: string = '';
  absenceName: string = '';
  selectHalfDay: boolean = false;
  requesterComments: string = '';

  constructor(private applyLeaves:viewAssignService) { }

  ngOnInit(): void {
    this.applyLeavesData();
    this.employeeLeavesData();
  }

  getDuration(startDate: string, endDate: string): string {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const durationInMilliseconds = Math.abs(end.getTime() - start.getTime());

    const days = Math.floor(durationInMilliseconds / (1000 * 60 * 60 * 24));
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    return `${days % 30} days`;
  }

  // applyLeavesData

  applyLeavesData(){
    this.applyLeaves.getApplyLeavesData().subscribe((data:any)=>{
      this.applyLeavesDetails = data;
    },(error) => {
      console.error('Error fetching users details:', error);
    });
  }

  // EmployeeLeavesData

  employeeLeavesData(){
    let empId=1;
    this.applyLeaves.getEmployeeLeavesMasterData(empId).subscribe((data:any)=>{
      this.employeeLeavesDetails = data;
    },(error) => {
      console.error('Error fetching users details:', error);
    });
  }
  
}
