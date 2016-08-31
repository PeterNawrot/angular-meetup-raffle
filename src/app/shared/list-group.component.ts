import {Component, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'list-group',
  inputs  : ['title', 'items'],
  template: `
      <h2 class="page-header">{{ title }}</h2>
      <div class="list-group">
              
        <a *ngFor="let item of items" (click)="itemClicked.emit(item)" class="list-group-item">
          <h4 class="list-group-item-heading">{{item.name || item.member.name}}</h4>     
        </a>
        
      </div>
     `
})

export class ListGroupComponent {

  @Output() itemClicked:EventEmitter<any>;

  constructor() {
    this.itemClicked = new EventEmitter();
  }

}