import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppMaterialModule } from './../app-material.module';

import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';
import { OurTeamComponent } from './our-team/our-team.component';
import { OurVisionComponent } from './our-vision/our-vision.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    AppMaterialModule,
    AboutRoutingModule
  ],
  declarations: [AboutComponent,
    OurTeamComponent,
    OurVisionComponent,
    ContactUsComponent
]
})
export class AboutModule { }
