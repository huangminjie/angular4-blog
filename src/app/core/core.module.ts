import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { SharedModule } from '../shared';
import { LoaderComponent } from './loader/loader.component';
import { LoaderService } from './loader/loader.service';
import { LoggerService } from './logger.service';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        NgZorroAntdModule
    ],
    exports: [
        LoaderComponent
    ],
    declarations: [
        LoaderComponent
    ],
    providers: [
        LoggerService,
        LoaderService
    ]
})
export class CoreModule { }