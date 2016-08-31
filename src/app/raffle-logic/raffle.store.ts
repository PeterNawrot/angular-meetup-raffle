import {createStore} from "redux";
import {RaffleReducer} from './raffle.reducer';
import {Injectable} from "@angular/core";

@Injectable()
export class RaffleStore {

  private _store;

  constructor(reducer: RaffleReducer) {
    this._store = createStore(RaffleReducer.reduce)
  }

  get state(){
    return this._store.getState();
  }

}