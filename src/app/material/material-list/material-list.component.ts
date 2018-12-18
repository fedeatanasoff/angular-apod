import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../../shared/model/estudiante';

@Component({
  selector: 'fd-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.css']
})
export class MaterialListComponent implements OnInit {
  estudiante1: Estudiante;
  estudiante2: Estudiante;
  estudiante3: Estudiante;
  lista: Estudiante[];
  readonly DEFAULT_PICTURE =
    'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png';

  constructor() {}

  ngOnInit() {
    console.log('inicializando el componente');
    this.estudiante1 = {
      id: 1,
      nombre: 'lucas',
      ciudad: 'nuñez',
      fotoURL:
        'http://adiarionoticias.com.ar/wp-content/uploads/default-thumb-plus/3b70a6073d1ff7b5f3e56bd1ac58ef332ffcf22c-960x999999.jpg'
    };
    this.estudiante2 = {
      id: 2,
      nombre: 'Camilo Mayada',
      ciudad: 'montevideo',
      fotoURL:
        'https://www.infobae.com/new-resizer/zSO5njfsZSFohzZuW7V2J3_6cmI=/750x0/filters:quality(100)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/06/22144435/Camilo-Mayada-1920.jpg'
    };
    this.estudiante3 = {
      id: 3,
      nombre: 'Rafael Santos Borre',
      ciudad: 'medellin'
      // fotoURL:
      //   'https://www.elintransigente.com/u/fotografias/m/2018/10/9/f800x450-480238_531684_0.jpg'
    };

    this.lista = [this.estudiante1, this.estudiante2, this.estudiante3];
  }
}
