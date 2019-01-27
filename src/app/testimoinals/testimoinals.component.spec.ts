import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimoinalsComponent } from './testimoinals.component';

describe('TestimoinalsComponent', () => {
  let component: TestimoinalsComponent;
  let fixture: ComponentFixture<TestimoinalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestimoinalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimoinalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
