import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-abm-alumnos',
  templateUrl: './abm-alumnos.component.html',
  styleUrls: ['./abm-alumnos.component.scss']
})
export class AbmAlumnosComponent implements OnInit {

  alumnoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.alumnoForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      curso: ['', Validators.required]
    });
  }

  ngOnInit(): void { }

  onSubmit() {
    if (this.alumnoForm.valid) {
      console.log(this.alumnoForm.value);
      // Debería agregar la lógica para guardar los datos del alumno
    }
  }
}
