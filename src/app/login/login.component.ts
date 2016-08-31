import {Component, OnInit} from "@angular/core";
import {RaffleActions} from "../raffle-logic/raffle.actions";
import {RaffleStore} from "../raffle-logic/raffle.store";
import {Router} from "@angular/router";

@Component({
  selector   : 'login',
  styles     : ['input {height: 60px; font-size: 30px}'],
  templateUrl: `
    <div class="container" *ngIf="!_store.state.pending">
        <div class="col-md-4 col-md-offset-4">
          <input type="text"
                 #apiKey
                 value="655742536f5b50716ce185634761065"
                 class="form-control input-lg"                 
                 placeholder="Your API key..."
                 (keydown.enter)="_actions.getUser(apiKey.value)"
                 autofocus> 
       </div>                    
    </div> 
    `
})

export class LoginComponent implements OnInit {

  private _actions:RaffleActions;
  private _store:RaffleStore;
  private _router:Router;

  constructor(actions:RaffleActions, store:RaffleStore, router:Router) {
    this._actions = actions;
    this._store   = store;
    this._router  = router;
  }

  ngOnInit() {
    this._store.subscribe(()=>{
      if(this._store.state.user.key) {
        this._router.navigate(['/dashboard'])
      }
    })
  }
}
