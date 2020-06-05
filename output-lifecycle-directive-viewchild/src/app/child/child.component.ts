import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output() piece = new EventEmitter();
  EditedPiece = 0;

  @Output() fruits = new EventEmitter();
  arr = [];

  constructor() { }

  insert: String;

  ngOnInit(): void {
  }

  public addValue() {
    this.EditedPiece = this.EditedPiece + 1;
    this.piece.emit(this.EditedPiece);
  }

  public takeValue() {
    this.EditedPiece = this.EditedPiece -1;
    this.piece.emit(this.EditedPiece);
  }

  addText() {
    this.arr.push(this.insert)
  }

}
