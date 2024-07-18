import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngagementPlatformSolutionComponent } from './engagement-platform-solution.component';

describe('EngagementPlatformSolutionComponent', () => {
  let component: EngagementPlatformSolutionComponent;
  let fixture: ComponentFixture<EngagementPlatformSolutionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EngagementPlatformSolutionComponent]
    });
    fixture = TestBed.createComponent(EngagementPlatformSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
