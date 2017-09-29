
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PrincipalPage } from '../pages/principal/principal';
import { SignupPage } from '../pages/signup/signup';
import { ListaPageModule } from '../pages/lista/lista.module';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AuthProvider } from '../providers/auth/auth';
import { ListaProvider } from '../providers/lista/lista';

export const firebaseConfig = {
  apiKey: "AIzaSyCMYk6qGz7MXbgvYjJ06KyZrfRsUNrGafQ",
  authDomain: "sgapi-1b50c.firebaseapp.com",
  databaseURL: "https://sgapi-1b50c.firebaseio.com",
  projectId: "sgapi-1b50c",
  storageBucket: "sgapi-1b50c.appspot.com",
  messagingSenderId: "889232735670"
  };

  @NgModule({
    declarations: [
      MyApp,
      HomePage,
      SignupPage,
      ResetPasswordPage,
      PrincipalPage
    ],
    imports: [
      BrowserModule,
      IonicModule.forRoot(MyApp),
      AngularFireAuthModule,
      AngularFireDatabaseModule,
      AngularFireModule.initializeApp(firebaseConfig),
      ListaPageModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
      MyApp,
      HomePage,
      SignupPage,
      ResetPasswordPage,
      PrincipalPage
    ],
    providers: [
      StatusBar,
      SplashScreen,
      {provide: ErrorHandler, useClass: IonicErrorHandler},
      AuthProvider,
      ListaProvider
    ]
  })
  export class AppModule {}