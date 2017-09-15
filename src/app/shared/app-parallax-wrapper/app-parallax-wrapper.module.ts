import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParallaxDirective } from './app-parallax-wrapper.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ParallaxDirective],
  exports: [ParallaxDirective]
})
export class ParallaxModule { }
