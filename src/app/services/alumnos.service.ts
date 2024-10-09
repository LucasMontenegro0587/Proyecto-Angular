import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  // Simulación de alumnado (lo puedo traer de una API o de un archivo .JSON)
  private alumnos = [
    { id: 1, nombre: 'Lucas Leonel', apellido: 'Montenegro Burgos'},
    { id: 2, nombre: 'Martín Emiliano', apellido: 'Bruno'},
    { id: 3, nombre: 'Demetria Devonne', apellido: 'Lovato'},
    { id: 4, nombre: 'Victoria', apellido: 'Pedretti'},
    { id: 5, nombre: 'Chloe', apellido: 'Lewis'},
  ];

  constructor() {}

  getAlumnos(): Observable<any[]> {
    return of(this.alumnos);
  }
}
