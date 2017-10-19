import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import 'hammerjs';
import { CoreModule } from './core';
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
    HttpModule,
    CoreModule,
    FrontendModule,
    BackendModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
