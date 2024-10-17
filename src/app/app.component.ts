import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar'; // Módulo de barra de herramientas
import { MatListModule } from '@angular/material/list'; // Módulo de lista de navegación
import { NgIf } from '@angular/common'; // Asegurando NgIf en caso de condicionales futuros

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pentahouse';
}
