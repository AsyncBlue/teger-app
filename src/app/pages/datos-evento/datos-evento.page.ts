import { Component, OnInit } from '@angular/core';
import { DataVotacionesService } from '../../services/data-votaciones.service';

@Component({
  selector: 'app-datos-evento',
  templateUrl: './datos-evento.page.html',
  styleUrls: ['./datos-evento.page.scss'],
})
export class DatosEventoPage implements OnInit {

  enviarCorreo() {
    this.dataVotaciones.enviarCorreo();
  }

  constructor( public dataVotaciones: DataVotacionesService ) { }

  ngOnInit() {
  }

}
