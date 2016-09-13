import {createStore, applyMiddleware, compose} from "redux";
import {RaffleReducer} from './raffle.reducer';
import {Injectable} from "@angular/core";
import {MeetupApi} from "./raffle.middlware";

@Injectable()
export class RaffleStore {

  private _store;

  constructor(api: MeetupApi) {
    //noinspection TypeScriptUnresolvedVariable,TypeScriptUnresolvedFunction
    this._store = createStore(RaffleReducer.reduce,
        compose(
        applyMiddleware(api.middleware),
        // window.devToolsExtension && window.devToolsExtension()
        ))
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
