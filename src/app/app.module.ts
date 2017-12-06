import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

import 'hammerjs';

import { AppComponent } from './app.component';
import { MenuItemComponent } from './menu-item.component';
import { SideItemComponent } from './side-item.component';

import { SharedModule } from './shared/shared.module';
import { AppMaterialModule } from './app-material.module';
import { AppRoutingModule } from './app-routing.module';

import { CalendarService } from './services/calendar.service';




@NgModule({
  declarations: [
    AppComponent,
    MenuItemComponent,
    SideItemComponent
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [CalendarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
