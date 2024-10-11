import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

export interface Curso {
  id: number;
  nombre: string;
  duracion: string;
}

@Component({
  selector: 'app-abm-cursos',
  templateUrl: './abm-cursos.component.html',
  styleUrls: ['./abm-cursos.component.scss']
})
export class AbmCursosComponent implements OnInit {

  cursoForm: FormGroup;
  cursos: Curso[] = [];
  cursoId: number | null = null;

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {
    // Formulario definido con los campos necesarios
    this.cursoForm = this.fb.group({
      nombre: ['', Validators.required],
      duracion: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Cargar cursos desde localStorage
    const storedCursos = localStorage.getItem('cursos');
    if (storedCursos) {
      this.cursos = JSON.parse(storedCursos);
    }

    // Verifica si hay un ID de curso en la URL para editar
    this.cursoId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.cursoId) {
      this.cargarDatosCurso(this.cursoId);
    }
  }

  cargarDatosCurso(id: number) {
    // Carga los datos del curso para editar
    const curso = this.cursos.find(c => c.id === id);
    if (curso) {
      this.cursoForm.patchValue({
        nombre: curso.nombre,
        duracion: curso.duracion
      });
    }
  }

  onSubmit() {
    if (this.cursoForm.valid) {
      if (this.cursoId) {
        // Lógica para actualizar un curso existente
        const curso = this.cursos.find(c => c.id === this.cursoId);
        if (curso) {
          curso.nombre = this.cursoForm.value.nombre;
          curso.duracion = this.cursoForm.value.duracion;
        }
      } else {
        // Lógica para agregar un nuevo curso
        const newId = this.cursos.length + 1;
        this.cursos.push({
          id: newId,
          nombre: this.cursoForm.value.nombre,
          duracion: this.cursoForm.value.duracion
        });
      }

      // Guardar los cursos actualizados en localStorage
      localStorage.setItem('cursos', JSON.stringify(this.cursos));

      // Mensaje de confirmación (podría usar un modal o redirigirlo a otra página)
      alert('Curso guardado exitosamente');

      // Reseteo del formulario después de guardar
      this.cursoForm.reset();
    }
  }
}
