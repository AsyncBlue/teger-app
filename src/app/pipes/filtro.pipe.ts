import { Pipe, PipeTransform } from '@angular/core';
import { Evento } from '../interfaces/interfaces';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(eventos: Evento[], texto: string): Evento[] {
    if ( texto === '' || texto === undefined ){
      return eventos;
    }

    texto = texto.toLowerCase();

    return eventos.filter( item => {
      return item.nombre.toLowerCase().includes( texto );
    });

    //return arreglo;
  }


}
