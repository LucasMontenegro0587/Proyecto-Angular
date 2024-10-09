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
  alumnos: Alumno[] = [
    { id: 1, nombre: 'Lucas Leonel', apellido: 'Montenegro Burgos'},
    { id: 2, nombre: 'Martín Emiliano', apellido: 'Bruno'},
    { id: 3, nombre: 'Demetria Devonne', apellido: 'Lovato'},
    { id: 4, nombre: 'Victoria', apellido: 'Pedretti'},
    { id: 5, nombre: 'Chloe', apellido: 'Lewis'},
  ];
  alumnoId: number | null = null;

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {
    this.alumnoForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.alumnoId = Number(this.route.snapshot.paramMap.get('id'));
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
        }
      } else {
        // Lógica para agregar un nuevo alumno/a
        const newId = this.alumnos.length + 1;
        this.alumnos.push({
          id: newId,
          nombre: this.alumnoForm.value.nombre,
          apellido: this.alumnoForm.value.apellido
        });
      }
    }
  }
}
