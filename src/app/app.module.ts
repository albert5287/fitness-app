import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { Store } from '../store';

// feature modules
import { AuthModule } from '../auth/auth.module';
import { HealthModule } from '../health/health.module';


// containers
import { AppComponent } from './containers/app/app.component';

// components
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppNavComponent } from './components/app-nav/app-nav.component';
import { MealsComponent } from '../health/meals/containers/meals/meals.component'; //should not be here if i'm lazy loading


// routes
export const ROUTES: Routes = [];

@NgModule({
  imports:      [ 
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    AuthModule,
    HealthModule
  ],
  declarations: [ 
    AppComponent, 
    AppHeaderComponent,
    AppNavComponent,
    MealsComponent
  ],
   providers: [
    Store
  ],
  bootstrap:    [ 
    AppComponent
  ]
})
export class AppModule { }
