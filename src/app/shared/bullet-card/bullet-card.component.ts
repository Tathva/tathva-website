import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bullet-card',
  templateUrl: './bullet-card.component.html',
  styleUrls: ['./bullet-card.component.scss']
})
export class BulletCardComponent {
  @Input() text: string;

  constructor() { }

}
