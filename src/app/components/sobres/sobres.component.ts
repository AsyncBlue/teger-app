import { Component, OnInit, Input } from '@angular/core';
import { Sobre } from '../../interfaces/interfaces';
import { UiServiceService } from '../../services/ui-service.service';
import { EventosService } from '../../services/eventos.service';

@Component({
  selector: 'app-sobres',
  templateUrl: './sobres.component.html',
  styleUrls: ['./sobres.component.scss'],
})
export class SobresComponent implements OnInit {

  @Input() sobres: Sobre[] = []; 

  constructor( private uiService: UiServiceService, private eventosService: EventosService ) { }

  ngOnInit() {}

  procesaSobre(sobre) {

    var index = this.sobres.map(sobre => sobre).indexOf(sobre);
    this.sobres.splice(index,1);

    const borrado = this.eventosService.borrarSobre( sobre );
    this.uiService.presentToast( 'Sobre Eliminado' );

  }

}
