import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListrouteComponent } from './listroute.component';

describe('ListrouteComponent', () => {
  let component: ListrouteComponent;
  let fixture: ComponentFixture<ListrouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListrouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
