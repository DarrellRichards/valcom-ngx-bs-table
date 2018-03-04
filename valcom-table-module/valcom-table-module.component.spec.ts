import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValcomTableModuleComponent } from './valcom-table-module.component';

describe('ValcomTableModuleComponent', () => {
  let component: ValcomTableModuleComponent;
  let fixture: ComponentFixture<ValcomTableModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValcomTableModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValcomTableModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
