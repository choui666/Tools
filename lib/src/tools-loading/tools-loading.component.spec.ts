import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsLoadingComponent } from './tools-loading.component';

describe('ToolsLoadingComponent', () => {
  let component: ToolsLoadingComponent;
  let fixture: ComponentFixture<ToolsLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolsLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolsLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
