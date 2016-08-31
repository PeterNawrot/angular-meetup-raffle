import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {ROUTES} from "./app.routes";
import {AppComponent} from "./app.component";
import {DashboardModule} from "../dashboard/dashboard.module";
import {RaffleModule} from "../raffle/raffle.module";
import {SharedComponentsModule} from "../shared/components.module";
import {LoginModule} from "../login/login.module";
import {RaffleProviders} from '../raffle-logic/raffle-providers.module';


@NgModule({
  declarations: [AppComponent],
  imports     : [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedComponentsModule,
    DashboardModule,
    RaffleModule,
    LoginModule,
    RaffleProviders,
    RouterModule.forRoot(ROUTES)],

  bootstrap   : [AppComponent]
})

export class AppModule {}


