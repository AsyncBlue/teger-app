import { Component, OnInit, Input } from '@angular/core';
import { Evento } from '../../interfaces/interfaces';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EventosService } from '../../services/eventos.service';

@Component({
  selector: 'app-ir-al-evento',
  templateUrl: './ir-al-evento.component.html',
  styleUrls: ['./ir-al-evento.component.scss'],
})
export class IrAlEventoComponent implements OnInit {


  slides: { img: string, titulo: string, desc: string }[] = [
    {
      img: '/assets/slides/add.png',
      titulo: 'Crea un Tejido',
      desc: 'Crea un nuevo tejido para luego empezar a trabajar sobre el.'
    },
    {
      img: '/assets/slides/qr.png',
      titulo: 'Escanea codigos QR',
      desc: 'Escanea el código QR del nodo y posteriormente escanea todos los códigos que se encuentran dentro de él.'
    },
    {
      img: '/assets/slides/compartir.png',
      titulo: 'Compartir',
      desc: 'Copia el código de tu tejido y compártelo para que otro usuario te ayude a agilizar el proceso de escaneo.'
    },
    {
      img: '/assets/slides/correo.png',
      titulo: 'Envía correo electronico',
      desc: 'Envía un correo electrónico con los resultados de tu tejido en formato CSV instantáneamente.'
    },
    {
      img: '/assets/slides/network.png',
      titulo: 'Grafico de Red',
      desc: 'Genera instantáneamente un grafico de red con las interacciones de las personas de tu organización.'
    }
  ];

  centralidad: {img: string, titulo: string, desc: string} = {
    img: '/assets/slides/centralidad.png',
    titulo: 'Centralidad',
    desc: 'El nodo con mas centralidad en tu red se visualizará de otro color y de un tamaño mas grande. '
  }



  constructor( ) { }

  ngOnInit() {

  
  }

  
}
