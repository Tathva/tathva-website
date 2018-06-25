import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SummerSchoolComponent } from './summer-school.component';

const routes: Routes = [
  {
    path: '',
    component: SummerSchoolComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SummerSchoolRoutingModule {}
