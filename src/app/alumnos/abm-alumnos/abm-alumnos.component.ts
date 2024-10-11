import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

export interface Alumno {
  id: number;
  nombre: string;
  apellido: string;
}

@Component({
  selector: 'app-abm-alumnos',
  templateUrl: './abm-alumnos.component.html',
  styleUrls: ['./abm-alumnos.component.scss']
})
export class AbmAlumnosComponent implements OnInit {

  alumnoForm: FormGroup;
  alumnos: Alumno[] = [];
  alumnoId: number | null = null;

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {
    this.alumnoForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.alumnoId = Number(this.route.snapshot.paramMap.get('id'));

    // Carga de alumnos desde el localStorage
    const storedAlumnos = localStorage.getItem('alumnos');
    if (storedAlumnos) {
      this.alumnos = JSON.parse(storedAlumnos);
    } else {
      // Si no hay alumnos en localStorage, se inicializa con algunos datos
      this.alumnos = [
        { id: 1, nombre: 'Lucas Leonel', apellido: 'Montenegro Burgos'},
        { id: 2, nombre: 'Martín Emiliano', apellido: 'Bruno'},
        { id: 3, nombre: 'Demetria Devonne', apellido: 'Lovato'},
        { id: 4, nombre: 'Victoria', apellido: 'Pedretti'},
        { id: 5, nombre: 'Chloe', apellido: 'Lewis'},
      ];
      localStorage.setItem('alumnos', JSON.stringify(this.alumnos));
    }

    if (this.alumnoId) {
      this.cargarDatosAlumno(this.alumnoId);
    }
  }

  cargarDatosAlumno(id: number) {
    const alumno = this.alumnos.find(a => a.id === id);
    if (alumno) {
      this.alumnoForm.patchValue({
        nombre: alumno.nombre,
        apellido: alumno.apellido
      });
    }
  }

  onSubmit() {
    if (this.alumnoForm.valid) {
      if (this.alumnoId) {
        // Lógica para actualizar los datos del alumno ya inscripto
        const alumno = this.alumnos.find(a => a.id === this.alumnoId);
        if (alumno) {
          alumno.nombre = this.alumnoForm.value.nombre;
          alumno.apellido = this.alumnoForm.value.apellido;
          
          // Actualizar alumnos en localStorage
          localStorage.setItem('alumnos', JSON.stringify(this.alumnos));
          
          // Mensaje de éxito
          alert('Alumno actualizado exitosamente');
        }
      } else {
        // Lógica para agregar un nuevo alumno/a
        const newId = this.alumnos.length > 0 ? this.alumnos[this.alumnos.length - 1].id + 1 : 1;
        this.alumnos.push({
          id: newId,
          nombre: this.alumnoForm.value.nombre,
          apellido: this.alumnoForm.value.apellido
        });

        // Guardar nuevo alumno en el localStorage
        localStorage.setItem('alumnos', JSON.stringify(this.alumnos));

        // Mensaje de éxito
        alert('Alumno agregado exitosamente');
      }

      // Reiniciar el formulario y el alumnoId
      this.alumnoForm.reset();
      this.alumnoId = null;
    }
  }
}
