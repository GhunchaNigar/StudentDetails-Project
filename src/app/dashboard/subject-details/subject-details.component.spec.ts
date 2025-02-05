import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubjectsDetailsComponent } from './subject-details.component';

describe('SubjectDetailsComponent', () => {
  let component: SubjectsDetailsComponent;
  let fixture: ComponentFixture<SubjectsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectsDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubjectsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
