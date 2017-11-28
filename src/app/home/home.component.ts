import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { IParallaxScrollConfig } from 'ng2-parallaxscroll';
import { CalendarService } from '.././services/calendar.service';

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

  calEvents = [];
  selectedIndex = 0: number;

  constructor(private calService: CalendarService) { }

  ngOnInit() {
    this.calService.result.subscribe(res => {this.calEvents = res;
    console.log(res);
  });
    this.calService.getEvents();
  }

  nextCal() {
    console.log(this.calEvents.length);
    console.log(this.selectedIndex);
  }

}
