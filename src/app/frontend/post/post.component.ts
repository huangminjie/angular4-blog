import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { PostService } from './post.service';
import { MessageService } from '../../shared/message.service';
import * as marked from 'marked';

@Component({
  selector: 'app-frontend-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [PostService]
})
export class PostComponent implements OnInit {
  constructor(private router: ActivatedRoute, private srv: PostService, private msg: MessageService) { }

  ngOnInit() {
    this.router.paramMap.switchMap((params: ParamMap) => {
      let id = params.get('id');
      return this.srv.getPostText(id);
    }).subscribe((resp) => {
      if (resp.ok) {
        $(".markdown-main-content").html(marked(resp.data, { gfm: true })
          .replace(/(<li>)\[ \](\s)/g, '$1<input type="checkbox" disabled/>$2')
          .replace(/(<li>)\[x\](\s)/g, '$1<input type="checkbox" checked="checked" disabled/>$2'));
      }
      else {
        this.msg.error(resp.type + resp.data);
      }
    })
  }
}
