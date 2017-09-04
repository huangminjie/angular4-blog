import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Paths } from '../path';

@Injectable()
export class LoginService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    constructor(private http: Http) { }

    login(user) {
        this.http.post(Paths.Admin_Login, JSON.stringify(user), { headers: this.headers }).toPromise();
    }
}