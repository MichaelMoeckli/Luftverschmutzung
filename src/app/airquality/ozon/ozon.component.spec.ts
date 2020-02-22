import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OzonComponent } from './ozon.component';

describe('OzonComponent', () => {
  let component: OzonComponent;
  let fixture: ComponentFixture<OzonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OzonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OzonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
