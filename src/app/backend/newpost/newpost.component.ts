import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { markdown } from 'markdown'

@Component({
  selector: 'app-backend-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})
export class NewPostComponent implements OnInit {
  postForm: FormGroup;
  isCollapsed: boolean = false;
  isFullscreen: boolean = false;
  options = [];
  selectedOption;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.options = [];
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
    });
  }
  getFormControl(name) {
    return this.postForm.controls[name];
  }
  collapsed() {
    if (this.isCollapsed) {
      $("#preview").show();
    }
    else {
      $("#preview").hide();
    }
    this.isCollapsed = !this.isCollapsed;
  }
  fullscreen() {
    if (this.isFullscreen) {
      this.exitFullscreen();
    }
    else {
      let textContent = document.getElementById("textContent");
      this.launchFullscreen(textContent);
    }
    this.isFullscreen = !this.isFullscreen;
  }
  launchFullscreen(element) {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullScreen();
    }
  }
  exitFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
    else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
  resetForm() {
    this.postForm.reset({
      text: ""
    });
  }
}
