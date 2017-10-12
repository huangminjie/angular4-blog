import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBlogComponent } from './newblog.component';

describe('NewblogComponent', () => {
  let component: NewBlogComponent;
  let fixture: ComponentFixture<NewBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewBlogComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
