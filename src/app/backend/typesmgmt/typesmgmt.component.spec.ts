import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesMgMtComponent } from './typesmgmt.component';

describe('TypesmgmtComponent', () => {
  let component: TypesMgMtComponent;
  let fixture: ComponentFixture<TypesMgMtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TypesMgMtComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypesMgMtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
