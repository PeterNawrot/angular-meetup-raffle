import {RaffleReducer} from "./raffle.reducer";
import {RaffleStore} from './raffle.store';
import {RaffleActions} from './raffle.actions';
import {NgModule} from "@angular/core";
import {MeetupApi} from "./raffle.middlware";


@NgModule({
  providers:[RaffleStore, RaffleReducer, RaffleActions, MeetupApi]
})


export class RaffleProviders {}