import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss', '../.././shared/module-content.scss', './material_table.scss']
})
export class PricingComponent implements OnInit {

  private fragment: string;

  public pricesOpen() {
    return this.fragment === 'prices';
  }
  public classOpen() {
    return this.fragment === 'classes';
  }

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
    console.log(this.fragment);
    // By default, the Prices accordion is open if no fragment given.
    if (this.fragment === null || this.fragment === undefined) {
      this.openAccordion('prices');
    }
  }

  openAccordion(val: string) {
    this.router.navigate([], {fragment: val});
  }

}
