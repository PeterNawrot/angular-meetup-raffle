import {createStore, applyMiddleware} from "redux";
import {RaffleReducer} from './raffle.reducer';
import {Injectable} from "@angular/core";
import {MeetupApi} from "./raffle.middlware";

@Injectable()
export class RaffleStore {

  private _store;

  constructor(api: MeetupApi) {
    this._store = createStore(RaffleReducer.reduce, applyMiddleware(api.middleware))
  }

  get state(){
    return this._store.getState();
  }

  dispatch(action){
    this._store.dispatch(action)
  }

  subscribe(cb){
    return this._store.subscribe(cb)
  }
}
