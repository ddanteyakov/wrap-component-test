import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LkpRadioModule } from './lkp-radio/lkp-radio.module';
import { WrapperComponent } from './wrapper/wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LkpRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
