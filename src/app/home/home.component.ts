import { Component } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './home.component.scss']
})
export class HomeComponent {


  public config: SwiperConfigInterface = {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    loop: true,
    autoplay: 5000,
    autoplayDisableOnInteraction: false
  };

  onIndexChange(index: number) {
    console.log('Swiper index: ' + index);
  }
}
