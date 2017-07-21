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
  styleUrls: ['./app.component.css', './app.component.scss']
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
        {
          url: '/admissions/apply',
          name: 'Apply for Admission'
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

  public isOpen = false;

  public onOpen() {
    this.isOpen = true;
  }

  public onClose() {
    this.isOpen = false;
  }
}
