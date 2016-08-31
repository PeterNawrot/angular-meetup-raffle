import {Injectable} from "@angular/core";
import {RaffleActions} from "./raffle.actions";

const RaffleAppState = {
  pending: false,
  user: {},
  groups: [],
  events: [],
  members: [],
  winner: ''
};


@Injectable()
export class RaffleReducer {

  static reduce(state = RaffleAppState, action) {

    switch (action.type) {
      case RaffleActions.PENDING_FOR_DATA:
        return Object.assign({}, state, { pending: true });

      case RaffleActions.SET_USER:
        return Object.assign({}, state, { user: action.payload, pending: false });

      case RaffleActions.SET_GROUPS:
        return Object.assign({}, state, { groups: action.payload, pending: false  });

      case RaffleActions.SET_EVENTS:
        return Object.assign({}, state, { events: action.payload, pending: false  });

      case RaffleActions.SET_MEMBERS:
        console.log(action.payload);
        return Object.assign({}, state, { members: action.payload, pending: false  });

      case RaffleActions.SET_WINNER:
        break;

      default:
        return state;

    }
  }
}

