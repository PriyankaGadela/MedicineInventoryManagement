import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpiryComponent } from './expiry.component';

describe('ExpiryComponent', () => {
  let component: ExpiryComponent;
  let fixture: ComponentFixture<ExpiryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpiryComponent]
    });
    fixture = TestBed.createComponent(ExpiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
