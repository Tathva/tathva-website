import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-summer-school',
  templateUrl: './summer-school.component.html',
  styleUrls: [
    './summer-school.component.scss',
    '.././shared/module-content.scss'
  ]
})
export class SummerSchoolComponent implements OnInit {
  public currentWindowWidth: number;

  ngOnInit(): void {
    this.currentWindowWidth = window.innerWidth;
  }

  @HostListener('window:resize')
  onResize() {
    this.currentWindowWidth = window.innerWidth;
  }

  public isMobile(): boolean {
    return this.currentWindowWidth < 950;
  }
}
