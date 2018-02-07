import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import 'hammerjs';
import { CoreModule } from './core';
import { ServiceInterceptor } from './core/http.interceptor';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { BackendModule } from './backend';
import { FrontendModule } from './frontend';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    FrontendModule,
    BackendModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot()
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ServiceInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
