import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Evento } from '../../interfaces/interfaces';
import { Router } from '@angular/router';
import { EventosService } from '../../services/eventos.service';
import { NavController } from '@ionic/angular';
import { UiServiceService } from '../../services/ui-service.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.scss'],
})
export class EventoComponent implements OnInit {

  @Input() evento: Evento = {};
  @Output() eventoBorrado = new EventEmitter<Evento>();
  

  constructor( public navCtrl: NavController, private route: Router, private eventosService: EventosService, private uiService: UiServiceService, private alertController: AlertController ) { }

  ngOnInit() {


  }

  async borrarEvento() {

    this.alertaInformativa( '¿Seguro que desea eliminar el tejido?' );

  }

  async alertaInformativa( message: string ) {
    const alert = await this.alertController.create({
      backdropDismiss: false,
      //header: 'Alert',
      //subHeader: 'Subtitle',
      message,
      buttons: [
        {
        text: 'Aceptar',
        cssClass: 'rojo',
        handler: () => {
          this.eventoBorrado.emit(this.evento);
          /* this.route.navigate(['/inicio']); */
        }
      },
      {
        text: 'Cancelar',
        role: 'cancel',
      }  
    ]
    });

    await alert.present();
  }

}
