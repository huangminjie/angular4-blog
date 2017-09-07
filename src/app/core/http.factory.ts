import { XHRBackend, Http, RequestOptions } from "@angular/http";
import { InterceptedHttp } from "./http.Interceptor.service";

export function HttpFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions): Http {
    return new InterceptedHttp(xhrBackend, requestOptions);
}