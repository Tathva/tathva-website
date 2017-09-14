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
    MdExpansionModule
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
        MdExpansionModule
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
        MdExpansionModule
    ],
})
export class AppMaterialModule { }
