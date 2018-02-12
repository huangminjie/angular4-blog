import { Component, OnInit } from '@angular/core';
import { NewPostService } from './newpost.component.service';

@Component({
  selector: 'app-backend-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css'],
  providers: [NewPostService]
})
export class NewPostComponent implements OnInit {
  constructor() { }

  ngOnInit() {

  }
}
