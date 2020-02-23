import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-particulate-matter',
  templateUrl: './particulate-matter.component.html',
  styleUrls: ['./particulate-matter.component.scss']
})
export class ParticulateMatterComponent implements OnInit {

  feinstaubWert: number;

  constructor(private _data: DataService) {  }

  ngOnInit() {
    this._data.status.subscribe(data => {
      this.feinstaubWert = data.feinstaub
    })
  }

}
