/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LetterCardComponent } from './letter-card.component';

describe('LetterCardComponent', () => {
  let component: LetterCardComponent;
  let fixture: ComponentFixture<LetterCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetterCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
