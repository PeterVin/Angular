import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';
import { WorkersComponent } from './workers/workers.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  title = 'guard-practice';

  links = ["", "settings", "workers", "profile"];
  activeLink = this.links[0];
  background = '';

 navLinks = [
  { path: '', label: "Home", component: AppComponent },
  { path: 'settings', label: "Settings", component: SettingsComponent },
  { path: 'profile', label: "Profile", component: ProfileComponent },
  { path: 'workers', label: "Workers", component: WorkersComponent }
]

  ngOnInit() {}

    toggleBackground() {
      this.background = this.background ? '' : 'blue';
    }
}
