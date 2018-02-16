import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from './../app-material.module';

import { CalendarCardComponent } from './calendar-card/calendar-card.component';

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        AppMaterialModule
    ],
    declarations: [
        CalendarCardComponent
    ],
    exports: [
        CalendarCardComponent
    ]
})
export class SharedModule { }
