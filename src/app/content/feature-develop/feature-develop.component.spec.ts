import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureDevelopComponent } from './feature-develop.component';

describe('FeatureDevelopComponent', () => {
  let component: FeatureDevelopComponent;
  let fixture: ComponentFixture<FeatureDevelopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureDevelopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureDevelopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
