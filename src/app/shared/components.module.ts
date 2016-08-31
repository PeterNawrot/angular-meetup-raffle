import {NgModule} from "@angular/core";
import {LoaderComponent} from "./loader.component";
import {NavbarComponent} from "./navbar.component";
import {ListGroupComponent} from "./list-group.component";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  declarations: [LoaderComponent, NavbarComponent, ListGroupComponent],
  imports: [BrowserModule],
  exports     : [NavbarComponent, LoaderComponent, ListGroupComponent]
})

export class SharedComponentsModule {
}
