import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObserverService {

  constructor() { }

counter() {
  const custom = new Observable(observer => {
    let counter = 0;
    setInterval (() => {
    observer.next(counter);
    counter++;
    }, 1000);
    });
  }
}