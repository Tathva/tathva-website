import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import 'hammerjs';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
// import { Parallax, ParallaxConfig  } from 'ngx-parallax';
import { ParallaxModule } from './shared/app-parallax-wrapper/app-parallax-wrapper.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuItemComponent } from './menu-item.component';
import { SideItemComponent } from './side-item.component';

import { AppMaterialModule } from './app-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AboutModule } from './about/about.module';
import { AdmissionsModule } from './admissions/admissions.module';
import { ContactModule } from './contact/contact.module';




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
    SwiperModule,
    ParallaxModule,
    AboutModule,
    AdmissionsModule,
    ContactModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
