import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import 'hammerjs';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuItemComponent } from './menu-item.component';
import { SideItemComponent } from './side-item.component';

import { AppRoutingModule } from './app-routing.module';
import { AboutModule } from './about/about.module';
import { AppMaterialModule } from './app-material.module';

const SWIPER_CONFIG: SwiperConfigInterface = {
    scrollbar: null,
    direction: 'horizontal',
    slidesPerView: 1,
    scrollbarHide: false,
    keyboardControl: true,
    mousewheelControl: true,
    scrollbarDraggable: true,
    scrollbarSnapOnRelease: true,
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    autoplay: 5000,
    loop: true
};


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
    SwiperModule.forRoot(SWIPER_CONFIG),
    AboutModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
