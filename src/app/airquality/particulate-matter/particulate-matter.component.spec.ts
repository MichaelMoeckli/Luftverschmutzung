import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticulateMatterComponent } from './particulate-matter.component';

describe('ParticulateMatterComponent', () => {
  let component: ParticulateMatterComponent;
  let fixture: ComponentFixture<ParticulateMatterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticulateMatterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticulateMatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
