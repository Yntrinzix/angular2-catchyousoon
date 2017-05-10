import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardContnentComponent } from './dashboard-contnent.component';

describe('DashboardContnentComponent', () => {
  let component: DashboardContnentComponent;
  let fixture: ComponentFixture<DashboardContnentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardContnentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardContnentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
