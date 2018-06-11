import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-template-driven-form-approach',
  templateUrl: './template-driven-form-approach.component.html',
  styleUrls: ['./template-driven-form-approach.component.css']
})
export class TemplateDrivenFormApproachComponent implements OnInit {
    @ViewChild('f') signUpForm: NgForm;
    genders: string[] = ['male', 'female'];
    user = {
        username: '',
        email: '',
        description: '',
        gender: ''
    };
    submitted: Boolean = false;
    constructor() { }

    ngOnInit() {
    }

    //  Form Section
    // onSubmit(form: NgForm) {
    //     console.log('Submited!!!');
    //     console.log(form);
    // }

    onSubmit() {
        console.log('Submited!!!');
        console.log(this.signUpForm);
        this.submitted = true;
        this.user.username = this.signUpForm.value.userData.username;
        this.user.email = this.signUpForm.value.userData.email;
        this.user.description = this.signUpForm.value.description;
        this.user.gender = this.signUpForm.value.gender;

        this.signUpForm.reset();
        // setTimeout(() => {
        //     this.signUpForm.reset();
        // }, 5000);
    }

}
