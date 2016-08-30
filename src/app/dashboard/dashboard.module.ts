import {NgModule} from "@angular/core";
import {DashboardComponent} from './dashboard.component';
import {SharedComponentsModule} from "../shared/components.module";

@NgModule({
  declarations: [DashboardComponent],
  imports:[SharedComponentsModule],
  exports: [DashboardComponent]
})

export class DashboardModule {}
