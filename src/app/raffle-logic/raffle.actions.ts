import {Injectable} from "@angular/core";
import {RaffleStore} from "./raffle.store";

@Injectable()
export class RaffleActions {

  static GET_USER    = 'GET_USER';
  static GET_GROUPS  = 'GET_GROUPS';
  static GET_EVENTS  = 'GET_EVENTS';
  static GET_MEMBERS = 'GET_MEMBERS';
  static GET_WINNER  = 'GET_WINNER';

  static PENDING_FOR_DATA = 'PENDING_FOR_DATA';
  static SET_USER         = 'SET_USER';
  static SET_GROUPS       = 'SET_GROUPS';
  static SET_EVENTS       = 'SET_EVENTS';
  static SET_MEMBERS      = 'SET_MEMBERS';
  static SET_WINNER       = 'SET_WINNER';

  constructor(private store:RaffleStore) {}

  getUser(apiKey) {
    this.store.dispatch({
      type   : RaffleActions.GET_USER,
      payload: apiKey
    })
  }

  getGroups() {
    this.store.dispatch({
      type   : RaffleActions.GET_GROUPS
    })
  }

  getEvents(group) {
    this.store.dispatch({
      type   : RaffleActions.GET_EVENTS,
      payload: group.id
    })
  }

  getMembers(event) {
    this.store.dispatch({
      type   : RaffleActions.GET_MEMBERS,
      payload: event.id
    })
  }

  getWinner() {
    this.store.dispatch({
      type: RaffleActions.GET_WINNER,
    })
  }
}
