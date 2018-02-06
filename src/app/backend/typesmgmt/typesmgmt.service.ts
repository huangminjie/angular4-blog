import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TypesMgMtService {

    constructor(private http: HttpClient) { }

    addType(type) {
        return this.http.post('/types', JSON.stringify(type)).toPromise();
    }
}