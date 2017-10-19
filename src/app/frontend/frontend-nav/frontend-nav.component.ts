import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import * as menus from '../../../assets/frontend_menu.json';

@Component({
  selector: 'app-frontend-nav',
  templateUrl: './frontend-nav.component.html',
  styleUrls: ['./frontend-nav.component.css']
})
export class FrontendNavComponent implements OnInit {
  menus = [];
  constructor() { }

  ngOnInit() {
    this.menus = <any>menus;
  }

}
