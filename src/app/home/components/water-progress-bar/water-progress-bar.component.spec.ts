import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterProgressBarComponent } from './water-progress-bar.component';

describe('WaterProgressBarComponent', () => {
  let component: WaterProgressBarComponent;
  let fixture: ComponentFixture<WaterProgressBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WaterProgressBarComponent]
    });
    fixture = TestBed.createComponent(WaterProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
