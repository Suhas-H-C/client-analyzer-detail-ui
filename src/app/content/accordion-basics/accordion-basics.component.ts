import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion-basics',
  templateUrl: './accordion-basics.component.html',
  styleUrls: ['./accordion-basics.component.css']
})
export class AccordionBasicsComponent implements OnInit {

  accordionTitle: string = "sample-accordion"
  accordionDescription: string = "contains sample lorem paragraph"

  constructor() { }

  ngOnInit(): void {
  }

}
