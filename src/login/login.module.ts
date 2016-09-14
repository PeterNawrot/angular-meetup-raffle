import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {LoginComponent} from "./login.component";


@NgModule({
  declarations: [LoginComponent],
  imports     : [BrowserModule],
  exports     : [LoginComponent],
})

export class LoginModule {
}