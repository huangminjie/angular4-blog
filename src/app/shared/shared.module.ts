import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
    MdSidenavModule,
    MdButtonModule,
    MdGridListModule,
    MdListModule,
    MdInputModule
} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MdSidenavModule,
        MdButtonModule,
        MdGridListModule,
        MdListModule,
        MdInputModule
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
        MdListModule,
        MdInputModule
    ]
})
export class SharedModule { }