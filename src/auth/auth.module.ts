import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//third-party modules
import { AngularFireModule, FirebaseAppConfig } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';

//shared modules
import { SharedModule } from './shared/shared.module'

export const ROUTES: Routes = [
  {
    path: 'auth',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'login' },
      { path: 'login', loadChildren: './login/login.module#LoginModule' },
      { path: 'register', loadChildren: './register/register.module#RegisterModule' },
    ]
  }
];

export const firebaseConfig : FirebaseAppConfig = {
  apiKey: "AIzaSyCSxV6jooSLNkx79vmWRVQXLzzgPSergps",
  authDomain: "fitness-app-f3640.firebaseapp.com",
  databaseURL: "https://fitness-app-f3640.firebaseio.com",
  projectId: "fitness-app-f3640",
  storageBucket: "fitness-app-f3640.appspot.com",
  messagingSenderId: "329087911041",
  appId: "1:329087911041:web:94cc2766e01e5e6f"
};

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    SharedModule.forRoot()
  ]
})
export class AuthModule {}