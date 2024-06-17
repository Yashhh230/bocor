import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqforComponent } from './faqfor.component';

describe('FaqforComponent', () => {
  let component: FaqforComponent;
  let fixture: ComponentFixture<FaqforComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FaqforComponent]
    });
    fixture = TestBed.createComponent(FaqforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
