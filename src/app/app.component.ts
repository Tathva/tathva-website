import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Location, PopStateEvent } from '@angular/common';

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
export class AppComponent implements OnInit {

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
          name: 'Pricing & Placement'
        },
        {
          url: '/admissions/process',
          name: 'Our Process'
        },
        // {
        //   url: '/admissions/apply',
        //   name: 'Apply for Admission'
        // },
      ]
    },
    // {
    //   title: 'School Life',
    //   links: [
    //     {
    //       url: '/life/clubs',
    //       name: 'Our Clubs'
    //     },
    //     {
    //       url: '/life/charity',
    //       name: 'Our Charities'
    //     },
    //     {
    //       url: '/life/examinations',
    //       name: 'External Examinations'
    //     },
    //     {
    //       url: '/life/national',
    //       name: 'National Competitions'
    //     },
    //   ]
    // },
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

  private lastPoppedUrl: string;
  private yScrollStack: number[] = [];

  public isOpen = false;
  public menuIcon = 'menu';

  constructor(private router: Router, private location: Location) {
  };

  ngOnInit() {
    this.location.subscribe((ev: PopStateEvent) => {
      this.lastPoppedUrl = ev.url;
    });
    this.router.events.subscribe((ev: any) => {
      if (ev instanceof NavigationStart) {
        if (ev.url !== this.lastPoppedUrl) {
          this.yScrollStack.push(window.scrollY);
        }
      } else if (ev instanceof NavigationEnd) {
        if (ev.url === this.lastPoppedUrl) {
          this.lastPoppedUrl = undefined;
          window.scrollTo(0, this.yScrollStack.pop());
        } else {
          window.scrollTo(0, 0);
        }
      }
    });
  }

  public onOpen() {
    this.isOpen = true;
    this.menuIcon = 'close';
  }

  public onClose() {
    this.isOpen = false;
    this.menuIcon = 'menu';
  }
}
