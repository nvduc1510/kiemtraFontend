import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const EMPLOYEE_API = "http://localhost:3000/employees"
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }


  getListEmployees(): Observable<any>{
    return this.http.get(EMPLOYEE_API,httpOptions);
  }

  createEmployees(employee: any):Observable<any>{
    return this.http.post(EMPLOYEE_API,employee,httpOptions);
  }


  updateEmployees(id: any,employee: any):Observable<any>{
    return this.http.put(EMPLOYEE_API + '/' + id ,employee,httpOptions);
  }

  deleteEmployees(id: any):Observable<any>{
    return this.http.delete(EMPLOYEE_API + '/' + id,httpOptions);
  }

}
