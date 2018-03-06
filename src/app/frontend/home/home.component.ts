import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FrontendService } from '../frontend.service';
import { MessageService } from '../../shared/message.service';

@Component({
  selector: 'app-frontend-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  recentPostsList = [];
  constructor(private router: Router, private srv: FrontendService, private msg: MessageService) { }

  ngOnInit() {
    this.srv.getPosts('', true).then((resp) => {
      if (resp.ok) {
        this.recentPostsList = resp.data;
      }
      else {
        this.msg.error(resp.type + resp.data);
      }
    })
  }
}
