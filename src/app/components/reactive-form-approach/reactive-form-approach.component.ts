import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactive-form-approach',
  templateUrl: './reactive-form-approach.component.html',
  styleUrls: ['./reactive-form-approach.component.css']
})
export class ReactiveFormApproachComponent implements OnInit {
    genders: string[] = ['male', 'female'];
    constructor() { }

    ngOnInit() {
    }

}
