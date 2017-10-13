import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SnackbarService } from './snackbar.service';

import {
    MatSidenavModule,
    MatButtonModule,
    MatGridListModule,
    MatListModule,
    MatInputModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatToolbarModule
} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatSidenavModule,
        MatButtonModule,
        MatGridListModule,
        MatListModule,
        MatInputModule,
        MatProgressBarModule,
        MatSnackBarModule,
        MatExpansionModule,
        MatToolbarModule
    ],
    declarations: [

    ],
    providers: [
        SnackbarService
    ],
    exports: [
        CommonModule,
        FormsModule,
        MatSidenavModule,
        MatButtonModule,
        MatGridListModule,
        MatListModule,
        MatInputModule,
        MatProgressBarModule,
        MatSnackBarModule,
        MatExpansionModule,
        MatToolbarModule
    ]
})
export class SharedModule { }