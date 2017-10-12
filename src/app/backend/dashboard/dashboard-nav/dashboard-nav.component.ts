import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import * as menus from '../../../../assets/backend_menu.json';

@Component({
  selector: 'app-dashboard-nav',
  templateUrl: './dashboard-nav.component.html',
  styleUrls: ['./dashboard-nav.component.css']
})
export class DashboardNavComponent implements OnInit {
  step = 1;
  menus = [];
  @Output() navigateEvent: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.menus = <any>menus;
  }
  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  navigate(path) {
    this.navigateEvent.emit(path);
  }
}
