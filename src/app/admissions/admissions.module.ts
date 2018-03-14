import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppMaterialModule } from './../app-material.module';
import { MdePopoverModule } from '@material-extended/mde';

import { SharedModule } from './../shared/shared.module';
import { AdmissionsRoutingModule } from './admissions-routing.module';
import { AdmissionsComponent } from './admissions.component';
import { PricingComponent } from './pricing/pricing.component';
import { ProcessComponent } from './process/process.component';
import { ApplyComponent } from './apply/apply.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    AppMaterialModule,
    SharedModule,
    MdePopoverModule,
    AdmissionsRoutingModule
  ],
  declarations: [
    AdmissionsComponent,
    PricingComponent,
    ProcessComponent,
    ApplyComponent
]
})
export class AdmissionsModule { }
