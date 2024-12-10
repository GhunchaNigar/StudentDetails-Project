import { Component } from '@angular/core';
import { DashboardService } from "../dashboard.service";
@Component({
  selector: 'students-details-students-list',
  standalone: true,
  imports: [],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.scss'
})
export class StudentsListComponent {
  students: any;
  
  constructor(
    private studentsService: DashboardService
  ) {
    this.studentsService.callGetStudentsRecord().subscribe((students) => {
      this.students = students;
    });
  } 
}