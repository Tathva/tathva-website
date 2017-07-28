import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
    RouterTestingModule
} from '@angular/router/testing';

import { AdmissionsComponent } from './admissions.component';

describe('AdmissionsComponent', () => {
  let component: AdmissionsComponent;
  let fixture: ComponentFixture<AdmissionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmissionsComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
