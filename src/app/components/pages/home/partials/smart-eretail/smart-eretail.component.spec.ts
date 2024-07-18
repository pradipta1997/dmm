import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartEretailComponent } from './smart-eretail.component';

describe('SmartEretailComponent', () => {
  let component: SmartEretailComponent;
  let fixture: ComponentFixture<SmartEretailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmartEretailComponent]
    });
    fixture = TestBed.createComponent(SmartEretailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
