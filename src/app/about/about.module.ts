import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './about.component';

import { AboutRoutingModule } from './about-routing.module';
import { OurTeamComponent } from './our-team/our-team.component';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule
  ],
  declarations: [AboutComponent,
    OurTeamComponent
]
})
export class AboutModule { }
