import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'wrap-material-radio';
  chosenFruit: string;

  fruits: string[] = [
    "banana",
    "apple",
    "orange"
  ]

  public ngOnInit(): void {
    this.chosenFruit = 'apple';
  }

  setValue(value) {
    this.chosenFruit = value;
  }
}
