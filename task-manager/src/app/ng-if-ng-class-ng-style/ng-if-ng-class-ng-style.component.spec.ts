import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfNgClassNgStyleComponent } from './ng-if-ng-class-ng-style.component';

describe('NgIfNgClassNgStyleComponent', () => {
  let component: NgIfNgClassNgStyleComponent;
  let fixture: ComponentFixture<NgIfNgClassNgStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgIfNgClassNgStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIfNgClassNgStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
