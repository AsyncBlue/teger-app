import { Component, OnInit } from '@angular/core';
import { EventosService } from '../../services/eventos.service';
import { Router } from '@angular/router';
import { UiServiceService } from '../../services/ui-service.service';
import { Evento } from '../../interfaces/interfaces';

@Component({
  selector: 'app-unirse',
  templateUrl: './unirse.page.html',
  styleUrls: ['./unirse.page.scss'],
})
export class UnirsePage implements OnInit {

  evento = {
    _id: ''
  }

  unido: Evento = {};


  constructor( private eventosService: EventosService, private route: Router, private uiService: UiServiceService ) { }

  ngOnInit() {
  }

  async unirseEvento(){

    const unirse = await this.eventosService.unirseEvento( this.evento );

     this.evento = {
      _id: ''
    };

    this.uiService.presentToast( 'Se ah unido al Tejido' );

  }

}
