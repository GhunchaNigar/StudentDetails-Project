import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LandingComponent } from './landing/landing.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NgbHighlight, NgbDatepickerModule, NgbTypeaheadModule} from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard.component';
import { AgGridModule } from 'ag-grid-angular';
import { StudentRecordsComponent } from './student-records/student-records.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardService } from './dashboard.service';
import { StudentsMarksComponent } from './student-marks/student-marks.component';
import { StudentsListComponent } from './student-list/student-list.component';

const routes:Routes=[
  {
    path:"",
    component: DashboardComponent,
    children:[
      {
        path:"",
        redirectTo:"/dashboard/landing",
        pathMatch:"full"
      },
      {
        path:"landing",
        component:LandingComponent
      },
      {
        path:"students",
        component: StudentRecordsComponent
      },
      {
        path:"studentMarks",
        component: StudentsMarksComponent
      },
      {
        path:"studentList",
        component: StudentsListComponent
      }
    ]
  }]

@NgModule({
  declarations: [
    
    DashboardComponent,
    LandingComponent,
    SideBarComponent,
    StudentRecordsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbHighlight,
    AgGridModule,
    HttpClientModule,
    NgbDatepickerModule,
    NgbTypeaheadModule,
    FormsModule, ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers : [
    DashboardService
  ]
})
export class DashboardModule { }
