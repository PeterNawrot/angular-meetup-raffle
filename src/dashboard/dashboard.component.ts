
import {Component} from "@angular/core";

@Component({
  selector: 'dashboard',
  template: `
    <h2>groups</h2> 
    <list-group></list-group>
    
    <h2>event</h2>
    <list-group></list-group>
`
})

export class DashboardComponent {
  private title: string = "dashboard";

}