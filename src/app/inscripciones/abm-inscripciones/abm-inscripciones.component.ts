import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export interface Inscripcion {
  alumno: string;
  curso: string;
  fecha: string;
}

@Component({
  selector: 'app-abm-inscripciones',
  templateUrl: './abm-inscripciones.component.html',
  styleUrls: ['./abm-inscripciones.component.scss']
})
export class AbmInscripcionesComponent implements OnInit {

  inscripcionForm: FormGroup;
  inscripciones: Inscripcion[] = [];

  constructor(private fb: FormBuilder) {
    this.inscripcionForm = this.fb.group({
      alumno: ['', Validators.required],
      curso: ['', Validators.required],
      fecha: ['', Validators.required]
    });
  }

  ngOnInit(): void { }

  onSubmit() {
    if (this.inscripcionForm.valid) {
      const nuevaInscripcion: Inscripcion = {
        alumno: this.inscripcionForm.value.alumno,
        curso: this.inscripcionForm.value.curso,
        fecha: this.inscripcionForm.value.fecha
      };
      // Guardar la nueva inscripción (podría mejorarlo)
      this.inscripciones.push(nuevaInscripcion);
      console.log('Inscripción guardada:', nuevaInscripcion);
      // Limpiar el formulario
      this.inscripcionForm.reset();
    }
  }
}
