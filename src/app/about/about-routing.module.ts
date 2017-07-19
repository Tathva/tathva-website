import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { OurVisionComponent } from './our-vision/our-vision.component';

const aboutRoutes: Routes = [
    {
        path: 'about',
        component: AboutComponent,
        children: [
            {
                path: 'vision',
                component: OurVisionComponent
            },
            {
                path: 'team',
                component: OurTeamComponent
            },
            {
                path: 'contact',
                component: ContactUsComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(aboutRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AboutRoutingModule { }
