import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { markdown } from 'markdown';
import { NewPostService } from './newpost.component.service';
import { MessageService } from '../../shared/message.service';

@Component({
  selector: 'app-backend-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css'],
  providers: [NewPostService]
})
export class NewPostComponent implements OnInit {
  postForm: FormGroup;
  isCollapsed: boolean = false;
  isFullscreen: boolean = false;
  options = [];
  constructor(private srv: NewPostService, private fb: FormBuilder, private msg: MessageService) { }

  ngOnInit() {
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

    this.srv.getTypes().then((resp) => {
      if (resp.ok) {
        if (Array.isArray(resp.data)) {
          this.options = resp.data;
          this.postForm.patchValue({
            type: this.options[0].id
          });
        }
      }
      else {
        this.msg.error(resp.type + resp.data);
      }
    })
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
      text: "",
      type: this.options[0].id
    });
  }
  submitForm() {
    this.srv.addPost(this.postForm.value).then((resp) => {
      if (resp.ok) {
        console.log(resp);
      }
    });
  }
}
