import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartEretailDetailComponent } from './smart-eretail-detail.component';

describe('SmartEretailDetailComponent', () => {
  let component: SmartEretailDetailComponent;
  let fixture: ComponentFixture<SmartEretailDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmartEretailDetailComponent]
    });
    fixture = TestBed.createComponent(SmartEretailDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
