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
    breadcrumbs: string[] = [];
    constructor(private router: Router) { }

    ngOnInit() {
        this.menus = <any>menus;
    }
    navigate(path: string) {
        this.breadcrumbs = [];
        for (let menu of this.menus) {
            if (Array.isArray(menu.subMenus)) {
                for (let subMenu of menu.subMenus) {
                    if (subMenu.path === path) {
                        this.breadcrumbs.push(menu.name);
                        this.breadcrumbs.push(subMenu.name);
                        break;
                    }
                }
            }
        }
        this.router.navigate([path]);
    }
    logout() {
        localStorage.removeItem("currentUser");
        localStorage.removeItem("redirectUrl");
        this.router.navigate(["/backend/login"]);
    }
}