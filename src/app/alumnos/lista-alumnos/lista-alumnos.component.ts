import { Component, OnInit } from '@angular/core';

export interface Alumno {
  id: number;
  nombre: string;
  apellido: string;
  curso: string;
}

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss']
})
export class ListaAlumnosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'curso'];
  alumnos: Alumno[] = [
    { id: 1, nombre: 'Lucas Leonel', apellido: 'Montenegro Burgos', curso: 'Angular' },
    { id: 2, nombre: 'Martín Emiliano', apellido: 'Bruno', curso: 'Desarrollo Web' },
    { id: 3, nombre: 'Demetria Devonne', apellido: 'Lovato', curso: 'Desarrollo Web' },
    { id: 4, nombre: 'Victoria', apellido: 'Pedretti', curso: 'Desarrollo Web' },
    { id: 5, nombre: 'Chloe', apellido: 'Lewis', curso: 'CoffeeScript' },

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
