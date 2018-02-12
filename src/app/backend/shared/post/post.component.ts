import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { markdown } from 'markdown';
import { PostService } from './post.service';
import { MessageService } from '../../../shared/message.service';
import { Post } from './post.model';

@Component({
    selector: 'app-backend-shared-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css'],
    providers: [PostService]
})
export class PostComponent implements OnInit {
    @Input() set post(value: Post) {
        if (value) {
            this.model = value;
            this.postForm = this.fb.group({
                title: [value.title, [Validators.required]],
                type: [value.type, [Validators.required]],
                digest: [value.digest, [Validators.nullValidator]],
                tag: [value.tag, [Validators.nullValidator]],
                text: [value.text, [Validators.required]]
            });
        }
        else {
            this.postForm = this.fb.group({
                title: ['', [Validators.required]],
                type: ['', [Validators.required]],
                digest: ['', [Validators.nullValidator]],
                tag: ['', [Validators.nullValidator]],
                text: ['', [Validators.required]]
            });
        }
        this.postForm.controls['text'].valueChanges.subscribe((data) => {
            $("#preview").html(markdown.toHTML(data));
        });
    }
    model: Post;
    postForm: FormGroup;
    isCollapsed: boolean = true;
    isFullscreen: boolean = false;
    options = [];
    constructor(private srv: PostService, private fb: FormBuilder, private msg: MessageService) { }

    ngOnInit() {
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
        if (this.model) {
            this.postForm.reset({
                title: this.model.title,
                digest: this.model.digest,
                type: this.model.type,
                tag: this.model.tag,
                text: this.model.text
            });
        }
        else {
            this.postForm.reset({
                text: "",
                type: this.options[0].id
            });
        }
    }
    submitForm() {
        this.srv.addPost(this.postForm.value).then((resp) => {
            if (resp.ok) {
                this.msg.success(resp.data);
                this.resetForm();
            }
            else {
                this.msg.error(resp.type + resp.data);
            }
        });
    }
}
