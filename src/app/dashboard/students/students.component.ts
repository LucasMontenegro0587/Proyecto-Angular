import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface Alumno {
  id: number;
  nombre: string;
  apellido: string;
  curso: string;
}

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'curso', 'acciones'];
  alumnos: Alumno[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Cargar alumnos desde localStorage
    const storedAlumnos = localStorage.getItem('alumnos');
    if (storedAlumnos) {
      this.alumnos = JSON.parse(storedAlumnos);
    } else {
      // Inicializar con datos de ejemplo si no hay alumnos guardados
      this.alumnos = [
        { id: 1, nombre: 'Lucas Leonel', apellido: 'Montenegro Burgos', curso: 'Angular' },
        { id: 2, nombre: 'Martín Emiliano', apellido: 'Bruno', curso: 'Desarrollo Web' },
        { id: 3, nombre: 'Demetria Devonne', apellido: 'Lovato', curso: 'Desarrollo Web' },
        { id: 4, nombre: 'Victoria', apellido: 'Pedretti', curso: 'Desarrollo Web' },
        { id: 5, nombre: 'Chloe', apellido: 'Lewis', curso: 'CoffeeScript' }
      ];

      // Guardar alumnos de ejemplo en localStorage
      localStorage.setItem('alumnos', JSON.stringify(this.alumnos));
    }
  }

  editarAlumno(alumno: Alumno) {
    // Navegar al componente de ABM de alumnos pasando el ID del alumno
    this.router.navigate(['/abm-alumnos', alumno.id]);
  }

  eliminarAlumno(id: number) {
    // Filtrar el alumno a eliminar
    this.alumnos = this.alumnos.filter(a => a.id !== id);

    // Actualizar localStorage después de eliminar
    localStorage.setItem('alumnos', JSON.stringify(this.alumnos));

    // Mensaje de confirmación (podría usar un modal)
    alert('Alumno eliminado exitosamente');
  }
}
