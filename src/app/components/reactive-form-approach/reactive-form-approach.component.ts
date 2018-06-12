import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

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
            'userData': new FormGroup({
                'username': new FormControl(null, Validators.required),
                'email': new FormControl(null, [Validators.required, Validators.email]),
            }),
            'description': new FormControl(null, Validators.required),
            'hobbies': new FormArray([]),
            'gender': new FormControl('male')
        });
    }

    onSubmit() {
        console.log(this.signUpForm);
    }

    addHobby() {
        const control = new FormControl(null, Validators.required);
        (<FormArray>this.signUpForm.get('hobbies')).push(control);
        console.log('Testing Commit');
    }

}
