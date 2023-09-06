import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedoperationsComponent } from './medoperations.component';

describe('MedoperationsComponent', () => {
  let component: MedoperationsComponent;
  let fixture: ComponentFixture<MedoperationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedoperationsComponent]
    });
    fixture = TestBed.createComponent(MedoperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
