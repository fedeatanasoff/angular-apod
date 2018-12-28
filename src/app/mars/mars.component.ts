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
  cameras: string[] = ['FHAZ', 'RHAZ', 'MAST', 'CHEMCAM', 'NAVCAM'];
  currentCamera: string;

  constructor(private _http: NasaApiService) {}

  ngOnInit() {
    this.currentCamera = this.cameras[0];
    this.refreshView(this.currentCamera);
  }

  onSelectCamera(camera: string) {
    this.refreshView(camera);
  }

  private refreshView(camera: string) {
    this._http.getMarsImages(camera).subscribe(data => {
      this.marsImage = data.photos;
    });
  }
}
