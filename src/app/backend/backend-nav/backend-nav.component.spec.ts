import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendNavComponent } from './backend-nav.component';

describe('DashboardNavComponent', () => {
  let component: BackendNavComponent;
  let fixture: ComponentFixture<BackendNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BackendNavComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackendNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
