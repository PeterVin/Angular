import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-observer2',
  templateUrl: './observer2.component.html',
  styleUrls: ['./observer2.component.css']
})
export class Observer2Component implements OnInit, OnDestroy { 
  public subscription$: Subscription;

  constructor() { }

  ngOnInit() {
    timer(1000).subscribe(n => console.log(n));
  }

  public ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}