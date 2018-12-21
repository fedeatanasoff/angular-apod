import { Injectable } from '@angular/core';
import { Apod } from '../model/apod';

@Injectable({
  providedIn: 'root'
})
export class NasaApiService {
  private readonly DATA: Apod = {
    fecha: '2018-12-19',
    explanation:
      'Meteors can be colorful. While the human eye usually cannot discern many colors, cameras often can. Pictured is a Geminid captured by camera during last week\'s meteor shower that was not only impressively bright, but colorful. The radiant grit cast off by asteroid 3200 Phaethon blazed a path across Earth\'s atmosphere longer than 60 times the angular diameter of the Moon. Colors in meteors usually originate from ionized elements released as the meteor disintegrates, with blue-green typically originating from magnesium, calcium radiating violet, and nickel glowing green. Red, however, typically originates from energized nitrogen and oxygen in the Earth\'s atmosphere.  This bright meteoric fireball was gone in a flash -- less than a second -- but it left a wind-blown ionization trail that remained visible for several minutes, the start of which can be seen here.   Gallery: Geminid Meteors 2018',
    hdurl: 'https://apod.nasa.gov/apod/image/1812/GeminidColors_Rowe_2048.jpg',
    media_type: 'image',
    service_version: 'v1',
    titulo: 'A Rainbow Geminid Meteor',
    url: 'https://apod.nasa.gov/apod/image/1812/GeminidColors_Rowe_1080.jpg'
  };
  constructor() {}

  getApod(): Apod {
    return this.DATA;
  }
}
