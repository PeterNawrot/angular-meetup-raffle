import {Component} from '@angular/core';

@Component({
  selector   : 'app',
  templateUrl: `
    <navbar></navbar>
    <!--<loader></loader>-->
    <router-outlet></router-outlet>
  `,
})

export class AppComponent {}
