import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from "@angular/router";
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input'; 
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import {MatListModule} from '@angular/material/list'; 
import { HttpClientModule } from "@angular/common/http";
import {MatDividerModule} from '@angular/material/divider'; 
import {MatTableModule} from '@angular/material/table'; 
import {MatCardModule} from '@angular/material/card';
import { SecondComponent } from './second/second.component';
import { PokemonComponent } from './pokemon/pokemon.component'; 

const myRoutes: Routes = [
  { path: "", component: FirstComponent },
  { path: "pokemons", component: PokemonComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    PokemonComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    HttpClientModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
