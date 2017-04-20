import { Component, OnInit } from '@angular/core';
import {MeteorObservable} from "meteor-rxjs";
import template from './dashboard.component.html';
import style from './dashboard.component.scss';
@Component({
  selector: 'dashboard',
  template,
  styles: [ style ]

})

export class DashboardComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
}