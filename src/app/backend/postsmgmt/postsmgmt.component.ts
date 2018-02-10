import { Component, OnInit } from '@angular/core';
import { PostsMgMtService } from './postsmgmt.service';
import { Pager } from '../../shared/models/pager.model';
import { MessageService } from '../../shared/message.service';

@Component({
  selector: 'app-backend-postsmgmt',
  templateUrl: './postsmgmt.component.html',
  styleUrls: ['./postsmgmt.component.css']
})
export class PostsMgMtComponent implements OnInit {
  pager: Pager = new Pager();
  dataSet = [];
  loading = true;
  constructor(private srv: PostsMgMtService, private msg: MessageService) { }

  ngOnInit() {

  }
  refreshData(reset = false) {
    if (reset) {
      this.pager.pi = 1;
    }
    this.loading = true;
    this.srv.getPosts(this.pager).subscribe((resp) => {
      this.loading = false;
      if (resp.ok) {
        this.dataSet = resp.data;
      }
      else {
        this.msg.error(resp.type + resp.data);
      }
    });
  }
}
