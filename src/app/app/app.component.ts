import {Component} from "@angular/core";
import {RaffleStore} from "../raffle-logic/raffle.store";

@Component({
  selector   : 'app',
  templateUrl: `
    <navbar></navbar>
    <loader *ngIf="store.state.pending"></loader>
    <router-outlet></router-outlet>
  `,
})

export class AppComponent {
  constructor(private store: RaffleStore) {}
}
