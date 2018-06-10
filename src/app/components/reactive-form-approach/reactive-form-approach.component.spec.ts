import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormApproachComponent } from './reactive-form-approach.component';

describe('ReactiveFormApproachComponent', () => {
  let component: ReactiveFormApproachComponent;
  let fixture: ComponentFixture<ReactiveFormApproachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormApproachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormApproachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
