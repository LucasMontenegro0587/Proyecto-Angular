import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Para Material Design
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table'; // Módulo de tabla
import { MatIconModule } from '@angular/material/icon'; // Módulo de íconos
import { MatButtonModule } from '@angular/material/button'; // Módulo de botones
import { ReactiveFormsModule } from '@angular/forms'; // Módulo de formularios reactivos
import { MatFormFieldModule } from '@angular/material/form-field'; // Módulo de campos de formulario
import { MatInputModule } from '@angular/material/input'; // Módulo de inputs
import { ListaAlumnosComponent } from './alumnos/lista-alumnos/lista-alumnos.component';
import { AbmAlumnosComponent } from './alumnos/abm-alumnos/abm-alumnos.component';
import { AbmInscripcionesComponent } from './abm-inscripciones/abm-inscripciones.component.ts';
import { ListaCursosComponent } from './cursos/lista-cursos/lista-cursos.component';
import { AbmCursosComponent } from './cursos/abm-cursos/abm-cursos.component';
import { ListaInscripcionesComponent } from './inscripciones/lista-inscripciones/lista-inscripciones.component';
import { NombreCompletoPipe } from './pipes/nombre-completo.pipe';
import { TamanioLetraDirective } from './directives/tamanio-letra.directive';


@NgModule({
  declarations: [
    AbmAlumnosComponent,
    AbmCursosComponent,
    AbmInscripcionesComponent,
    ListaAlumnosComponent,
    ListaInscripcionesComponent,
    NombreCompletoPipe,
  ],
  imports: [
    AppComponent,
    BrowserAnimationsModule, // Material Design
    BrowserModule,
    AppRoutingModule, // Importado
    ListaCursosComponent, // Importado
    MatTableModule, // Importado
    MatIconModule,  // Importado
    MatButtonModule, // Importado
    ReactiveFormsModule, // Importado
    MatFormFieldModule,  // Importado
    MatInputModule,      // Importado
    TamanioLetraDirective, // Importado
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
