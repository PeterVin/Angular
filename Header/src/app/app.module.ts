import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DeveloperComponent } from './developer/developer.component';
import { EngineerComponent } from './engineer/engineer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { TeacherComponent } from './teacher/teacher.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button'
import {RouterModule, Routes } from "@angular/router";
import {MatTabsModule} from '@angular/material/tabs'; 


const myRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "developer", component: DeveloperComponent },
  { path: "engineer", component: EngineerComponent },
  { path: "teacher", component: TeacherComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    DeveloperComponent,
    EngineerComponent,
    HeaderComponent,
    HomeComponent,
    TeacherComponent
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
