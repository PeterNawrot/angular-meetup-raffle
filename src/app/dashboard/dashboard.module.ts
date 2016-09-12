import {NgModule} from "@angular/core";
import {DashboardComponent} from "./dashboard.component";
import {SharedComponentsModule} from "../shared/components.module";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  declarations: [DashboardComponent],
  imports     : [SharedComponentsModule, BrowserModule],
  exports     : [DashboardComponent]
})

export class DashboardModule {}
