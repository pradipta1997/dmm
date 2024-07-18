import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerBusinessComponent } from './consumer-business.component';

describe('ConsumerBusinessComponent', () => {
  let component: ConsumerBusinessComponent;
  let fixture: ComponentFixture<ConsumerBusinessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsumerBusinessComponent]
    });
    fixture = TestBed.createComponent(ConsumerBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
