import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComponentNameComponent } from './my-component-name.component';

describe('MyComponentNameComponent', () => {
  let component: MyComponentNameComponent;
  let fixture: ComponentFixture<MyComponentNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComponentNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComponentNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
