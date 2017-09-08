import { XHRBackend, Http, RequestOptions } from "@angular/http";
import { InterceptedHttp } from "./http.Interceptor.service";
import { LoaderService } from './loader/loader.service';

export function HttpFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions, loaderService: LoaderService): Http {
    return new InterceptedHttp(xhrBackend, requestOptions, loaderService);
}