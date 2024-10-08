import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-abm-cursos',
  templateUrl: './abm-cursos.component.html',
  styleUrls: ['./abm-cursos.component.scss']
})
export class AbmCursosComponent implements OnInit {

  cursoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.cursoForm = this.fb.group({
      nombre: ['', Validators.required],
      duracion: ['', Validators.required]
    });
  }

  ngOnInit(): void { }

  onSubmit() {
    if (this.cursoForm.valid) {
      console.log(this.cursoForm.value);
      // Debería agregar la lógica para guardar los datos del curso
    }
  }
}
