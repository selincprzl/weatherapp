import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastComponentComponent } from './forecast-component.component';

describe('ForecastComponentComponent', () => {
  let component: ForecastComponentComponent;
  let fixture: ComponentFixture<ForecastComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForecastComponentComponent]
    });
    fixture = TestBed.createComponent(ForecastComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
