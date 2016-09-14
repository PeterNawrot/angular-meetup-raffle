
import {Component} from "@angular/core";

@Component({
  selector: 'app',
  template: `
  <h1>{{ title }}</h1>
  <dashboard></dashboard>
  <login></login>
  <raffle></raffle>
`
})

export class AppComponent {

  private title: string = "Hello Angular";

}