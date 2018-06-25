import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppMaterialModule } from './../app-material.module';

import { SharedModule } from '.././shared/shared.module';
import { SummerSchoolRoutingModule } from './summer-school-routing.module';
import { SummerSchoolComponent } from './summer-school.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    AppMaterialModule,
    SharedModule,
    SummerSchoolRoutingModule
  ],
  declarations: [SummerSchoolComponent]
})
export class SummerSchoolModule {}
