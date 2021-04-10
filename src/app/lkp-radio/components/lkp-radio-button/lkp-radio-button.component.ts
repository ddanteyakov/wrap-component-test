import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lkp-radio-button',
  templateUrl: './lkp-radio-button.component.html',
})
export class LkpRadioButtonComponent implements OnInit {
  @Input() checked = false;
  @Input() value: any;

  constructor() { }

  ngOnInit() {
  }

}
