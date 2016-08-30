import { Component } from '@angular/core';

@Component({
    selector: 'list-group',
    inputs: ['title'],
    template: `
      <h2 class="page-header">{{ title }}</h2>
      <div class="list-group">
      
        <a href="#" class="list-group-item active">
          <h4 class="list-group-item-heading">List group item heading</h4>     
        </a>
        
        <a href="#" class="list-group-item">
          <h4 class="list-group-item-heading">List group item heading</h4>     
        </a>
        
      </div>
     `
})

export class ListGroupComponent  {

    constructor() {
        console.log('list group component');
    }

}