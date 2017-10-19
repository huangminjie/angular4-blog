import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendNavComponent } from './frontend-nav.component';

describe('HomeNavComponent', () => {
  let component: FrontendNavComponent;
  let fixture: ComponentFixture<FrontendNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FrontendNavComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontendNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
