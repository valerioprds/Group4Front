import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyProgressBarComponent } from './money-progress-bar.component';

describe('MoneyProgressBarComponent', () => {
  let component: MoneyProgressBarComponent;
  let fixture: ComponentFixture<MoneyProgressBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoneyProgressBarComponent]
    });
    fixture = TestBed.createComponent(MoneyProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
