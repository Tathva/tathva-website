import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppMaterialModule } from './../app-material.module';

import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { EmploymentComponent } from './employment/employment.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    AppMaterialModule,
    ContactRoutingModule
  ],
  declarations: [
    ContactComponent,
    ContactUsComponent,
    EmploymentComponent
]
})
export class ContactModule { }
