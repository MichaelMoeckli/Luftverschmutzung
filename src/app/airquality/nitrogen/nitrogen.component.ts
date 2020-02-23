import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-nitrogen',
  templateUrl: './nitrogen.component.html',
  styleUrls: ['./nitrogen.component.scss']
})
export class NitrogenComponent implements OnInit {
  
  stickstoffWert: number;

  constructor(private _data: DataService) {  }

  ngOnInit() {
    this._data.status.subscribe(data => {
      this.stickstoffWert = data.stickstoffdioxid
    })
  }

}
