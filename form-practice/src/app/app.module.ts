import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { FruitsComponent } from './fruits/fruits.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input'; 
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { UserListComponent } from './user-list/user-list.component';
import { NewUserComponent } from './new-user/new-user.component'; 

@NgModule({
  declarations: [
    AppComponent,
    FruitsComponent,
    UserListComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    BrowserAnimationsModule, 
    MatButtonModule, 
    MatInputModule,
    MatCardModule,
    MatSelectModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
