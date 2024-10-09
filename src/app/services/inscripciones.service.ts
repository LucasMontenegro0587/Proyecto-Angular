import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InscripcionesService {

  private inscripciones: any[] = [];

  constructor() {}

  inscribir(alumnoId: number, cursoId: number) {
    this.inscripciones.push({ alumnoId, cursoId });
  }

  desinscribir(alumnoId: number, cursoId: number) {
    this.inscripciones = this.inscripciones.filter(
      inscripcion => inscripcion.alumnoId !== alumnoId || inscripcion.cursoId !== cursoId
    );
  }

  getInscripciones() {
    return this.inscripciones;
  }
}
