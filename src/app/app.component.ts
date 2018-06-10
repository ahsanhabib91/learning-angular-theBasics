import {Component, OnInit} from '@angular/core';

//  @Component decorator makes AppComponent class into an Angular Component

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
    title = 'APP';
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
}
