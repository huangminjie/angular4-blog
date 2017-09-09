import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { SnackbarService } from '../../shared/snackbar.service';

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
  constructor(private fb: FormBuilder, private srv: LoginService, private snackBarServer: SnackbarService) {
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
    this.srv.login(this.userForm.value).then((res: any) => {
      if (res.ok) {
        this.snackBarServer.success(res.data);

      }
      else {
        this.snackBarServer.error(res.data);
      }
    });
  }
}
