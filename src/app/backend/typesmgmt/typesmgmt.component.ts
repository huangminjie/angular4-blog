import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TypesMgMtService } from './typesmgmt.service';
import { MessageService } from '../../shared/message.service';

@Component({
  selector: 'app-backend-typesmgmt',
  templateUrl: './typesmgmt.component.html',
  styleUrls: ['./typesmgmt.component.css'],
  providers: [TypesMgMtService]
})
export class TypesMgMtComponent implements OnInit {
  editRow = null;
  tempEditObject = {};
  data = [];
  isVisible_addModal = false;
  postForm: FormGroup;
  constructor(private srv: TypesMgMtService, private fb: FormBuilder, private msg: MessageService) { }

  ngOnInit() {
    this.postForm = this.fb.group({
      name: ['', Validators.required],
      status: [1]
    });
    this.srv.getTypes().subscribe((resp) => {
      if (resp.ok) {
        this.data = resp.data;
        this.data.forEach(item => {
          this.tempEditObject[item.id] = {};
        });
      }
      else {
        this.msg.error(resp.data);
      }
    });
  }

  edit(data) {
    this.tempEditObject[data.id] = { ...data };
    this.editRow = data.id;
  }

  save(data) {
    this.srv.updateType(this.tempEditObject[data.id]).subscribe((resp) => {
      if (resp.ok) {
        this.msg.success(resp.data);
        Object.assign(data, this.tempEditObject[data.id]);
        this.editRow = null;
      }
      else {
        this.msg.error(resp.data);
      }
    });

  }

  cancel(data) {
    this.tempEditObject[data.id] = {};
    this.editRow = null;
  }

  add() {
    this.isVisible_addModal = true;
  }

  modalCancel() {
    this.isVisible_addModal = false;
    this.postForm.reset({
      status: [1]
    });
  }

  modalOk() {
    let type = this.postForm.value;
    this.srv.addType(type).subscribe(resp => {
      if (resp.ok) {
        this.msg.success(resp.data);
        this.isVisible_addModal = false;
      }
      else {
        this.msg.error(resp.data);
      }
    });
  }
}
