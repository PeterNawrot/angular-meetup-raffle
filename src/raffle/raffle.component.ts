
import {Component} from "@angular/core";

@Component({
  selector: 'raffle',
  template: `
    <list-group></list-group>
    <winner></winner>
   `
})

export class RaffleComponent {
  private title: string = "raffle";

}