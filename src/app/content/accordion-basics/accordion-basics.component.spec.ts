import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionBasicsComponent } from './accordion-basics.component';

describe('AccordionBasicsComponent', () => {
  let component: AccordionBasicsComponent;
  let fixture: ComponentFixture<AccordionBasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccordionBasicsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
