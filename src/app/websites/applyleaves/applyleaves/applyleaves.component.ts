import { Component, OnInit } from '@angular/core';
import { viewAssignService } from 'src/app/services/viewAssign.service';
import { LeaveDetails } from './leave-details.model';
import { NgForm } from '@angular/forms';
declare var bootstrap: any;

@Component({
  selector: 'app-applyleaves',
  templateUrl: './applyleaves.component.html',
  styleUrls: ['./applyleaves.component.css']
})


export class ApplyleavesComponent implements OnInit {

  applyLeavesDetails:any[]=[];
  employeeLeavesDetails:any[]=[];

   error: string | null = null;

  startDate: string = '';
  endDate: string = '';
  absenceName: string = '';
  noOfDays:number | undefined;
  selectHalfDay: boolean = false;
  requesterComments: string = '';
  managerComments:string ='';
  isManagerApproves:boolean=false;
  isActive:boolean=false;
  leaveTypeId: any;
  empIdLatest: string = "";
  days:any
  
  constructor(private applyLeaves:viewAssignService) { }

  ngOnInit(): void {
    this.empIdLatest=JSON.parse(localStorage.getItem('employeeId') || '{}');
    this.applyLeavesData();
    this.employeeLeavesData();
  }

  changeLeaveType(data: any) {
    this.leaveTypeId = data;
  }

  
  getDuration(startDate: string, endDate: string): string {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const durationInMilliseconds = Math.abs(end.getTime() - start.getTime());

    this.days = Math.floor(durationInMilliseconds / (1000 * 60 * 60 * 24));
    const months = Math.floor(this.days / 30);
    const years = Math.floor(months / 12);

    return `${this.days % 30} days`;
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
    this.applyLeaves.getEmployeeLeavesMasterData(Number(this.empIdLatest)).subscribe((data:any)=>{
      this.employeeLeavesDetails = data;
    },(error) => {
      console.error('Error fetching users details:', error);
    });
  }
  
  showSuccessModal() {
    var myModal = new bootstrap.Modal(document.getElementById('successModal'));
    myModal.show();
  }

  submitLeaveDetails(form: NgForm) {

    if (form.invalid) {
      Object.values(form.controls).forEach(control => {
        control.markAsTouched();
      });
      return;
    }

    const leaveDetails: LeaveDetails = {
      employeeLeaveDetailsId: 0,
      startDate: this.startDate || '',
      endDate: this.endDate || '',
      noOfDays: Number(this.days),
      employeeComments: this.requesterComments || '',
      halfDay: this.selectHalfDay,
      fullDay: this.selectHalfDay,
      isManagerApproves: this.isManagerApproves,
      managerComments: this.managerComments,
      isActive: this.isActive,
      employeeid: Number(this.empIdLatest),
      leaveTypeId: Number(this.leaveTypeId),
    };

  
    this.applyLeaves.postApplyLeavesData(leaveDetails).subscribe
      (
        response => {
          console.log('Leave details submitted successfully!', response);
          this.showSuccessModal();
        },
        error => {
          this.error = 'Error occurred while submitting leave details: ' + error.message;
        }
      );
  }
  
}
