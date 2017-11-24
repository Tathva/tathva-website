import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatTabsModule,
    MatExpansionModule
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatCardModule,
        MatTabsModule,
        MatExpansionModule
    ],
    exports: [
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatCardModule,
        MatTabsModule,
        MatExpansionModule
    ],
})
export class AppMaterialModule { }
