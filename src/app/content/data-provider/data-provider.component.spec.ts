import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataProviderComponent } from './data-provider.component';

describe('DataProviderComponent', () => {
  let component: DataProviderComponent;
  let fixture: ComponentFixture<DataProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataProviderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
