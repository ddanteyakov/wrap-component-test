import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LkpRadioGroupComponent } from './components/lkp-radio-group/lkp-radio-group.component';
import { LkpRadioButtonComponent } from './components/lkp-radio-button/lkp-radio-button.component';
import { MatRadioModule } from '@angular/material';

@NgModule({
  declarations: [LkpRadioGroupComponent, LkpRadioButtonComponent],
  exports: [LkpRadioGroupComponent, LkpRadioButtonComponent],
  imports: [
    CommonModule,
    MatRadioModule,
  ]
})
export class LkpRadioModule { }
