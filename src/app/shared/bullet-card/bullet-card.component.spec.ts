/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BulletCardComponent } from './bullet-card.component';

describe('BulletCardComponent', () => {
  let component: BulletCardComponent;
  let fixture: ComponentFixture<BulletCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulletCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulletCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
