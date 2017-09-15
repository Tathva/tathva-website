import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss', '../.././shared/module-content.scss']
})
export class ContactUsComponent implements OnInit {

  public elevationAdmissions: string;
  public elevationInfo: string;
  public elevationJob: string;

  constructor() { }


  ngOnInit() {
  }

}
