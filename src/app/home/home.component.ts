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

  constructor(private _nasaApi: NasaApiService) {}

  ngOnInit() {
    this.apod = this._nasaApi.getApod();
  }
}
