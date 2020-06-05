import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'protractor';
import { ConditionalExpr } from '@angular/compiler';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.piece = 0;
  }

  fruits = ["Alma", "Barack", "Körte"]

  piece: number;

  handlePiece(value) {
    this.piece=value;
    console.log(this.piece);
  }

  handleFruits(value) {
    this.fruits=value;
  }

}
