import {Component, OnInit} from "@angular/core";
import {RaffleActions} from "../raffle-logic/raffle.actions";
import {RaffleStore} from "../raffle-logic/raffle.store";
import {Router} from "@angular/router";

@Component({
  selector: 'dashboard',
  template: `
    <div class="container" *ngIf="!_store.state.pending">      
      <div class="col-md-6">
        <list-group title="Groups" 
                    [items]="_store.state.groups" 
                    (itemClicked)="_actions.getEvents($event)"></list-group>        
      </div>
      
      <div class="col-md-6">
        <list-group title="Events" 
                    [items]="_store.state.events" 
                    (itemClicked)="_actions.getMembers($event)"></list-group>
      </div>      
    </div>
   `
})

export class DashboardComponent implements OnInit {

  private _actions:RaffleActions;
  private _store:RaffleStore;
  private _router:Router;

  constructor(actions:RaffleActions, store:RaffleStore, router:Router) {
    this._actions = actions;
    this._store   = store;
    this._router  = router;
  }

  ngOnInit() {
    this._actions.getGroups();

    this._store.subscribe(()=> {
      if (this._store.state.members.length > 0) {
        this._router.navigate(['/raffle'])
      }
    })

  }
}

