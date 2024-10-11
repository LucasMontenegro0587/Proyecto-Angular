import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table'; // Módulo de tabla importado
import { MatIconModule } from '@angular/material/icon'; // Módulo de íconos importado
import { MatButtonModule } from '@angular/material/button'; // Módulo de botones importado

export interface Curso {
  id: number;
  nombre: string;
  descripcion: string;
  duracion: string | number;
}

@Component({
  selector: 'app-lista-cursos',
  standalone: true,
  imports: [
    MatTableModule, // Módulo de tabla
    MatIconModule,  // Módulo de íconos
    MatButtonModule // Módulo de botones
  ],
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.scss']
})
export class ListaCursosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'duracion', 'editar', 'eliminar'];
  cursos: Curso[] = [
    { id: 1, nombre: 'Desarrollo Web', descripcion: 'Curso completo', duracion : '60 horas' },
    { id: 2, nombre: 'JavaScript', descripcion: 'Curso completo', duracion: '45 horas' },
    { id: 3, nombre: 'Angular', descripcion: 'Curso completo', duracion: '50 horas' },
    { id: 4, nombre: 'CoffeeScript', descripcion: 'Curso intermedio', duracion: '40 horas' },
    { id: 5, nombre: 'Nuxt.Js', descripcion: 'Curso inicial', duracion: '25 horas' },
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Cargar cursos desde localStorage
    const storedCursos = localStorage.getItem('cursos');
    if (storedCursos) {
      this.cursos = JSON.parse(storedCursos);
    }
  }

  // Función para editar un curso por ID
  editarCurso(curso: Curso) {
    this.router.navigate(['/abm-cursos', curso.id]);
  }

  // Función para eliminar un curso por ID
  eliminarCurso(id: number) {
    // Eliminar el curso de la lista
    this.cursos = this.cursos.filter(c => c.id !== id);

    // Actualizar localStorage después de eliminar
    localStorage.setItem('cursos', JSON.stringify(this.cursos));

    // Mostrar mensaje de confirmación (opcional)
    alert('Curso eliminado exitosamente');
  }
}