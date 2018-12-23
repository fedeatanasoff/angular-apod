import { Component, OnInit } from '@angular/core';
import { MarsImage } from '../shared/model/mars-image';
import { NasaApiService } from '../shared/services/nasa-api.service';

@Component({
  selector: 'fd-mars',
  templateUrl: './mars.component.html',
  styleUrls: ['./mars.component.css']
})
export class MarsComponent implements OnInit {
  marsImage: MarsImage[];
  cameras: string[] = [
    'FHAZ',
    'RHAZ',
    'MAST',
    'CHEMCAM',
    'MAHLI',
    'MARDI',
    'NAVCAM'
  ];

  constructor(private _http: NasaApiService) {}

  ngOnInit() {
    this._http.getMarsImages('CHEMCAM').subscribe(result => {
      this.marsImage = result.photos;
    });
  }
}
