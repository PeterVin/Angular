import { Component, OnInit} from '@angular/core';
import {UserService} from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'guard-practice';
  public radio = 'user';

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.setService();
  }

  setService() {
    this.userService.setBehaviorSubject(this.radio);
  }
}
