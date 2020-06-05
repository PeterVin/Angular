import { Component } from '@angular/core';
import { LiteralArrayExpr } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'strings';

  animals = ["Elephant", "Monkey", "Lion", "Dog", "Cat"]
  fruits = ["Apple", "Peach", "Strawberry", "Blackberry", "Strawberry"]

array = []

  onChange(event: any) {
    if (this.animals == event.target.value) {
     this.array = this.animals
    }
    if (this.fruits == event.target.value) {
      this.array = this.fruits
    }
  }

  removeItem(value) {
      const index: number = this.array.indexOf(value);
      this.array.splice(index, 1);
    }        

    insert: String;
    add() {
      this.array.push(this.insert)
    }

    getColor(i) {
      if (i%2 !== 0) {
        return "grey";
      }
    }
  }



