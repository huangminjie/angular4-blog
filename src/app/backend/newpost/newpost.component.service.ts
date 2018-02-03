import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class NewPostService {

    constructor(private http: Http) { }

    getTypes() {
        return this.http.get('/types').toPromise();
    }
}