import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-abm-inscripciones',
  templateUrl: './abm-inscripciones.component.html',
  styleUrls: ['./abm-inscripciones.component.scss']
})
export class AbmInscripcionesComponent implements OnInit {

  inscripcionForm: FormGroup;

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
      console.log(this.inscripcionForm.value);
      // Debería agregar la lógica para guardar los datos de la inscripción
    }
  }
}
