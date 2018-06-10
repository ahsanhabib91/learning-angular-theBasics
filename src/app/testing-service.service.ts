import { Injectable } from '@angular/core';

@Injectable()
export class TestingServiceService {
  counter: number;
  constructor() {
      this.counter = 1;
  }

  changeCounter() {
      this.counter++;
  }

  getCounter() {
      console.log(this.counter);
  }
}
