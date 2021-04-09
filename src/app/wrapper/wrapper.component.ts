import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit {

  @Input() chosenFruit: string;

  @Input() fruits: string[];

  @Output() changeFruit = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  setValue(value) {
    this.changeFruit.emit(value);
  }
}
