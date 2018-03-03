import { Component, OnInit } from '@angular/core';
import { FrontendService } from './frontend.service';
import { MessageService } from '../shared/message.service';

@Component({
    selector: 'app-frontend',
    templateUrl: './frontend.component.html',
    styleUrls: ['./frontend.component.css'],
    providers: [FrontendService]
})

export class FrontendComponent implements OnInit {
    isCollapsed = false;
    menus = [];
    constructor(private srv: FrontendService, private msg: MessageService) { }

    ngOnInit() {
        this.srv.getTypes().then((resp) => {
            if (resp.ok) {
                this.menus = resp.data.map((item) => {
                    return item.name;
                });
            }
            else {
                this.msg.error(resp.type + resp.data);
            }
        });
    }
}