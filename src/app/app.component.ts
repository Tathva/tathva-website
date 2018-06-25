import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef
} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { Subscription } from 'rxjs/Rx';
import 'rxjs/add/operator/filter';

interface Link {
  url: string;
  name: string;
}

interface LinkGroup {
  title: string;
  links: Link[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  routerSubscription: Subscription;
  @ViewChild('site') site: ElementRef;

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
        }
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
        }
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
        }
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
        }
      ]
    }
  ];

  public isOpen = false;
  public menuIcon = 'menu';

  constructor(public router: Router) {}

  ngOnInit() {
    if (isPlatformBrowser) {
      this.routerSubscription = this.router.events
        .filter(event => event instanceof NavigationEnd)
        .subscribe(event => {
          this.site.nativeElement.scrollIntoView();
        });
    }
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
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
