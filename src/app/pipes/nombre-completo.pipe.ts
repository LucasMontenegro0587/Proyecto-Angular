import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nombreCompleto'
})
export class NombreCompletoPipe implements PipeTransform {

  transform(alumno: { nombre: string, apellido: string }): string {
    return `${alumno.nombre} ${alumno.apellido}`;
  }

}
