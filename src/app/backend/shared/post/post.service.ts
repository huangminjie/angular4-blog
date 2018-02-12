import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { ResponseModel } from '../../../shared/models/response.model';

@Injectable()
export class PostService {

    constructor(private http: HttpClient) { }

    getTypes() {
        return this.http.get<ResponseModel>('/types').toPromise();
    }
    addPost(type) {
        return this.http.post<ResponseModel>('/posts', type).toPromise();
    }
}