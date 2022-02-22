import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-accordion-basics',
  templateUrl: './accordion-basics.component.html',
  styleUrls: ['./accordion-basics.component.css']
})
export class AccordionBasicsComponent implements OnInit {

  accordionTitle: string = "sample-accordion"
  accordionDescription: string = "contains sample lorem paragraph"

  changeAppTitle:string="Cliked from accordion"

  @Output('changeTitle')
  sendMessage = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  buttonClickedForEvent(){
    this.sendMessage.emit("Clicked from accordion")
  }
}
