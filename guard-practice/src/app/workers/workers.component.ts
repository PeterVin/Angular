import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}


  ngOnInit(): void {
  }

  onClick() {
    this.router.navigate([""], { queryParams: { name: "workers" } });
  }
}