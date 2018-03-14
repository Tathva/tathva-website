import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from './../app-material.module';

import { CalendarCardComponent } from './calendar-card/calendar-card.component';
import { LetterCardComponent } from './letter-card/letter-card.component';

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        AppMaterialModule
    ],
    declarations: [
        CalendarCardComponent,
        LetterCardComponent
],
    exports: [
        CalendarCardComponent,
        LetterCardComponent
    ]
})
export class SharedModule { }
