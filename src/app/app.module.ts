import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { Store } from './store';

// feature modules
import { AuthModule } from '../auth/auth.module';

// containers
import { AppComponent } from './containers/app/app.component';

// components
import { HelloComponent } from './hello.component';

// routes
export const ROUTES: Routes = [];

@NgModule({
  imports:      [ 
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    AuthModule
  ],
  declarations: [ 
    AppComponent, 
    HelloComponent 
  ],
   providers: [
    Store
  ],
  bootstrap:    [ 
    AppComponent
  ]
})
export class AppModule { }
