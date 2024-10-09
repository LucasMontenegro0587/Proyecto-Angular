import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  // Simulación de cursos disponibles (lo puedo llamar de una API o archivo .JSON)
  private cursos = [
    { id: 1, nombre: 'Desarrollo Web', descripcion: 'Curso completo', duracion : '60 horas' },
    { id: 2, nombre: 'JavaScript', descripcion: 'Curso completo', duracion: '45 horas' },
    { id: 3, nombre: 'Angular', descripcion: 'Curso completo', duracion: '50 horas' },
    { id: 3, nombre: 'CoffeeScript', descripcion: 'Curso intermedio', duracion: '40 horas' },
    { id: 3, nombre: 'Nuxt.Js', descripcion: 'Curso inicial', duracion: '25 horas' },
  ];

  constructor() {}

  getCursos(): Observable<any[]> {
    return of(this.cursos);
  }
}
