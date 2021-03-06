import { Component, OnInit } from '@angular/core';
import { UserService } from '../userService'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService) { }

  users = [];
  ngOnInit() {
    this.users = this.userService.getUser()
  }

}
