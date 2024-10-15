import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'studentsFullNamePipe'
})
export class studentsFullName implements PipeTransform {

  transform(alumno: { nombre: string, apellido: string }): string {
    return `${alumno.nombre} ${alumno.apellido}`;
  }

}
