import { Component, OnInit } from '@angular/core';
import {TestingServiceService} from '../../testing-service.service';

@Component({
  selector: 'app-front-server',
  templateUrl: './front-server.component.html',
  styleUrls: ['./front-server.component.css']
})
export class FrontServerComponent implements OnInit {

  constructor(public testingService: TestingServiceService) { }

  ngOnInit() {
      console.log('ngOnInit FrontServerComponent');
      setTimeout(() => {
          this.testingService.getCounter();
      }, 3000);
  }

}
