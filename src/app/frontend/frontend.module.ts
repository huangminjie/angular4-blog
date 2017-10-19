import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared';
import { FrontendComponent } from './frontend.component';
import { FrontendNavComponent } from './frontend-nav';
import { HomeComponent } from './home';
import { FrontendRoutingModule } from './frontend.routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        FrontendRoutingModule
    ],
    exports: [],
    declarations: [
        FrontendComponent,
        FrontendNavComponent,
        HomeComponent
    ],
    providers: [],
})
export class FrontendModule { }
