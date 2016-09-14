import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {NavbarComponent} from "./navbar.component";
import {ListGroupComponent} from "./list-group.component";
import {LoadingComponent} from "./loading.component";

@NgModule({
  declarations: [
    NavbarComponent,
    ListGroupComponent,
    LoadingComponent
  ],
  imports     : [BrowserModule],
  exports     : [
    NavbarComponent,
    ListGroupComponent,
    LoadingComponent
  ],
})

export class SharedComponentModule {
}