import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeStartBannerComponent } from './home-start-banner.component';

describe('HomeStartBannerComponent', () => {
  let component: HomeStartBannerComponent;
  let fixture: ComponentFixture<HomeStartBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeStartBannerComponent]
    });
    fixture = TestBed.createComponent(HomeStartBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
