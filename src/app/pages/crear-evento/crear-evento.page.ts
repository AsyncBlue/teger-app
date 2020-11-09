import { Component, OnInit } from '@angular/core';
import { EventosService } from '../../services/eventos.service';
import { Router } from '@angular/router';
import { UiServiceService } from '../../services/ui-service.service';

@Component({
  selector: 'app-crear-evento',
  templateUrl: './crear-evento.page.html',
  styleUrls: ['./crear-evento.page.scss'],
})
export class CrearEventoPage implements OnInit {

  evento = {
    nombre: '',
    pregunta: ''
  }

  constructor( private eventosService: EventosService, private route: Router, private uiService: UiServiceService ) { }

  
  async crearEvento() {

    const creado = await this.eventosService.crearEvento( this.evento ); //llama a la funcion de crear evento en la lagina "eventos.service.ts"

     this.evento = {
      nombre: '',
      pregunta: ''
    };

    this.uiService.presentToast( 'Tejido Creado' );

    this.route.navigateByUrl('/mis-eventos');

  }

  ngOnInit() {
  }

}
