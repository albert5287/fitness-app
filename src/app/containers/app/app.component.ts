import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  styleUrls: [ './app.component.css' ],
  template: `
    <div>
      Hello !!!
      <div class="wrapper">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
})
export class AppComponent  {
  name = 'Angular';
}
