import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcaRoutingModule } from './eca-routing.module';
import { EcaComponent } from './eca.component';

@NgModule({
  imports: [
    CommonModule,
    EcaRoutingModule
  ],
  declarations: [EcaComponent]
})
export class EcaModule { }
