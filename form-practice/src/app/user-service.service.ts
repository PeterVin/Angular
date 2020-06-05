import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  user$ = new Observable(user => {
    user.next({
      name: 'Jancsi',
      gender: 'male'
    });
  });
  ngOnInit() {
    this.user$.subscribe(user => {
      console.log('user', user);
    });
  }

  constructor() { }
  getUser() {}
  deleteUser() {}
  editUser() {}
  newUser() {

    
  }
}
