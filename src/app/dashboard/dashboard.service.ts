import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  

  constructor(
    private http: HttpClient
  ) { }
  callGetStudentsRecord(): Observable <any>{
    return this.http.get("/api/students");
  }
  callGetStudentDetailssRecord(): Observable <any>{
    return this.http.get("/api/studentsDetails");
  }
  callGetStudentsAddressRecord(): Observable <any>{
    return this.http.get("/api/addresss");
  }
  callStudentsMarks():Observable<any>{
    return this.http.get("/api/studentsMarks")
  }
}
