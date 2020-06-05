import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { WorkersComponent } from './workers/workers.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button'
import {RouterModule, Routes } from "@angular/router";
import {MatTabsModule} from '@angular/material/tabs';

const myRoutes: Routes = [
  { path: "", component: AppComponent },
  { path: "profile", component: ProfileComponent },
  { path: "settings", component: SettingsComponent },
  { path: "workers", component: WorkersComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SettingsComponent,
    WorkersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(myRoutes),
    MatButtonModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
