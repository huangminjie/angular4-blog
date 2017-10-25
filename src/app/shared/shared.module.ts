import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessageService } from './message.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
    ],
    declarations: [

    ],
    providers: [
        MessageService
    ],
    exports: [
        CommonModule,
        FormsModule
    ]
})
export class SharedModule { }