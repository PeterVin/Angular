import { Injectable } from "@angular/core";

@Injectable ({
  providedIn: "root"
})

export class UserService {
  constructor() { }
  user = [{
      id: 1,
      name: 'Máté',
      gender: 'male'
    },{
      id: 2,
      name: 'Ferina',
      gender: 'female'
    },{
      id: 3,
      name: 'Robi',
      gender: 'male'
    }
  ];
  getUser() {
    return this.user
  }
}
