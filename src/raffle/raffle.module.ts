import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RaffleComponent} from "./raffle.component";
import {SharedComponentModule} from "../shared/shared-components.module";
import {WinnerComponent} from "./winner.component";


@NgModule({
  declarations: [RaffleComponent, WinnerComponent],
  imports     : [BrowserModule, SharedComponentModule],
  exports     : [RaffleComponent],
})

export class RaffleModule {
}