import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsMgMtComponent } from './postsmgmt.component';

describe('PostmgmtComponent', () => {
  let component: PostsMgMtComponent;
  let fixture: ComponentFixture<PostsMgMtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostsMgMtComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsMgMtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
