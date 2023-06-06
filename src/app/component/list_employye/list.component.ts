import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/_service/employee.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  listEmployees : any;

  constructor(private employeeService: EmployeeService,private router: Router){}

  ngOnInit(): void {
    this.getListEmployees();
  }

  getListEmployees(){
    this.employeeService.getListEmployees().subscribe({
      next: res =>{
        this.listEmployees = res;
      }
    })
  }

  deleleEmployees(id: any){
    this.employeeService.deleteEmployees(id).subscribe(data =>{
      this.getListEmployees();
    })
  }



}
