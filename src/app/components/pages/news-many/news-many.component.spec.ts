import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsManyComponent } from './news-many.component';

describe('NewsManyComponent', () => {
  let component: NewsManyComponent;
  let fixture: ComponentFixture<NewsManyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsManyComponent]
    });
    fixture = TestBed.createComponent(NewsManyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
