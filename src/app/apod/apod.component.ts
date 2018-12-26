import { Component, OnInit } from '@angular/core';
import { NasaApiService } from '../shared/services/nasa-api.service';
import { Apod } from '../shared/model/apod';

@Component({
  selector: 'fd-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.css']
})
export class ApodComponent implements OnInit {
  apod: Apod;
  error: string;
  constructor(private _nasaApi: NasaApiService) {}

  ngOnInit() {
    this._nasaApi.getApod().subscribe(
      data => {
        this.apod = data;
        console.log(this.apod);
      },
      error => {
        this.error = 'Error al conectar con el servidor.';
      }
    );
  }
}
