import { Component, NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'; 
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'task-manager';
  public name = 'Sanyi';
  public id = 10;
  public isImportant = false;

  gombnyomas() {
    console.log("Hello");
  }
  first: number;
  second: number;
  sumOfTwo: number;

  ngOnInit(): void {}

  sum() {
    console.log(Number(this.first) + Number(this.second))
    return this.sumOfTwo
  }
  public onInput (event: any) {
    console.log(event)
  }
   onSum() {
     this.sumOfTwo = (Number(this.first) + Number(this.second))
   }

   input = ''
   bele: string

   
   
   moreThanTen(): boolean {
     this.input.length>10
     return true;
   }

   bevitt (input) {
    if (input.length > 10){
      this.bele=input
     return this.bele;
    }
   }
  

   isAllowAdd= false;
  public toggleAllow() {
   this.isAllowAdd = !this.isAllowAdd;
  }

}
