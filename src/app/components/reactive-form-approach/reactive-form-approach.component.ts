import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-reactive-form-approach',
  templateUrl: './reactive-form-approach.component.html',
  styleUrls: ['./reactive-form-approach.component.css']
})
export class ReactiveFormApproachComponent implements OnInit {
    genders: string[] = ['male', 'female'];
    signUpForm: FormGroup;

    constructor() { }

    ngOnInit() {
        this.signUpForm = new FormGroup({
            'username': new FormControl(null),
            'email': new FormControl(null),
            'gender': new FormControl('male')
        });
    }

}
