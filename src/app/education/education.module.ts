import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EducationRoutingModule } from './education-routing.module';
import { EducationComponent } from './education.component';
import { PrimaryComponent } from './primary/primary.component';
import { KinderComponent } from './kinder/kinder.component';
import { SecondaryComponent } from './secondary/secondary.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    EducationRoutingModule
  ],
  declarations: [EducationComponent,
    PrimaryComponent,
    KinderComponent,
    SecondaryComponent
]
})
export class EducationModule { }
