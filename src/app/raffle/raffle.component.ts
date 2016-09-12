import {Component} from "@angular/core";
import {RaffleStore} from "../raffle-logic/raffle.store";

@Component({
  selector: 'raffle',
  template: `
    <div class="container">
    
      <div class="col-md-6">
        <list-group title="Members" [items]="_store.state.members"></list-group>
      </div>
      
      <div class="col-md-6">
        
        <h2 class="page-header">Choose a winner</h2>
        <raffle-buttons class="pull-right"></raffle-buttons>
        
        <winner [name]="_store.state.winner"></winner>                
        </div>
      </div>          
  `
})

export class RaffleComponent {

  private _store: RaffleStore;

  constructor(store: RaffleStore) {
    this._store = store;
  }
}
