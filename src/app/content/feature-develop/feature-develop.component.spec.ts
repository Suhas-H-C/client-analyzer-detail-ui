import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { EventEmitter } from '@angular/core';

import { FeatureDevelopComponent } from './feature-develop.component';

describe('FeatureDevelopComponent', () => {
  let component: FeatureDevelopComponent;
  let fixture: ComponentFixture<FeatureDevelopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureDevelopComponent ],
      imports: [
        RouterModule.forRoot([])
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureDevelopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create',()=>{
    expect(component).toBeTruthy();
  })

  it('should have url', () => {
    expect(component.currentUrl).toBe(window.location.href);
  });
});
