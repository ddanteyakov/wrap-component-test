import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lkp-radio-group',
  templateUrl: './lkp-radio-group.component.html',
})
export class LkpRadioGroupComponent implements OnInit {
  @Input() value: any;

  constructor() { }

  ngOnInit() {
  }

}
