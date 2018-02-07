import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { ResponseModel } from '../../shared/models/response.model';


@Injectable()
export class TypesMgMtService {

    constructor(private http: HttpClient) { }
    getTypes() {
        return this.http.get<ResponseModel>('/types');
    }
    addType(type) {
        return this.http.post<ResponseModel>('/types', JSON.stringify(type));
    }
    updateType(type) {
        return this.http.patch<ResponseModel>('/types/' + type.id, JSON.stringify({
            name: type.name,
            status: type.status
        }));
    }
}