import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Parallax } from './app-parallax-wrapper.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Parallax],
  exports: [Parallax]
})
export class ParallaxModule { }
