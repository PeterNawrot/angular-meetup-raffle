import {NgModule} from "@angular/core";
import {LoaderComponent} from "./loader.component";
import {NavbarComponent} from "./navbar.component";
import {ListGroupComponent} from "./list-group.component";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [LoaderComponent, NavbarComponent, ListGroupComponent],
  imports: [BrowserModule, RouterModule],
  exports     : [NavbarComponent, LoaderComponent, ListGroupComponent]
})

export class SharedComponentsModule {
}
