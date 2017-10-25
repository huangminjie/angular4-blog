import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

@Injectable()
export class MessageService {

    constructor(public _message: NzMessageService) { }
    autoHide: number = 2000;
    // 成功
    public success(msg) {
        this._message.create('success', msg);
    }

    // 警告
    public warning(msg) {
        this._message.create('warning', msg);
    }
    // 失败
    public error(msg) {
        this._message.create('error', msg);
    }
}