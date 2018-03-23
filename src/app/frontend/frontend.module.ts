import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { SharedModule } from '../shared';
import { FrontendComponent } from './frontend.component';
import { HomeComponent } from './home';
import { PostComponent, CommentPostComponent } from './post';
import { FrontendRoutingModule } from './frontend.routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        FrontendRoutingModule,
        NgZorroAntdModule
    ],
    exports: [],
    declarations: [
        FrontendComponent,
        HomeComponent,
        PostComponent,
        CommentPostComponent
    ],
    providers: [],
})
export class FrontendModule { }
