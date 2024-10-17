import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Para Material Design
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button'; // Módulo de botones
import { MatFormFieldModule } from '@angular/material/form-field'; // Módulo de campos de formulario
import { MatIconModule } from '@angular/material/icon'; // Módulo de íconos
import { MatCardModule } from '@angular/material/card'; // Módulo de tarjetas
import { MatInputModule } from '@angular/material/input'; // Módulo de inputs
import { MatSelectModule } from '@angular/material/select'; // Módulo de selección
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav'; // Módulo de sidenav
import { MatTableModule } from '@angular/material/table'; // Módulo de tabla
import { MatToolbarModule } from '@angular/material/toolbar'; // Módulo de toolbar
import { ReactiveFormsModule } from '@angular/forms'; // Módulo de formularios reactivos
import { StudentsComponent } from './dashboard/students/students.component';
import { CreateEditStudents } from './dashboard/students/create-edit-students/create-edit-students.component';
import { NavbarComponent } from './layout/navbar/navbar.component'; // Componente Navegación
import { SidebarComponent } from './layout/sidebar/sidebar.component'; // Componente Barra laterial
import { TopbarComponent } from './layout/topbar/topbar.component'; // Componente Barra superior
import { StudentsFullName } from './shared/pipes/student-full-name.pipe'; // Pipe personalizado
import { TitleSizeDirective } from './shared/directives/title-size.directive'; // Directiva personalizada

@NgModule({
  declarations: [StudentsFullName, TitleSizeDirective, CreateEditStudents], // Declaraciones
  imports: [CommonModule], // Importaciones
  exports: [ // Exportaciones
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatSidenavModule,
    NavbarComponent,
    SidebarComponent,
    TopbarComponent,
    StudentsComponent,
    StudentsFullName,
    CreateEditStudents,
    TitleSizeDirective,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class SharedModule { }
