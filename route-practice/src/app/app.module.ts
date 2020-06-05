import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FruitsComponent } from './fruits/fruits.component';
import { AppleComponent } from './apple/apple.component';
import { PearComponent } from './pear/pear.component';
import { PeachComponent } from './peach/peach.component';
import {RouterModule, Routes } from "@angular/router";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button'
import { from } from 'rxjs';

const myRoutes: Routes = [
  { path: "", component: FruitsComponent },
  { path: "apple", component: AppleComponent },
  { path: "pear", component: PearComponent },
  { path: "peach", component: PeachComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    FruitsComponent,
    AppleComponent,
    PearComponent,
    PeachComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(myRoutes),
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

