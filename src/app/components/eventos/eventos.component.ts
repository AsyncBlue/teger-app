import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Evento } from '../../interfaces/interfaces';
import { Observable } from 'rxjs';
import { UiServiceService } from '../../services/ui-service.service';
import { EventosService } from '../../services/eventos.service';


@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss'],
})
export class EventosComponent implements OnInit {

  @Input() eventos: Evento[] = [];  


  textoBuscar = '';

  constructor(  private uiService: UiServiceService, private eventosService: EventosService ) { }

  ngOnInit() {

    console.log(this.eventos);

  }

  buscar( event ) {
    console.log(event);
    this.textoBuscar = event.detail.value;
  }

  procesaEvento(evento) {

    var index = this.eventos.map(evento => evento).indexOf(evento);
    this.eventos.splice(index,1);
    
    const borrado = this.eventosService.borrarEvento( evento );
    this.uiService.presentToast( 'Tejido Eliminado' );

  }
 


}
