import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {ROUTES} from "./app.routes";
import {AppComponent} from "./app";
import {DashboardModule} from "./dashboard/dashboard.module";
import {RaffleModule} from "./raffle/raffle.module";
import {SharedComponentsModule} from "./shared/components.module";
import {LoginModule} from "./login/login.module";


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
    RouterModule.forRoot(ROUTES)],
  bootstrap   : [AppComponent]
})

export class AppModule {
}
