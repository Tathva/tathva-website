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
