import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { CarsComponent } from './cars/cars.component';
import {MatSelectModule} from '@angular/material/select'; 
import { FormsModule } from '@angular/forms';
import { FilterComponent } from './filter/filter.component';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CarsComponent,
    FilterComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatSelectModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
