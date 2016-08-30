import {NgModule} from "@angular/core";
import {LoaderComponent} from "./loader.component";
import {NavbarComponent} from "./navbar.component";
import {ListGroupComponent} from "./list-group.component";

@NgModule({
  declarations: [ LoaderComponent, NavbarComponent, ListGroupComponent ],
  exports: [ NavbarComponent, LoaderComponent, ListGroupComponent ]
})

export class SharedComponentsModule {}
