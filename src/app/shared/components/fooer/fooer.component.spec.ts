import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooerComponent } from './fooer.component';

describe('FooerComponent', () => {
  let component: FooerComponent;
  let fixture: ComponentFixture<FooerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooerComponent]
    });
    fixture = TestBed.createComponent(FooerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
