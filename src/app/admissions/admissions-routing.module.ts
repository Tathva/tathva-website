import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplyComponent } from './apply/apply.component';
import { ProcessComponent } from './process/process.component';
import { PricingComponent } from './pricing/pricing.component';
import { AdmissionsComponent } from './admissions.component';

const routes: Routes = [
  {
    path: 'admissions',
    component: AdmissionsComponent,
    children: [
      {
        path: 'pricing',
        component: PricingComponent
      },
      {
        path: 'process',
        component: ProcessComponent
      },
      {
        path: 'apply',
        component: ApplyComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmissionsRoutingModule { }
