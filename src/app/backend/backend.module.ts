import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { SharedModule } from '../shared';
import { BackendComponent } from './backend.component';
import { BackendRoutingModule } from './backend.routing.module';
import { LoginComponent } from './login';
import { DashboardComponent } from './dashboard';
import { NewPostComponent } from './newpost';
import { TypesMgMtComponent } from './typesmgmt/typesmgmt.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        BackendRoutingModule,
        SharedModule,
        NgZorroAntdModule
    ],
    declarations: [
        BackendComponent,
        LoginComponent,
        DashboardComponent,
        NewPostComponent,
        TypesMgMtComponent
    ],
})
export class BackendModule { }
