import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppMaterialModule } from './../app-material.module';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { ParallaxScrollModule } from 'ng2-parallaxscroll';

import { SharedModule } from '.././shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        AppMaterialModule,
        SwiperModule,
        Ng2CarouselamosModule,
        ParallaxScrollModule,
        SharedModule,
        HomeRoutingModule
    ],
    declarations: [
        HomeComponent
    ]
})
export class HomeModule { }
