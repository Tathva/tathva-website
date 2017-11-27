import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { IParallaxScrollConfig } from 'ng2-parallaxscroll';
import { CalendarService } from '.././services/calendar.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './home.component.scss']
})
export class HomeComponent implements OnInit {

  public config: SwiperConfigInterface = {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    loop: true,
    autoplay: 3000,
    autoplayDisableOnInteraction: false,
  };

  public calConfig: SwiperConfigInterface = {
    //pagination: '.swiper-pagination',
    //paginationClickable: true,
    nextButton: '.cal-button-next',
    prevButton: '.cal-button-prev',
    wrapperClass: 'cal-wrapper',
    containerModifierClass: 'calendar-container',
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 50,
    loop: false,
    observer: true
  };

  public paraConf: IParallaxScrollConfig = {
    speed: .04,
    initialValue: -50,
    maxValue: 0,
    cssUnit: '%'
  }

  public cardParaConf: IParallaxScrollConfig = {
    speed: .2
  }

  public images = [
    '../assets/carousel/carousel_1.jpg',
    '../assets/carousel/carousel_2.jpg',
    '../assets/carousel/carousel_3.jpg',
    '../assets/carousel/carousel_4.jpg'
  ];

  calEvents: any[];

  constructor(private calService: CalendarService) { }

  ngOnInit() {
    this.calService.result.subscribe(res => this.calEvents = res);
    this.calService.getEvents();
  }

}
