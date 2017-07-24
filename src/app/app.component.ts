import { Component } from '@angular/core';

interface Link {
  url: string,
  name: string
}

interface LinkGroup {
  title: string,
  links: Link[]
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  nav_groups: LinkGroup[] = [
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
      ]
    },
    {
      title: 'Education',
      links: [
        {
          url: '/education/kindergarten',
          name: 'Kindergarten'
        },
        {
          url: '/education/primary',
          name: 'Primary'
        },
        {
          url: '/education/secondary',
          name: 'Secondary & IGCSE'
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
        {
          url: '/admissions/apply',
          name: 'Apply for Admission'
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
    {
      title: 'Contact',
      links: [
        {
          url: '/contact/contact-us',
          name: 'Contact & Access'
        },
        {
          url: '/contact/employment',
          name: 'Employment'
        },
      ]
    }
  ];

  public isOpen = false;

  constructor() {
  };

  public onOpen() {
    this.isOpen = true;
  }

  public onClose() {
    this.isOpen = false;
  }
}
