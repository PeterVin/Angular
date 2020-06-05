import { Component, OnInit, OnDestroy } from '@angular/core';
import { timer, Subscription } from 'rxjs';
import { ObserverService } from '../observer.service';

@Component({
  selector: 'app-observer1',
  templateUrl: './observer1.component.html',
  styleUrls: ['./observer1.component.css']
})
export class Observer1Component implements OnInit, OnDestroy { 
  public subscription$: Subscription;

  constructor(private observable) { }
  custom = new ObserverService().counter;
  ngOnInit() {
    //timer(1000).subscribe(n => console.log(n));

    this.subscription$ = this.custom.subscribe(
      n => {
      console.log(n);
      },
      error => {
      console.log(error);
      },
      () => {
      console.log('DONE!');
      }
      );
  }

  public ngOnDestroy(): void {
    this.subscription$.unsubscribe();
    }
  }