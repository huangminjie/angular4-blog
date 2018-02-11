import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
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
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { environment } from "../../environments/environment";
import { LoaderService } from './loader/loader.service';
import { HttpHeaders } from '@angular/common/http/src/headers';
import { MessageService } from '../shared/message.service';

@Injectable()
export class ServiceInterceptor implements HttpInterceptor {
    constructor(private loaderService: LoaderService, private router: Router, private msg: MessageService) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const dupReq = req.clone({
            url: this.initUrl(req.url),
            headers: req.headers.set('Content-Type', 'application/json')
        });
        this.beforeRequest();
        return next.handle(dupReq)
            .do((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {

                }
            }, (err: any) => {
                if (err instanceof HttpErrorResponse) {
                    if (err.status === 401) {
                        this.router.navigate(['/backend/login']);
                    }
                }
            })
            .map((res: HttpEvent<any>) => {
                if (res instanceof HttpResponse) {
                    if (res.ok) {
                        return res.clone<any>({ body: res.body });
                    }
                    else {
                        return <any>{
                            ok: false,
                            data: "请求发生异常，请刷新页面！"
                        };
                    }
                }
            })
            .finally(() => {
                this.afterRequest();
            })
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

    private onCatch(err: any, caught: Observable<any>): Observable<any> {
        let error = err.error
        if (error) {
            this.msg.error(`${error.type}:${error.data}`);
        }
        return Observable.throw(err);
    }
}