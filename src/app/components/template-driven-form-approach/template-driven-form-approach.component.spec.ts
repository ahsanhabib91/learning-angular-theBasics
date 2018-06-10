import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenFormApproachComponent } from './template-driven-form-approach.component';

describe('TemplateDrivenFormApproachComponent', () => {
  let component: TemplateDrivenFormApproachComponent;
  let fixture: ComponentFixture<TemplateDrivenFormApproachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDrivenFormApproachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenFormApproachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
