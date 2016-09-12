import {Component} from "@angular/core";
import {RaffleActions} from "../raffle-logic/raffle.actions";

@Component({
  selector: 'raffle-buttons',
  template: `
      <button class="btn btn-success btn-lg" (click)="_actions.getWinner()">RAFFLE</button>      
    `
})

export class RaffleButtonsComponent {

  private _actions: RaffleActions;

  constructor(actions: RaffleActions) {
      this._actions = actions;
  }
}
