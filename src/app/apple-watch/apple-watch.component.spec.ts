import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppleWatchComponent } from './apple-watch.component';

describe('AppleWatchComponent', () => {
  let component: AppleWatchComponent;
  let fixture: ComponentFixture<AppleWatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppleWatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppleWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
