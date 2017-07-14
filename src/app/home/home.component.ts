import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperDirective, SwiperConfigInterface } from 'ngx-swiper-wrapper';

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
    autoplay: 5000,
    autoplayDisableOnInteraction: false
  };

  constructor() { }

  ngOnInit() {
  }

  onIndexChange(index: number) {
    console.log('Swiper index: ' + index);
  }
}
