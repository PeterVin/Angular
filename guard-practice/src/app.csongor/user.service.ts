import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public behaviorSubject = new BehaviorSubject(null);

  constructor() { }

  setBehaviorSubject(value: string) {
    this.behaviorSubject.next(value);
    console.log(this.behaviorSubject);
  }
}
