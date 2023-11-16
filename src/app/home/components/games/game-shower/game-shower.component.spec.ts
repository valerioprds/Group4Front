import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameShowerComponent } from './game-shower.component';

describe('GameShowerComponent', () => {
  let component: GameShowerComponent;
  let fixture: ComponentFixture<GameShowerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameShowerComponent]
    });
    fixture = TestBed.createComponent(GameShowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
