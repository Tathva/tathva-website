import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import 'hammerjs';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuItemComponent } from './menu-item.component';
import { SideItemComponent } from './side-item.component';

import { AppRoutingModule } from './app-routing.module';
import { AboutModule } from './about/about.module';
import { AppMaterialModule } from './app-material.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuItemComponent,
    SideItemComponent,
    HomeComponent
],
  imports: [
    BrowserModule,
    AppMaterialModule,
    FlexLayoutModule,
    AboutModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
