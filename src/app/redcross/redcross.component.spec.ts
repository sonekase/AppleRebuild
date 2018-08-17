import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedcrossComponent } from './redcross.component';

describe('RedcrossComponent', () => {
  let component: RedcrossComponent;
  let fixture: ComponentFixture<RedcrossComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedcrossComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedcrossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
