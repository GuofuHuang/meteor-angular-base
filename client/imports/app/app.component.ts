import { Component, OnInit } from '@angular/core';
import template from './app.component.html';
import style from './app.component.scss';
import { InjectUser } from 'angular2-meteor-accounts-ui';
import { Observable } from 'rxjs/Observable';

import { Router } from '@angular/router';

@Component({
  selector: 'app',
  template,
  styles: [ style ]
})

@InjectUser('user')
export class AppComponent implements OnInit{
  parties: Observable<any[]>;
  isLogin: boolean = false;

  constructor(private router: Router) {

  }

  logout() {
    Meteor.logout();
  }

  ngOnInit() {
    if (Meteor.userId()) {
      this.isLogin = true;
    } else {
      console.log('not login')
      this.isLogin = false;
    }

    if (!Meteor.userId()) {
      this.router.navigate(['/login']);
    }
  }

}
