import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'wrap-material-radio';
  chosenFruit: string;

  fruits: string[] = [
    "banana",
    "apple",
    "orange"
  ]

  setValue(value) {
    this.chosenFruit = value;
  }
}
