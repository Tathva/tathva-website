import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './app.component.scss']
})
export class AppComponent {

  nav_links = [
    {
      title: 'About Us',
      links: [
        {
          url: '/about/vision',
          name: 'Our Vision'
        },
        {
          url: '/about/team',
          name: 'Our Team'
        },
        {
          url: '/about/contact',
          name: 'Contact Us'
        },
      ]
    },
    {
      title: 'Admissions',
      links: [
        {
          url: '/admissions/pricing',
          name: 'Pricing & Fees'
        },
        {
          url: '/admissions/process',
          name: 'Our Process'
        },
      ]
    },
    {
      title: 'Education',
      links: [
        {
          url: '/education/kindergarten',
          name: 'Kindergarten & IPC'
        },
        {
          url: '/education/cambridge',
          name: 'Cambridge International'
        },
        {
          url: '/education/igcse',
          name: 'IGCSE'
        },
      ]
    },
    {
      title: 'Extracurricular',
      links: [
        {
          url: '/eca/clubs',
          name: 'Our Clubs'
        },
        {
          url: '/eca/sof',
          name: 'Science Olympiad Foundation'
        },
        {
          url: '/eca/spelling',
          name: 'Japan National Spelling Bee'
        },
        {
          url: '/eca/chess',
          name: 'Japan National Chess'
        },
      ]
    },
  ];

}
