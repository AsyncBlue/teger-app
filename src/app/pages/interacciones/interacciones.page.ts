import { Component, OnInit } from '@angular/core';
import { DataVotacionesService } from '../../services/data-votaciones.service';
import { Evento, Sobre, RespuestaSobres} from '../../interfaces/interfaces';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-interacciones',
  templateUrl: './interacciones.page.html',
  styleUrls: ['./interacciones.page.scss'],
})
export class InteraccionesPage implements OnInit {

  evento: Evento = {};

  votosSolidos = [];

  sobres: Sobre[] = [];

  constructor( public dataVotaciones: DataVotacionesService, private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {

    this.evento._id = this.activatedRoute.snapshot.paramMap.get('_id');

    this.verSobres( this.evento._id );

}

verSobres( idEvento ) {

  this.dataVotaciones.verSobres( idEvento).subscribe(  resp =>{
    
    this.sobres.push( ...resp.sobres );

      resp.sobres.forEach(element => {

        element.source.forEach(source => {
          let z = {from: source, to: element.target};
          this.votosSolidos.push(z);

        })
      })
  
    
}); 

}

}
