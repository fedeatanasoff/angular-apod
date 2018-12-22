import { Component, OnInit } from '@angular/core';
import { Apod } from '../shared/model/apod';
import { NasaApiService } from '../shared/services/nasa-api.service';

@Component({
  selector: 'fd-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
