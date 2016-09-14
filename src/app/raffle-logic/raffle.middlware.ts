import {Injectable} from "@angular/core";
import {RaffleActions} from "./raffle.actions";
import {Http, URLSearchParams} from "@angular/http";

@Injectable()
export class MeetupApi {

  private http:Http;
  private API_KRY:string;
  private BASE_URL:string;

  constructor(_http:Http) {
    this.http     = _http;
    this.API_KRY  = '';
    this.BASE_URL = 'http://localhost:3001/';
    // this.BASE_URL = 'https://crossorigin.me/https://api.meetup.com/2/';
  }

  public middleware = store => next => action => {
    let user;

    switch (action.type) {
      case RaffleActions.GET_USER:
        this.getUser(action.payload, next);
        break;

      case RaffleActions.GET_GROUPS:
        user = store.getState().user;
        this.getGroups(user.key, user.user.id, next);
        break;

      case RaffleActions.GET_EVENTS:
        user = store.getState().user;
        this.getEvents(user.key, action.payload, next);
        break;

      case RaffleActions.GET_MEMBERS:
        user = store.getState().user;
        this.getMembers(user.key, action.payload, next);
        break;

      case RaffleActions.GET_WINNER:
        this.getWinner(store.getState().members, next);
        break;

      default:
        next(action)
    }

    next({type: RaffleActions.PENDING_FOR_DATA});
  };

  private getUser(key, next) {

    let search:URLSearchParams = new URLSearchParams();

    search.set('member_id', 'self');
    search.set('key', key);
    search.set('only', 'id,name');
    search.set('sign', 'true');


    this.http.get(`${this.BASE_URL}members`, {search})
        .subscribe((users:any) => next({
          type   : RaffleActions.SET_USER,
          payload: {user: users.json().results[0], key: key}
        }));
  }

  private getGroups(apiKey, userId, next) {

    let params:URLSearchParams = new URLSearchParams();

    params.set('member_id', 'self');
    params.set('key', apiKey);
    params.set('organizer_id', userId);
    params.set('only', 'id,name');
    params.set('sign', 'true');

    this.http.get(`${this.BASE_URL}groups`, {search: params})
        .subscribe((groups:any) => next({
          type   : RaffleActions.SET_GROUPS,
          payload: groups.json().results
        }));
  }

  private getEvents(apiKey, groupId, next) {
    let params:URLSearchParams = new URLSearchParams();

    params.set('key', apiKey);
    params.set('group_id', groupId);
    params.set('only', 'id,name');
    params.set('status', 'upcoming,past');
    params.set('sign', 'true');


    this.http.get(`${this.BASE_URL}events`, {search: params})
        .subscribe((events:any) => next({
          type   : RaffleActions.SET_EVENTS,
          payload: events.json().results
        }));
  }

  private getMembers(apiKey, eventId, next) {
    let params:URLSearchParams = new URLSearchParams();

    params.set('key', apiKey);
    params.set('event_id', eventId);
    params.set('rsvp', 'yes');
    params.set('sign', 'true');

    this.http.get(`${this.BASE_URL}rsvps`, {search: params})
        .subscribe((members:any) => next({
          type   : RaffleActions.SET_MEMBERS,
          payload: members.json().results
        }));
  }

  private getWinner(members, next) {
    let counter = 0;

    let stop = setInterval(() => {

      next({
        type   : RaffleActions.SET_WINNER,
        payload: members[counter].member.name
      });

      counter += 1;

      if (counter >= members.length) {
        counter = 0;
      }
    }, 100);

    //noinspection TypeScriptUnresolvedFunction
    setTimeout(() => clearInterval(stop), Math.floor(Math.random() * 13652));

  }
}
