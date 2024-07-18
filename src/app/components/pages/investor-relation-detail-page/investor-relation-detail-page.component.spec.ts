import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorRelationDetailPageComponent } from './investor-relation-detail-page.component';

describe('InvestorRelationDetailPageComponent', () => {
  let component: InvestorRelationDetailPageComponent;
  let fixture: ComponentFixture<InvestorRelationDetailPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvestorRelationDetailPageComponent]
    });
    fixture = TestBed.createComponent(InvestorRelationDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
