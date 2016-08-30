import {Component} from "@angular/core";

@Component({
  selector: 'raffle',
  template: `
    <div class="container">
    
      <div class="col-md-6">
        <list-group title="Members"></list-group>
      </div>
      
      <div class="col-md-6">
        
        <h2 class="page-header">Choose a winner</h2>
        <raffle-buttons class="pull-right"></raffle-buttons>
        <winner name="Nir Kaufman"></winner>                
        </div>
      </div>          
  `
})

export class RaffleComponent {}