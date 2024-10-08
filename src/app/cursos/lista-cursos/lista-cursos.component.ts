import { Component, OnInit } from '@angular/core';

export interface Curso {
  id: number;
  nombre: string;
  duracion: string;
}

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.scss']
})
export class ListaCursosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombre', 'duracion'];
  cursos: Curso[] = [
    { id: 1, nombre: 'Desarrollo Web', duracion: '60 horas' },
    { id: 2, nombre: 'JavaScript', duracion: '45 horas' },
    { id: 3, nombre: 'Angular', duracion: '50 horas' },
    { id: 3, nombre: 'CoffeeScript', duracion: '40 horas' },
    { id: 3, nombre: 'Nuxt.Js', duracion: '25 horas' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

@Component({
  selector: 'app-lista-cursos',
  standalone: true,
  imports: [],
  templateUrl: './lista-cursos.component.html',
  styleUrl: './lista-cursos.component.scss'
})
export class ListaCursosComponent {

}
