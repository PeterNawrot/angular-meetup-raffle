import {Component} from "@angular/core";

@Component({
  selector   : 'login',
  styles: ['input {height: 60px; font-size: 30px}'],
  templateUrl: `
    <div class="container">
        <div class="col-md-4 col-md-offset-4">
          <input type="text"
                 class="form-control input-lg"                 
                 placeholder="Your API key..."
                 autofocus> 
       </div>                    
    </div> 
    `
})

export class LoginComponent {}