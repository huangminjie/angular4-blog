import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { ResponseModel } from '../shared/models/response.model';

@Injectable()
export class FrontendService {
    constructor(private http: HttpClient) { }
    getTypes() {
        return this.http.get<ResponseModel>('/types').toPromise();
    }
    getPosts(type?, isRecent?) {
        return this.http.get<ResponseModel>(`/posts?type=${type}&status=1&isRecent=${isRecent}`).toPromise();
    }
}