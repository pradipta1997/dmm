import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurStrengthComponent } from './our-strength.component';

describe('OurStrengthComponent', () => {
  let component: OurStrengthComponent;
  let fixture: ComponentFixture<OurStrengthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurStrengthComponent]
    });
    fixture = TestBed.createComponent(OurStrengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
