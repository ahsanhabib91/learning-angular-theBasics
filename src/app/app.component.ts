import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {NgForm} from '@angular/forms';

//  @Component decorator makes AppComponent class into an Angular Component

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
    title = 'APP';
    @ViewChild('f') signUpForm: NgForm;
    genders: string[] = ['male', 'female'];
    user = {
        username: '',
        email: '',
        description: '',
        gender: ''
    };
    submitted: Boolean = false;
    ngOnInit() {
    this.getHello();
    this.sayHello('Assalamualaikum').then(data => {
      console.log(data);
    })
    .catch(error => {
        console.log(error);
    });
    }

    sayHello(greeting: String) {
        return new Promise(((resolve, reject) =>  {
          setTimeout(() => {
            const value = false;
            value ? resolve(`${greeting} ............`) : reject('error..............');
          }, 3000);
        }));
    }

    async getHello() {
        try {
        const greeting = await this.sayHello('Walaikumsalam');
          console.log(greeting);
        } catch (e) {
          console.log(e);
        }
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
    }
}
