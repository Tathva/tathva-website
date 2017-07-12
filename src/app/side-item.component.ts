import {Component, Input} from '@angular/core';


@Component({
  selector: 'app-sidebar-item',
  templateUrl: 'side-item.component.html'
})
export class SideItemComponent {
  @Input() item: any;

}
