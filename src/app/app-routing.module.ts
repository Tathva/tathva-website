import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: 'app/home/home.module#HomeModule' },
  { path: 'about', loadChildren: 'app/about/about.module#AboutModule' },
  {
    path: 'admissions',
    loadChildren: 'app/admissions/admissions.module#AdmissionsModule'
  },
  { path: 'contact', loadChildren: 'app/contact/contact.module#ContactModule' },
  {
    path: 'education',
    loadChildren: 'app/education/education.module#EducationModule'
  },
  {
    path: 'summer-school',
    loadChildren: 'app/summer-school/summer-school.module#SummerSchoolModule'
  },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
