import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {DashboardModule} from "../dashboard/dashboard.module";
import {LoginModule} from "../login/login.module";
import {RaffleModule} from "../raffle/raffle.module";
import {SharedComponentModule} from "../shared/shared-components.module";

@NgModule({
  declarations: [AppComponent],
  imports     : [
    BrowserModule,
    DashboardModule,
    LoginModule,
    RaffleModule,
    SharedComponentModule,
  ],
  bootstrap   : [AppComponent]
})

export class AppModule {
}