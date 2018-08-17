import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IphoneXComponent } from './iphoneX.component';

describe('IphoneXComponent', () => {
  let component: IphoneXComponent;
  let fixture: ComponentFixture<IphoneXComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IphoneXComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IphoneXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
