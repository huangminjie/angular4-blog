import { Component, OnInit } from '@angular/core';

import * as menus from '../../assets/frontend_menu.json';

@Component({
    selector: 'app-frontend',
    templateUrl: './frontend.component.html',
    styleUrls: ['./frontend.component.css']
})

export class FrontendComponent implements OnInit {
    isCollapsed = false;
    menus = [];
    constructor() { }

    ngOnInit() {
        this.menus = <any>menus;
    }
}