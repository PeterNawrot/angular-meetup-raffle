import {Routes} from "@angular/router";
import {DashboardComponent} from "../dashboard/dashboard.component";
import {LoginComponent} from "../login/login.component";
import {RaffleComponent} from "../raffle/raffle.component";

export const ROUTES:Routes = [
  {path: '', redirectTo: 'dashboard', terminal: true},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'raffle', component: RaffleComponent},
  {path: 'login', component: LoginComponent},
];
