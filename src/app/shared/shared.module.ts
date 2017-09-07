import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
    MdSidenavModule,
    MdButtonModule,
    MdGridListModule,
    MdListModule,
    MdInputModule,
    MdProgressBarModule
} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MdSidenavModule,
        MdButtonModule,
        MdGridListModule,
        MdListModule,
        MdInputModule,
        MdProgressBarModule
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
        MdInputModule,
        MdProgressBarModule
    ]
})
export class SharedModule { }