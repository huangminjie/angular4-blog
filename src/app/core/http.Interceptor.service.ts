import { Injectable } from "@angular/core";
import {
    ConnectionBackend,
    RequestOptions,
    Request,
    RequestOptionsArgs,
    Response,
    Http,
    Headers
} from "@angular/http";
import { Observable } from "rxjs/Rx";
import { environment } from "../../environments/environment";
import { ResponseModel } from '../shared/models/response.model';
import { LoaderService } from './loader/loader.service';

@Injectable()
export class InterceptedHttp extends Http {
    constructor(backend: ConnectionBackend, defaultOptions: RequestOptions, private loaderService: LoaderService) {
        super(backend, defaultOptions);
    }

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        url = this.updateUrl(url);
        this.beforeRequest();
        return super.get(url, this.getRequestOptionArgs(options))
            .catch(this.onCatch)
            .do((res: Response) => {
                this.onSuccess(res);
            }, (err: any) => {
                this.onError(err);
            })
            .finally(() => {
                this.afterRequest();
            });
    }

    post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        url = this.updateUrl(url);
        this.beforeRequest();
        return super.post(url, body, this.getRequestOptionArgs(options))
            .catch(this.onCatch)
            .do((res: Response) => {
                this.onSuccess(res);
            }, (err: any) => {
                this.onError(err);
            })
            .map(res => res.json())
            .finally(() => {
                this.afterRequest();
            });
    }

    put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        url = this.updateUrl(url);
        this.beforeRequest();
        return super.put(url, body, this.getRequestOptionArgs(options))
            .catch(this.onCatch)
            .do((res: Response) => {
                this.onSuccess(res);
            }, (err: any) => {
                this.onError(err);
            })
            .finally(() => {
                this.afterRequest();
            });
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        url = this.updateUrl(url);
        this.beforeRequest();
        return super.delete(url, this.getRequestOptionArgs(options))
            .catch(this.onCatch)
            .do((res: Response) => {
                this.onSuccess(res);
            }, (err: any) => {
                this.onError(err);
            })
            .finally(() => {
                this.afterRequest();
            });
    }

    private updateUrl(url: string) {
        return environment.host + url;
    }

    private getRequestOptionArgs(options?: RequestOptionsArgs): RequestOptionsArgs {
        if (options == null) {
            options = new RequestOptions();
        }
        if (options.headers == null) {
            options.headers = new Headers();
        }
        options.headers.append('Content-Type', 'application/json');

        return options;
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

    private onSuccess(res: Response) {
        //console.log(res);
    }

    private onError(res: Response): void {
        //console.log(res);
    }
}
