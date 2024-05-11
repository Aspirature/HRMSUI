import { Component, OnInit } from '@angular/core';
import { DynamicArrayElement } from './emp-re';

@Component({
  selector: 'app-employee-reg',
  templateUrl: './employee-reg.component.html',
  styleUrls: ['./employee-reg.component.css']
})
export class EmployeeRegComponent implements OnInit {

  dynamicArray: DynamicArrayElement[] = [];

  constructor() { }

  ngOnInit(): void {
  }


  addRow() {
    this.dynamicArray.push({ title: 'Employee Experience Details', companyName: '', designation: '', startDate: '', endDate: '', lastDrawnCTC:'', payrollCompanyName:'', roles:'' });
  }

  deleteRow(index: number): void {
    this.dynamicArray.splice(index, 1);
  }

}
