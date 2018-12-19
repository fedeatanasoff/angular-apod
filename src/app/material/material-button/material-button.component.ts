import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fd-material-button',
  templateUrl: './material-button.component.html',
  styleUrls: ['./material-button.component.css']
})
export class MaterialButtonComponent implements OnInit {
  formulario = {
    valido: true
  };
  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.formulario.valido = false;
      console.log('validando el form');
    }, 3000);
  }

  onClick(evento): void {
    console.log(evento);
  }
}
