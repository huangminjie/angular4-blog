import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SnackbarService } from './snackbar.service';

import {
    MdSidenavModule,
    MdButtonModule,
    MdGridListModule,
    MdListModule,
    MdInputModule,
    MdProgressBarModule,
    MdSnackBarModule
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
        MdProgressBarModule,
        MdSnackBarModule
    ],
    declarations: [

    ],
    providers: [
        SnackbarService
    ],
    exports: [
        CommonModule,
        FormsModule,
        MdSidenavModule,
        MdButtonModule,
        MdGridListModule,
        MdListModule,
        MdInputModule,
        MdProgressBarModule,
        MdSnackBarModule
    ]
})
export class SharedModule { }