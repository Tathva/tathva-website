import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {
    MdButtonModule,
    MdMenuModule,
    MdIconModule,
    MdToolbarModule,
    MdSidenavModule,
    MdListModule,
    MdCardModule,
    MdTabsModule,
    MdTableModule
} from '@angular/material';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        MdButtonModule,
        MdIconModule,
        MdMenuModule,
        MdToolbarModule,
        MdSidenavModule,
        MdListModule,
        MdCardModule,
        MdTabsModule,
        MdTableModule
    ],
    exports: [
        BrowserAnimationsModule,
        MdButtonModule,
        MdIconModule,
        MdMenuModule,
        MdToolbarModule,
        MdSidenavModule,
        MdListModule,
        MdCardModule,
        MdTabsModule,
        MdTableModule
    ],
})
export class AppMaterialModule { }
