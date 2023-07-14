import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UVComponentComponent } from './uvcomponent.component';

describe('UVComponentComponent', () => {
  let component: UVComponentComponent;
  let fixture: ComponentFixture<UVComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UVComponentComponent]
    });
    fixture = TestBed.createComponent(UVComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
