import {NgModule} from "@angular/core";
import {LoginComponent} from "./login.component";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  declarations: [LoginComponent],
  imports     : [BrowserModule],
  exports     : [LoginComponent]
})

export class LoginModule {}
