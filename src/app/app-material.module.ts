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
    MdListModule
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
        MdListModule
    ],
    exports: [
        BrowserAnimationsModule,
        MdButtonModule,
        MdCheckboxModule,
        MdIconModule,
        MdMenuModule,
        MdToolbarModule,
        MdSidenavModule,
        MdListModule
    ],
})
export class AppMaterialModule { }
