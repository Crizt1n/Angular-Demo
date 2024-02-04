import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeeComponent } from './employeee.component';

describe('EmployeeeComponent', () => {
  let component: EmployeeeComponent;
  let fixture: ComponentFixture<EmployeeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeeComponent]
    });
    fixture = TestBed.createComponent(EmployeeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
