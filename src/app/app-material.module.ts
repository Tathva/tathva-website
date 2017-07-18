import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {
    MdButtonModule,
    MdMenuModule,
    MdIconModule,
    MdCheckboxModule,
    MdToolbarModule,
    MdSidenavModule,
    MdListModule,
    MdCardModule
} from '@angular/material';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        MdButtonModule,
        MdCheckboxModule,
        MdIconModule,
        MdMenuModule,
        MdToolbarModule,
        MdSidenavModule,
        MdListModule,
        MdCardModule
    ],
    exports: [
        BrowserAnimationsModule,
        MdButtonModule,
        MdCheckboxModule,
        MdIconModule,
        MdMenuModule,
        MdToolbarModule,
        MdSidenavModule,
        MdListModule,
        MdCardModule
    ],
})
export class AppMaterialModule { }
