import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
    MdSidenavModule,
    MdButtonModule,
    MdGridListModule
} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MdSidenavModule,
        MdButtonModule,
        MdGridListModule
    ],
    declarations: [

    ],
    providers: [],
    exports: [
        CommonModule,
        FormsModule,
        MdSidenavModule,
        MdButtonModule,
        MdGridListModule
    ]
})
export class SharedModule { }