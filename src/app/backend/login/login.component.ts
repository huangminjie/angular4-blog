import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { MessageService } from '../../shared/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit, OnDestroy {
  @ViewChild('bgContainerElem') bgContainerElem: ElementRef;
  @ViewChild('formContainerElem') formContainerElem: ElementRef;
  userForm: FormGroup;
  intervalID: any;
  constructor(private router: Router, private fb: FormBuilder, private srv: LoginService, private _message: MessageService) {
    this.userForm = this.fb.group({
      user_name: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    let imgs = $(this.bgContainerElem.nativeElement).children();
    let cur_img = imgs.length - 1;
    setInterval(() => {
      cur_img = this.turnImgs(imgs, cur_img);
    }, 4000);

    $(this.formContainerElem.nativeElement).animateCss("bounceInDown");
  }
  turnImgs(imgs, cur_img) {
    if (cur_img == 0) {
      this.fadeOut(imgs[cur_img]);
      cur_img = imgs.length - 1;
      this.fadeIn(imgs[cur_img]);
    } else {
      this.fadeOut(imgs[cur_img]);
      this.fadeIn(imgs[cur_img - 1]);
      cur_img--;
    }
    return cur_img;
  }
  fadeIn(e) {
    e.className = "bg fadein"
  };
  fadeOut(e) {
    e.className = "bg fadeout"
  };
  ngOnDestroy() {
    window.clearInterval(this.intervalID);
  }
  onSubmit() {
    for (const i in this.userForm.controls) {
      this.userForm.controls[i].markAsDirty();
    }
    if (!this.userForm.invalid) {
      this.srv.login(this.userForm.value).then((res: any) => {
        if (res.ok) {
          this._message.success(res.data);
          localStorage.setItem("currentUser", JSON.stringify(this.userForm.value));
          let url = localStorage.getItem("redirectUrl");
          if (url) {
            this.router.navigateByUrl(url);
          }
          else {
            this.router.navigateByUrl('/backend/dashboard');
          }
        }
        else {
          this._message.error(res.data);
        }
      });
    }
  }
}
