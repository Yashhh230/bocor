import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmainComponent } from './listmain.component';

describe('ListmainComponent', () => {
  let component: ListmainComponent;
  let fixture: ComponentFixture<ListmainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListmainComponent]
    });
    fixture = TestBed.createComponent(ListmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
