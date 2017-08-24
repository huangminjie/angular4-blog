import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
    MdSidenavModule,
    MdButtonModule,
    MdGridListModule,
    MdListModule
} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MdSidenavModule,
        MdButtonModule,
        MdGridListModule,
        MdListModule
    ],
    declarations: [

    ],
    providers: [],
    exports: [
        CommonModule,
        FormsModule,
        MdSidenavModule,
        MdButtonModule,
        MdGridListModule,
        MdListModule
    ]
})
export class SharedModule { }