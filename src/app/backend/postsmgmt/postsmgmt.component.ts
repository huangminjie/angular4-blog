import { Component, OnInit } from '@angular/core';
import { PostsMgMtService } from './postsmgmt.service';
import { Pager } from '../../shared/models/pager.model';
import { MessageService } from '../../shared/message.service';

@Component({
  selector: 'app-backend-postsmgmt',
  templateUrl: './postsmgmt.component.html',
  styleUrls: ['./postsmgmt.component.css'],
  providers: [PostsMgMtService]
})
export class PostsMgMtComponent implements OnInit {
  pager: Pager = new Pager();
  dataSet = [];
  loading = true;
  isVisible = false;
  modalWidth = 0;
  selectedPost: any;
  constructor(private srv: PostsMgMtService, private msg: MessageService) { }

  ngOnInit() {
    this.modalWidth = $("body").width() - 200;
    this.refreshData();
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
    }, () => {
      this.loading = false;
    });
  }
  edit(data) {
    this.selectedPost = data;
    this.isVisible = true;
  }
  closeModal() {
    this.selectedPost = null;
    this.isVisible = false;
    this.refreshData();
  }
  auditOrRevoke(data) {
    let status = 0;
    if (data.status === 0) {
      status = 1;
    }
    this.srv.updatePostAuditState(data.id, status).then((resp) => {
      if (resp.ok) {
        this.refreshData();
      }
      else {
        this.msg.error(resp.type + resp.data);
      }
    });
  }
  remove(data) {
    this.srv.remove(data.id).then((resp) => {
      if (resp.ok) {
        this.refreshData();
      }
      else {
        this.msg.error(resp.type + resp.data);
      }
    });
  }
}
