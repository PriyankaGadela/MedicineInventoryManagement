import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedComponent } from './med.component';

describe('MedComponent', () => {
  let component: MedComponent;
  let fixture: ComponentFixture<MedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedComponent]
    });
    fixture = TestBed.createComponent(MedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
