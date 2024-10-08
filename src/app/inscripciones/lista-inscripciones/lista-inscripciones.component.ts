import { Component, OnInit } from '@angular/core';

export interface Inscripcion {
  id: number;
  alumno: string;
  curso: string;
  fecha: string;
}

@Component({
  selector: 'app-lista-inscripciones',
  templateUrl: './lista-inscripciones.component.html',
  styleUrls: ['./lista-inscripciones.component.scss']
})
export class ListaInscripcionesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'alumno', 'curso', 'fecha'];
  inscripciones: Inscripcion[] = [
    { id: 1, alumno: 'Lucas Leonel Montenegro Burgos', curso: 'Angular', fecha: '2024-10-06' },
    { id: 2, alumno: 'Martín Emiliano Bruno', curso: 'Desarrollo Web', fecha: '2024-10-07' },
    { id: 3, alumno: 'Demetria Devonne Lovato', curso: 'Desarrollo Web', fecha: '2024-10-07' },
    { id: 4, alumno: 'Victoria Pedretti', curso: 'Desarrollo Web', fecha: '2024-10-07' },
    { id: 5, alumno: 'Chloe Lewis', curso: 'CoffeeScript', fecha: '2024-11-01' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
