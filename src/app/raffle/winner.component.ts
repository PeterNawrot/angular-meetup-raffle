import {Component} from "@angular/core";

@Component({
  selector: 'winner',
  inputs  : ['name'],
  template: `
      <div class="well">
          <h2 class="text-primary">And the winner is:</h2>
          <h2>{{ name }}</h2>
      </div>        
    `
})

export class WinnerComponent {}