import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface Curso {
  id: number;
  nombre: string;
  descripcion: string;
  duracion: string | number;
}

@Component({
  selector: 'app-lista-cursos',
  standalone: true,
  imports: [],
  templateUrl: './lista-cursos.component.html',
  styleUrl: './lista-cursos.component.scss'
})
export class ListaCursosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'duracion', 'editar', 'eliminar'];
  cursos: Curso[] = [
    { id: 1, nombre: 'Desarrollo Web', descripcion: 'Curso completo', duracion : '60 horas' },
    { id: 2, nombre: 'JavaScript', descripcion: 'Curso completo', duracion: '45 horas' },
    { id: 3, nombre: 'Angular', descripcion: 'Curso completo', duracion: '50 horas' },
    { id: 3, nombre: 'CoffeeScript', descripcion: 'Curso intermedio', duracion: '40 horas' },
    { id: 3, nombre: 'Nuxt.Js', descripcion: 'Curso inicial', duracion: '25 horas' },
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  editarCurso(curso: Curso) {
    this.router.navigate(['/abm-cursos', curso.id]);
  }

  eliminarCurso(id: number) {
    this.cursos = this.cursos.filter(c => c.id !== id);
  }
}
