import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorRelationComponent } from './investor-relation.component';

describe('InvestorRelationComponent', () => {
  let component: InvestorRelationComponent;
  let fixture: ComponentFixture<InvestorRelationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvestorRelationComponent]
    });
    fixture = TestBed.createComponent(InvestorRelationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
