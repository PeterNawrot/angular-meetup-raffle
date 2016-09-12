import {RaffleReducer} from "./raffle.reducer";
import {RaffleStore} from './raffle.store';
import {RaffleActions} from './raffle.actions';
import {NgModule} from "@angular/core";
import {CanActivateRoute} from './raffle-routes.guard';

import {MeetupApi} from "./raffle.middlware";


@NgModule({
  providers:[
      RaffleStore,
      RaffleReducer,
      RaffleActions,
      CanActivateRoute,
      MeetupApi
  ]
})

export class RaffleProviders {}
