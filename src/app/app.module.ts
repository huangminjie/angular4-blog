import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import 'hammerjs';
import { CoreModule } from './core';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { BackendModule } from './backend';
import { FrontendModule } from './frontend';
import { MyInterceptor } from './core/http.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
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
    useClass: MyInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
