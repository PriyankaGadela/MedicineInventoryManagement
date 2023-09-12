import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OledbComponent } from './oledb.component';

describe('OledbComponent', () => {
  let component: OledbComponent;
  let fixture: ComponentFixture<OledbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OledbComponent]
    });
    fixture = TestBed.createComponent(OledbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
