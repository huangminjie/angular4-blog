import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    postsList = [];
    constructor(private srv: FrontendService, private msg: MessageService, private router: Router) { }

    ngOnInit() {
        this.srv.getTypes()
            .then((resp) => {
                if (resp.ok) {
                    this.menus = resp.data.map((item) => {
                        return item.name;
                    });
                    if (Array.isArray(resp.data) && resp.data.length > 0) {
                        return this.srv.getPosts(resp.data[0].id);
                    }
                    else {
                        throw "文章数据为空!";
                    }
                }
                else {
                    throw resp.type + resp.data;
                }
            }).then((resp) => {
                if (resp.ok) {
                    this.postsList = resp.data;
                }
                else {
                    throw resp.type + resp.data;
                }
            })
            .catch((err) => {
                this.msg.error(err);
            });
    }
    navigate(id) {
        this.router.navigate(['/frontend/post', id]);
    }
}