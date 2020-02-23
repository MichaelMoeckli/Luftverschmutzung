import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-air-temperature',
  templateUrl: './air-temperature.component.html',
  styleUrls: ['./air-temperature.component.scss']
})
export class AirTemperatureComponent implements OnInit {

  temp: number;

  constructor(private _data: DataService) {  }

  ngOnInit() {
    this._data.status.subscribe(data => {
      this.temp = data.lufttemperatur
    })
  }
}
