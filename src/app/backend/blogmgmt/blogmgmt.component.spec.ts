import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogmgmtComponent } from './blogmgmt.component';

describe('BlogmgmtComponent', () => {
  let component: BlogmgmtComponent;
  let fixture: ComponentFixture<BlogmgmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogmgmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogmgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
