import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css']
})
export class PhonesComponent implements OnInit{

  samsungDevices = ["S7", "S8", "S9"]
  huaweiDevices = ["P8", "P9", "P20"]

  samsung = "Samsung";
  huawei = "Huawei"

  constructor() { }
  ngOnInit(): void {
  }


}
