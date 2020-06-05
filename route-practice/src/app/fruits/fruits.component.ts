import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  applePieces: number;
  pearPieces=  30300000;
  peachPieces = 42;

  ngOnInit(): void {
  }

  onApple() {
    this.router.navigate(["apple"], {queryParams: { applePieces: 666 } });
  }

  onPeach() {
    this.router.navigate(["peach"], {queryParams: {peachPieces: this.peachPieces } });
  }

  onPear() {
    this.router.navigate(["pear"], {queryParams: { pearPieces: this.pearPieces } });
  }

}
