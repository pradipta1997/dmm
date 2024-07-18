import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SektorIndustriComponent } from './sektor-industri.component';

describe('SektorIndustriComponent', () => {
  let component: SektorIndustriComponent;
  let fixture: ComponentFixture<SektorIndustriComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SektorIndustriComponent]
    });
    fixture = TestBed.createComponent(SektorIndustriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
