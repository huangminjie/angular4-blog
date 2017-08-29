import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('formContainerElem') elem: ElementRef;
  userForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    $(this.elem.nativeElement).animateCss("bounceInDown");
  }
  onSubmit() {

  }
}
