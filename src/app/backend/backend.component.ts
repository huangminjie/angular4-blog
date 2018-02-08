import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as backend_menu from '../../assets/backend_menu.json';
import { isArray } from 'util';

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
        this.menus = (<any>backend_menu);
        this.initBreadcrumb(this.router.url);
        this.menus.forEach((menu) => {
            if (this.breadcrumbs.indexOf(menu.name) !== -1) {
                menu.open = true;
                if (Array.isArray(menu.subMenus)) {
                    for (let subMenu of menu.subMenus) {
                        if (this.breadcrumbs.indexOf(subMenu.name) !== -1) {
                            subMenu.selected = true;
                            return;
                        }
                    }
                }
            }
        });
    }
    navigate(path: string) {
        this.initBreadcrumb(path);
        this.router.navigate([path]);
    }
    logout() {
        localStorage.removeItem("currentUser");
        localStorage.removeItem("redirectUrl");
        this.router.navigate(["/backend/login"]);
    }
    initBreadcrumb(path) {
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
    }
}