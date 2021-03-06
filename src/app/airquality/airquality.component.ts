import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-airquality',
  templateUrl: './airquality.component.html',
  styleUrls: ['./airquality.component.scss']
})
export class AirqualityComponent implements OnInit {

  constructor(private _data: DataService) {  }

  timestamp: string

  ngOnInit() {
    this._data.status.subscribe(data => {
      this.timestamp = data.timestamp
    })
  }

}
