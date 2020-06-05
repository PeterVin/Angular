import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-engineer',
  templateUrl: './engineer.component.html',
  styleUrls: ['./engineer.component.css']
})
export class EngineerComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  name: string;

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.name = params.name;
    })
  }

  onClick() {
    this.router.navigate([""], { queryParams: { name: "engineer" } });
  }
}
