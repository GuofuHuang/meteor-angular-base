import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule, MdInputModule } from '@angular/material';
import { AccountsModule } from 'angular2-meteor-accounts-ui';
import { routes, ROUTES_PROVIDERS } from './app.routes';


import { LOGIN_DECLARATIONS } from '../components/login';
import { DASHBOARD_DECLARATIONS } from '../pages/dashboard';
import { SIGNUP_DECLARATIONS } from '../components/signup';

@NgModule({
  // Modules
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(routes),
    AccountsModule,
    FormsModule,
    ReactiveFormsModule,
    MdInputModule
  ],
  entryComponents: [
    DASHBOARD_DECLARATIONS,
  ],
  // Components, Pipes, Directive
  declarations: [
    AppComponent,
    LOGIN_DECLARATIONS,
    SIGNUP_DECLARATIONS,
    DASHBOARD_DECLARATIONS,

  ],
  // Providers
  providers: [
    ...ROUTES_PROVIDERS
  ],
  // Main Component
  bootstrap: [ AppComponent ]
})
export class AppModule {}
