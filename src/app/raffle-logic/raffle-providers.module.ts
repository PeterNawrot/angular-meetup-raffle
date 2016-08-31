import {RaffleReducer} from "./raffle.reducer";
import {RaffleStore} from './raffle.store';
import {RaffleActions} from './raffle.actions';
import {NgModule} from "@angular/core";


@NgModule({
  providers:[RaffleStore, RaffleReducer, RaffleActions]
})


export class RaffleProviders {}