import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Menu, Evento } from '../../interfaces/interfaces';
import { EventosService } from '../../services/eventos.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  menu: Menu[] = [];


  constructor( private menuCtrl: MenuController) { }

  ngOnInit() {
    

}



}
