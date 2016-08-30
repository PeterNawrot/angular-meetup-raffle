import {NgModule} from "@angular/core";
import {RaffleComponent} from "./raffle.component";
import {SharedComponentsModule} from "../shared/components.module";
import {RaffleButtonsComponent} from "./raffle-buttons.component";
import {WinnerComponent} from "./winner.component";

@NgModule({
  declarations: [RaffleComponent, RaffleButtonsComponent, WinnerComponent],
  imports: [SharedComponentsModule],
  exports: [RaffleComponent]
})

export class RaffleModule {}