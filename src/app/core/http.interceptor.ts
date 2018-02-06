import { Injectable } from '@angular/core';
import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpResponse
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { environment } from "../../environments/environment";
import { LoaderService } from './loader/loader.service';
import { HttpHeaders } from '@angular/common/http/src/headers';

@Injectable()
export class MyInterceptor implements HttpInterceptor {
    constructor(private loaderService: LoaderService) {

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const dupReq = req.clone({
            url: this.initUrl(req.url),
            headers: req.headers.set('Content-Type', 'application/json')
        });
        this.beforeRequest();
        return next.handle(dupReq)
            .map((res: HttpEvent<any>) => {
                if (res instanceof HttpResponse) {
                    if (res.ok) {
                        return res.body;
                    }
                    else {
                        return {
                            ok: false,
                            data: "请求发生异常，请刷新页面！"
                        };
                    }
                }
            })
            .do((res) => {
                this.afterRequest();
                this.onSuccess(res);
            }, (err: any) => {
                this.afterRequest();
                this.onError(err);
            })
            // .finally(() => {
            //     this.afterRequest();
            // })
            .catch((err: any, caught) => {
                return this.onCatch(err, caught);
            });
    }
    private initUrl(url: string) {
        return environment.host + url;
    }

    private beforeRequest(): void {
        this.loaderService.show();
    }

    private afterRequest(): void {
        this.loaderService.hide();
    }

    private onCatch(error: any, caught: Observable<any>): Observable<any> {
        return Observable.throw(error);
    }

    private onSuccess(res: HttpEvent<any>) {
        //console.log(res);
    }

    private onError(res: any): void {
        //console.log(res);
    }
}