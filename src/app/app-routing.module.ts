import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaAlumnosComponent } from './alumnos/lista-alumnos/lista-alumnos.component';
import { AbmAlumnosComponent } from './alumnos/abm-alumnos/abm-alumnos.component';
import { ListaCursosComponent } from './cursos/lista-cursos/lista-cursos.component';
import { AbmCursosComponent } from './cursos/abm-cursos/abm-cursos.component';
import { ListaInscripcionesComponent } from './inscripciones/lista-inscripciones/lista-inscripciones.component';

const routes: Routes = [
  { path: 'alumnos', component: ListaAlumnosComponent },
  { path: 'alumnos/abm', component: AbmAlumnosComponent },
  { path: 'cursos', component: ListaCursosComponent },
  { path: 'cursos/abm', component: AbmCursosComponent },
  { path: 'inscripciones', component: ListaInscripcionesComponent },
  { path: '', redirectTo: '/alumnos', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
