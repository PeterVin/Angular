import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "ngIf-ngClass-ngStyle";

  text = '';
  check: boolean;
  pColor = "";

  onChangeCategorySelect(event) {
    this.pColor = event.target.value;
  }

  setColor() {
    if (this.text.length >= 15 && this.text.length > 1) {
      return this.pColor;
    } else {
      return "white";
    }
  }
}


/*
Készíts egy textarea input mezőt.
    • Alá egy <p> tag-ben jelenítsd meg a beírt értéket abban az esetben, ha a beírt karakterek száma eléri a 10-et.
    • A textarea mellé tegyél egy checkboxot, aminek editable a neve. Amikor be van pipálva csak akkor lehessen írni a textareaba, egyébként disabled legyen.
    • Készíts egy select-et, amiben adj meg 3 színt. Az itt kiválasztott szín legyen a <p> tag-ben megjelent szöveg színe. 
      Azonban csak akkor állítsa be ezt a színt, ha a szöveg hossza eléri a 15 karaktert. Egyébként fehér legyen
    • Az egész eddigieket egy material kártyában jelenítsd meg és az inputoknak is adja material kinézetet
    • A kártyának legyen fejléce, amiben megadhatsz egy tetszőleges címet
    • A checkbox mellé tegyél egy fontawesome info ikont, aminek ha fölé viszed az egeret tooltipben megjelenik egy információ: 
      “Csak akkor tölthető ki a mező ha be van pipálva”*/