import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortlevelComponent } from './sortlevel.component';

describe('SortlevelComponent', () => {
  let component: SortlevelComponent;
  let fixture: ComponentFixture<SortlevelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SortlevelComponent]
    });
    fixture = TestBed.createComponent(SortlevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
