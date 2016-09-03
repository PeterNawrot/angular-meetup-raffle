import {Routes} from "@angular/router";
import {DashboardComponent} from "../dashboard/dashboard.component";
import {LoginComponent} from "../login/login.component";
import {RaffleComponent} from "../raffle/raffle.component";
import {CanActivateRoute} from "../raffle-logic/raffle-routes.guard";

export const ROUTES:Routes = [
  {path: '', redirectTo: 'login', terminal: true},
  {path: 'dashboard', component: DashboardComponent, canActivate: [CanActivateRoute]},
  {path: 'raffle', component: RaffleComponent, canActivate: [CanActivateRoute]},
  {path: 'login', component: LoginComponent},
];
