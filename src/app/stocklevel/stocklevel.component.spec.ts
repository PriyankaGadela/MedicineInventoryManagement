import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StocklevelComponent } from './stocklevel.component';

describe('StocklevelComponent', () => {
  let component: StocklevelComponent;
  let fixture: ComponentFixture<StocklevelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StocklevelComponent]
    });
    fixture = TestBed.createComponent(StocklevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
