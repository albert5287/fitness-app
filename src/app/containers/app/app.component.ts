import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '../../../store';
import { AuthService, User } from '../../../auth/shared/services/auth/auth.service';

@Component({
  selector: 'my-app',
  styleUrls: [ './app.component.css' ],
  template: `
    <div>
      <h1>{{ user$ | json }} </h1>
      <div class="wrapper">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
})
export class AppComponent implements OnInit, OnDestroy {

  user$: User;
  subscription: Subscription;

  constructor(
    private store: Store,
    //private authService: AuthService,
  ){}

  ngOnInit(){
    console.log('hello', AuthService);
    //this.subscription = this.authService.auth$.subscribe();
   // this.user$ = this.store.select<User>('User');

    this.user$ = {
      email: 'albert@mail.com',
      uid: 'uid',
      authenticated: true
    };
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  
}
