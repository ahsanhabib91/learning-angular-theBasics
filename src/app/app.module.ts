import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ServerComponent } from './components/server/server.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BasicHighlightDirective } from './directives/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './directives/better-highlight/better-highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { FrontServerComponent } from './components/front-server/front-server.component';
import {TestingServiceService} from './testing-service.service';
import { MyNewComponentComponent } from './components/my-new-component/my-new-component.component';
import { ReactiveFormApproachComponent } from './components/reactive-form-approach/reactive-form-approach.component';
import { TemplateDrivenFormApproachComponent } from './components/template-driven-form-approach/template-driven-form-approach.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    FrontServerComponent,
    MyNewComponentComponent,
    ReactiveFormApproachComponent,
    TemplateDrivenFormApproachComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, // For Template driven Form
    ReactiveFormsModule // For Reactive Form
  ],
  providers: [TestingServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
