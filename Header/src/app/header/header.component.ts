import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {  Routes } from '@angular/router';
import { TeacherComponent } from '../teacher/teacher.component';
import { HomeComponent } from '../home/home.component';
import { DeveloperComponent } from '../developer/developer.component';
import { EngineerComponent } from '../engineer/engineer.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  links = ["home", "developer", "engineer", "teacher"];
  activeLink = this.links[0];
  background = '';

 navLinks = [
  { path: '', label: "Home", component: HomeComponent },
  { path: 'developer', label: "Developer", component: DeveloperComponent },
  { path: 'engineer', label: "Engineer", component: EngineerComponent },
  { path: 'teacher', label: "Teacher", component: TeacherComponent }
]

  ngOnInit() {}
/* 
  onHome() {
    this.router.navigate([""]);
  }

  onDev() {
    this.router.navigate(["/developer"]);
  }

  onEng() {
    this.router.navigate(["/engineer"]);
  }

  onTeach() {
    this.router.navigate(["/teacher"]);
  }
 */
  toggleBackground() {
    this.background = this.background ? '' : 'blue';
  }
}
