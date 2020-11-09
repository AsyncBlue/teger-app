import { Component, OnInit, Input } from '@angular/core';
import { Sobre, Evento } from '../../interfaces/interfaces';
import { DataVotacionesService } from '../../services/data-votaciones.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.page.html',
  styleUrls: ['./grafico.page.scss'],
})
export class GraficoPage implements OnInit {

  sobres: Sobre[] = [];
  evento: Evento = {};

  
  constructor( private activatedRoute: ActivatedRoute, public dataVotaciones: DataVotacionesService ) { }

  ngOnInit() {

    this.evento._id = this.activatedRoute.snapshot.paramMap.get('_id');

    console.log(this.evento._id);

  }


}


