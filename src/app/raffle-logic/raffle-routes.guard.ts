import {CanActivate} from "@angular/router";
import {Injectable} from "@angular/core";
import {RaffleStore} from "./raffle.store";

@Injectable()
export class CanActivateRoute implements CanActivate {

  private _store: RaffleStore;

  constructor(store: RaffleStore) {
    this._store = store;
  }

  canActivate() {
    return this._store.state.user.key !== undefined;
  }
}
