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
      console.log(data,'dataa');
      
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
      noOfDays: 1,
      employeeComments: this.requesterComments || '',
      halfDay: false,
      fullDay: true,
      isManagerApproves: true,
      managerComments: '',
      isActive: true,
      employeeid: 1,
      leaveTypeId: 1
    };

    // let empId=1;
  
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
