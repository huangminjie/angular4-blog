import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class SnackbarService {

    constructor(public snackBar: MatSnackBar) { }
    autoHide: number = 2000;
    // 成功
    public success(msg) {
        this.snackBar.open(msg, 'Success', {
            duration: this.autoHide,
            extraClasses: ['snackbarSuccess']
        });
    }

    // 警告
    public warning(msg) {
        this.snackBar.open(msg, 'Warning', {
            duration: this.autoHide,
            extraClasses: ['snackbarWarning']
        });
    }
    // 失败
    public error(msg) {
        this.snackBar.open(msg, 'Error', {
            duration: this.autoHide,
            extraClasses: ['snackbarError']
        });
    }
}