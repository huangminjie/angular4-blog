import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TypesMgMtService {

    constructor(private http: Http) { }

    addType(type) {
        return this.http.post('/types', JSON.stringify(type)).toPromise();
    }
}