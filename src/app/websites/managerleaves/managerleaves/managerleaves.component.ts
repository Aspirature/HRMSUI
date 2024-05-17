import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { LeaveDetails } from './../../applyleaves/applyleaves/leave-details.model';
import { NgForm } from '@angular/forms';
import { viewAssignService } from 'src/app/services/viewAssign.service';
import { ActivatedRoute } from '@angular/router';
declare var bootstrap: any;

@Component({
  selector: 'app-managerleaves',
  templateUrl: './managerleaves.component.html',
  styleUrls: ['./managerleaves.component.css']
})
export class ManagerleavesComponent implements OnInit {

  applyLeavesDetails:any[]=[];
  employeeLeavesDetails:any[]=[];
  editEmpLeave:any;
  error: string | null = null;
  empIdLatest: string = "";

  // editedStartDate: string = '';
  // editedEndDate: string = '';
  // editedDuration: string = '';
  // editedAbsenceName: string = '';
  // editedEmployeeComments: string = '';
  // editedHalf: string = '';
  // editedManagerName: string = '';
  // editedManagerApproval: string = '';
  

  constructor(private employeeLeaves:UserService,private route: ActivatedRoute) { }

  ngOnInit(): void {
     this.empIdLatest=JSON.parse(localStorage.getItem('employeeId') || '{}');
     const empDetailsId:any = this.route.snapshot.paramMap.get('id');
     this.editEmployeeLeaveDetails(empDetailsId);
     this.getEmployeeLeaveDetails();
  }

  getEmployeeLeaveDetails(){
    this.employeeLeaves.getEmployeeLeaveData(Number(this.empIdLatest)).subscribe((data: any) => {
      this.employeeLeavesDetails = data;
    }, (error) => {
      console.error('Error fetching EmployeeLeave details:', error);
    });
  }

  editEmployeeLeaveDetails(id: any) {
    this.employeeLeaves.getEmployeeLeaveDataById(id).subscribe(data => {
      this.editEmpLeave = data;
    });
  }
}
