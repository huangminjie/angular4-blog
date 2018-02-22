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
    addPost(post) {
        return this.http.post<ResponseModel>('/posts', post).toPromise();
    }
    updatePost(post) {
        return this.http.patch<ResponseModel>('/posts/' + post.id, JSON.stringify({
            title: post.title,
            type: post.type,
            digest: post.digest,
            tag: post.tag,
            text: post.text
        })).toPromise();
    }
}