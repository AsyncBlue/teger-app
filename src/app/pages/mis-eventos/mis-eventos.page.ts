import { Component, OnInit } from '@angular/core';
import { EventosService } from '../../services/eventos.service';
import { Evento } from '../../interfaces/interfaces';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mis-eventos',
  templateUrl: './mis-eventos.page.html',
  styleUrls: ['./mis-eventos.page.scss'],
})
export class MisEventosPage implements OnInit {

  eventos: Evento[] = [];

  unido: Evento = {};

  habilitado = true;

  constructor( private eventosService: EventosService, private router: Router ) { }

  ngOnInit() {

    this.siguientes();

    this.eventosService.pasarEvento.subscribe( evento =>{

      this.eventos.unshift( evento );
 
  
    });

     this.eventosService.pasarUnido.subscribe( evento =>{

        this.unido = evento
        this.router.navigate(['/evento', this.unido._id, this.unido.created, this.unido.nombre, this.unido.pregunta]);
   
        });


  }

  siguientes( event?) {

    this.eventosService.getEventos().subscribe(  resp =>{
      console.log(resp);
      this.eventos.push( ...resp.eventos );


  });

  }

}
