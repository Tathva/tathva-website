import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KinderComponent } from './kinder/kinder.component';
import { PrimaryComponent } from './primary/primary.component';
import { SecondaryComponent } from './secondary/secondary.component';
import { EducationComponent } from './education.component';

const routes: Routes = [
  {
    path: '',
    component: EducationComponent,
    children: [
        {
            path: 'kindergarten',
            component: KinderComponent
        },
        {
            path: 'primary',
            component: PrimaryComponent
        },
        {
            path: 'secondary',
            component: SecondaryComponent
        },
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EducationRoutingModule { }
