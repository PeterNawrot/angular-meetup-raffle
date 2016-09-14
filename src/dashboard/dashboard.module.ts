import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {DashboardComponent} from "./dashboard.component";
import {SharedComponentModule} from "../shared/shared-components.module";

@NgModule({
  declarations: [DashboardComponent],
  imports     : [BrowserModule, SharedComponentModule],
  exports: [DashboardComponent],
})

export class DashboardModule {}