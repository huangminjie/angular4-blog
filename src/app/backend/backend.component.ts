import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as menus from '../../assets/backend_menu.json';

@Component({
    selector: 'app-backend',
    templateUrl: './backend.component.html',
    styleUrls: ['./backend.component.css']
})

export class BackendComponent implements OnInit {
    isCollapsed = false;
    menus = [];
    constructor(private router: Router) { }

    ngOnInit() {
        this.menus = <any>menus;
    }
    navigate(path) {
        this.router.navigate([path]);
    }
    logout() {
        localStorage.removeItem("currentUser");
        localStorage.removeItem("redirectUrl");
        this.router.navigate(["/backend/login"]);
    }
}