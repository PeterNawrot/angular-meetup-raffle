
import {Component} from "@angular/core";

@Component({
  selector: 'login',
  template: `<h1>{{ title }}</h1>`
})

export class LoginComponent {
  private title: string = "login";

}