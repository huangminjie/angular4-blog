import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { markdown } from 'markdown'

@Component({
  selector: 'app-backend-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})
export class NewPostComponent implements OnInit {
  postForm: FormGroup;
  isCollapsed: boolean;
  options = [];
  selectedOption;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    console.log(markdown.toHTML("Hello *World*!"));
    this.options = [
      { value: 'jack', label: 'Jack' },
      { value: 'lucy', label: 'Lucy' },
      { value: 'disabled', label: 'Disabled', disabled: true }
    ];
    this.selectedOption = this.options[0];

    this.postForm = this.fb.group({
      title: ['', [Validators.required]],
      type: ['', [Validators.required]],
      digest: ['', [Validators.nullValidator]],
      tag: ['', [Validators.nullValidator]],
      text: ['', [Validators.required]]
    });
    this.postForm.controls['text'].valueChanges.subscribe((data) => {
      $("#preview").html(markdown.toHTML(data));
    })
  }
  getFormControl(name) {
    return this.postForm.controls[name];
  }
  collapsed() {
    if (!this.isCollapsed) {
      $("#preview").hide();
    }
    else {
      $("#preview").show();
    }
    this.isCollapsed = !this.isCollapsed;
  }
}
