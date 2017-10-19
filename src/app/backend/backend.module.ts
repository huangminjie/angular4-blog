import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared';
import { BackendComponent } from './backend.component';
import { BackendRoutingModule } from './backend.routing.module';
import { BackendNavComponent } from './backend-nav';
import { LoginComponent } from './login';
import { DashboardComponent } from './dashboard';
import { NewPostComponent } from './newpost';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        BackendRoutingModule,
        SharedModule
    ],
    declarations: [
        BackendComponent,
        BackendNavComponent,
        LoginComponent,
        DashboardComponent,
        NewPostComponent
    ],
})
export class BackendModule { }
