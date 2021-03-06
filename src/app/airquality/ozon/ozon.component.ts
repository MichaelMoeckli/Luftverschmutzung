import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-ozon',
  templateUrl: './ozon.component.html',
  styleUrls: ['./ozon.component.scss']
})
export class OzonComponent implements OnInit {

  ozonWert: number;

  constructor(private _data: DataService) {  }

  ngOnInit() {
    this._data.status.subscribe(data => {
      this.ozonWert = data.ozon
    })
  }

}
