import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let url: string = state.url;
        return this.checkLogin(url);
    }
    checkLogin(url: string): boolean {
        if (localStorage.getItem("currentUser")) {
            return true;
        }
        else {
            localStorage.setItem("redirectUrl", url);
            this.router.navigate(['/backend/login']);
            return false;
        }
    }
}