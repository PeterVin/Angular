import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngFor';

  arr = [1, 2, 3, 4, 5];
  sumOdd = 0;
  sumEven = 0;
  isSmaller: string;

  getColor(i) {
    if (i === 2) {
      return "green";
    }
  }

  insert: number;

  add() {
    this.arr.push(this.insert)
  }

  plus() {
    for (let i = 0; i < this.arr.length; i++) {
      this.arr[i] +=2
    }
  }
  enable= true;

  enableEdit():boolean{
    return this.enable = !this.enable;
  }
}
