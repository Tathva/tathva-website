import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './contact.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { EmploymentComponent } from './employment/employment.component';

const routes: Routes = [
  {
    path: '',
    component: ContactComponent,
    children: [
      {
        path: 'contact-us',
        component: ContactUsComponent
      },
      {
        path: 'employment',
        component: EmploymentComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
