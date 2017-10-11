import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import * as menus from '../../../../assets/frontend_menu.json';

@Component({
  selector: 'app-home-nav',
  templateUrl: './home-nav.component.html',
  styleUrls: ['./home-nav.component.css']
})
export class HomeNavComponent implements OnInit {
  menus = [];
  constructor() { }

  ngOnInit() {
    this.menus = <any>menus;
  }

}
