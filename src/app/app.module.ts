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
import { studentsComponent } from './dashboard/students/students.component';
import { studentsManager } from './dashboard/students/create-edit-students/create-edit-students.component';
import { titleSizeDirective } from './shared/directives/title-size.directive';
import { studentsFullName } from './shared/pipes/student-full-name.pipe'; 

@NgModule({
  declarations: [
    studentsComponent, // Declarado
    studentsFullName, // Declarado
    studentsManager, // Declarado
  ],
  imports: [
    AppComponent,
    AppRoutingModule, // Importado
    BrowserAnimationsModule, // Material Design
    BrowserModule,
    MatTableModule, // Importado
    MatIconModule,  // Importado
    MatButtonModule, // Importado
    ReactiveFormsModule, // Importado
    MatFormFieldModule,  // Importado
    MatInputModule,      // Importado
    titleSizeDirective, // Declarado
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
