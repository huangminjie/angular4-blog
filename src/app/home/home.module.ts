import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import { HomeNavComponent } from './home-nav';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        SharedModule,
        RouterModule
    ],
    declarations: [
        HomeComponent,
        HomeNavComponent
    ],
    exports: [HomeComponent]
})
export class HomeModule { }