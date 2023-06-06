import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/_service/employee.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  employeeForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    age: new FormControl(''),
    address: new FormControl(''),
    sex: new FormControl('')
  });

  constructor(private employeeService: EmployeeService,private router: Router){}

  ngOnInit(): void {
  }


  createEmployee(){
    this.employeeService.createEmployees(this.employeeForm.value).subscribe(data => {
      this.router.navigate(['/']);
    });
  }

}
