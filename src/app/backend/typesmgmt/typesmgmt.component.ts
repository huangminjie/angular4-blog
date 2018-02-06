import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TypesMgMtService } from './typesmgmt.service';

@Component({
  selector: 'app-backend-typesmgmt',
  templateUrl: './typesmgmt.component.html',
  styleUrls: ['./typesmgmt.component.css'],
  providers: [TypesMgMtService]
})
export class TypesMgMtComponent implements OnInit {
  editRow = null;
  tempEditObject = {};
  data = [
    {
      key: 0,
      name: 'Edward King 0',
      age: 32,
      address: 'London, Park Lane no. 0',
    }
  ];
  isVisible_addModal = false;
  postForm: FormGroup;
  constructor(private srv: TypesMgMtService, private fb: FormBuilder) { }

  ngOnInit() {
    this.postForm = this.fb.group({
      name: ['', Validators.required],
      status: [1]
    });
    this.data.forEach(item => {
      this.tempEditObject[item.key] = {};
    });
  }
  edit(data) {
    this.tempEditObject[data.key] = { ...data };
    this.editRow = data.key;
  }

  save(data) {
    Object.assign(data, this.tempEditObject[data.key]);
    this.editRow = null;
  }

  cancel(data) {
    this.tempEditObject[data.key] = {};
    this.editRow = null;
  }
  add() {
    this.isVisible_addModal = true;
  }
  modalCancel() {
    this.isVisible_addModal = false;
  }
  modalOk() {
    let type = this.postForm.value;
    this.srv.addType(type).then((resp) => {
      // if (resp.ok) {
      //   this.isVisible_addModal = false;
      // }
      // else {

      // }
    });
  }
}
