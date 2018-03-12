import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FrontendService } from './frontend.service';
import { MessageService } from '../shared/message.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-frontend',
    templateUrl: './frontend.component.html',
    styleUrls: ['./frontend.component.css'],
    providers: [FrontendService]
})

export class FrontendComponent implements OnInit {
    isCollapsed = false;
    types = [];
    postsList = [];
    currentTypeID = '';
    currentPostID = '';
    constructor(private srv: FrontendService, private msg: MessageService, private router: Router, private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.srv.getTypes()
            .then((resp) => {
                if (resp.ok) {
                    this.types = resp.data.map((item) => {
                        return item;
                    });
                    if (Array.isArray(resp.data) && resp.data.length > 0) {
                        if (!sessionStorage.getItem("currentTypeID")) {
                            sessionStorage.setItem("currentTypeID", resp.data[0].id);
                        }
                        this.currentTypeID = sessionStorage.getItem("currentTypeID");
                        return this.srv.getPosts(this.currentTypeID);
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
                    if (!sessionStorage.getItem("currentPostID")) {
                        sessionStorage.setItem("currentPostID", this.postsList[0].id);
                    }
                    if (this.router.url.split('/').length === 4) {
                        this.currentPostID = sessionStorage.getItem("currentPostID");
                        this.router.navigate(['/frontend/post', this.currentPostID]);
                    }
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
        sessionStorage.setItem("currentPostID", id);
        this.currentPostID = id;
        this.router.navigate(['/frontend/post', id]);
    }
    changeMenu(type) {
        sessionStorage.setItem("currentTypeID", type);
        this.srv.getPosts(type).then((resp) => {
            if (resp.ok) {
                this.postsList = resp.data;
                if (Array.isArray(this.postsList) && this.postsList.length > 0) {
                    this.currentPostID = this.postsList[0].id;
                    sessionStorage.setItem("currentPostID", this.currentPostID);
                    this.router.navigate(['/frontend/post', this.currentPostID]);
                }
            }
            else {
                this.msg.error(resp.data);
            }
        });
    }
    goToHome() {
        this.router.navigate(['/']);
        sessionStorage.setItem("currentPostID", '');
        this.currentPostID = '';
    }
}