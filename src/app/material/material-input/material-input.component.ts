import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fd-material-input',
  templateUrl: './material-input.component.html',
  styleUrls: ['./material-input.component.css']
})
export class MaterialInputComponent implements OnInit {
  usuario = {
    nombre: 'Ignacio'
  };
  constructor() {}

  ngOnInit() {}
}
