import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaAlumnosComponent } from './alumnos/lista-alumnos/lista-alumnos.component';
import { AbmAlumnosComponent } from './alumnos/abm-alumnos/abm-alumnos.component';
import { ListaCursosComponent } from './cursos/lista-cursos/lista-cursos.component';
import { AbmCursosComponent } from './cursos/abm-cursos/abm-cursos.component';
import { ListaInscripcionesComponent } from './inscripciones/lista-inscripciones/lista-inscripciones.component';
import { NombreCompletoPipe } from './pipes/nombre-completo.pipe';
import { TamanioLetraDirective } from './directives/tamanio-letra.directive';

@NgModule({
  declarations: [
    AppComponent,
    ListaAlumnosComponent,
    AbmAlumnosComponent,
    ListaCursosComponent,
    AbmCursosComponent,
    ListaInscripcionesComponent,
    NombreCompletoPipe,
    TamanioLetraDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // Asegurarse de que el módulo esté importado
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
