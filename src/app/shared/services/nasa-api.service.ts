import { Injectable } from '@angular/core';
import { Apod } from '../model/apod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_KEY = `eVR20t0hT1UFQjUwRKR5wFyTtsX4YTBvEGsQ8KvT`;
const APOD_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;
const MARS_URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=`;

@Injectable({
  providedIn: 'root'
})
export class NasaApiService {
  constructor(private _httpClient: HttpClient) {}

  getApod(): Observable<Apod> {
    return this._httpClient.get<Apod>(APOD_URL);
  }

  getMarsImages(camara: string): Observable<any> {
    return this._httpClient.get(`${MARS_URL}${camara}&api_key=${API_KEY}`);
  }
}
