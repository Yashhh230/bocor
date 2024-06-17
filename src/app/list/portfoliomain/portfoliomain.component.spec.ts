import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfoliomainComponent } from './portfoliomain.component';

describe('PortfoliomainComponent', () => {
  let component: PortfoliomainComponent;
  let fixture: ComponentFixture<PortfoliomainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortfoliomainComponent]
    });
    fixture = TestBed.createComponent(PortfoliomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
