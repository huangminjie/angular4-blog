import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { ResponseModel } from '../../shared/models/response.model';

@Injectable()
export class PostsMgMtService {

    constructor(private http: HttpClient) { }
    getPosts(pager) {
        return this.http.get<ResponseModel>('');
    }
}