import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}


  ngOnInit(): void {
  }

  onClick() {
    this.router.navigate([""], { queryParams: { name: "profile" } });
  }

}