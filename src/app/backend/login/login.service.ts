import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {
    constructor(private http: Http) { }
    login(user) {
        return this.http.post('/admin/login', JSON.stringify(user)).toPromise();
    }
}