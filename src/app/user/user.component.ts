import { Component, OnInit } from '@angular/core';
import { AlumnosService } from '../services/alumnos.service';
import { CursosService } from '../services/cursos.service';
import { InscripcionesService } from '../services/inscripciones.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  alumnos: any[] = [];
  cursos: any[] = [];

  constructor(
    private alumnosService: AlumnosService, 
    private cursosService: CursosService,
    private inscripcionesService: InscripcionesService,
  ) {}

  ngOnInit(): void {
    this.alumnosService.getAlumnos().subscribe(data => {
      this.alumnos = data;
    });
    
    this.cursosService.getCursos().subscribe(data => {
      this.cursos = data;
    });
  }

  inscribir(alumnoId: number, cursoId: number) {
    this.inscripcionesService.inscribir(alumnoId, cursoId); // Usar el servicio inyectado
  }

  desinscribir(alumnoId: number, cursoId: number) {
    this.inscripcionesService.desinscribir(alumnoId, cursoId); // Usar el servicio inyectado
  }
}
