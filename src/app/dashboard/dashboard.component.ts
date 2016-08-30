import {Component} from "@angular/core";

@Component({
  selector: 'dashboard',
  template: `
    <div class="container">      
      <div class="col-md-6">
        <list-group title="Groups"></list-group>        
      </div>
      
      <div class="col-md-6">
        <list-group title="Events"></list-group>
      </div>      
    </div>
   `
})

export class DashboardComponent {}