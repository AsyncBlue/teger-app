import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Sobre } from '../../interfaces/interfaces';
import { EventosService } from '../../services/eventos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UiServiceService } from '../../services/ui-service.service';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss'],
})
export class SobreComponent implements OnInit {

  @Input() sobre: Sobre = {};
  @Output() sobreBorrado = new EventEmitter();

  constructor(private eventosService: EventosService, private route: Router, private uiService: UiServiceService, private alertController: AlertController) { }

  ngOnInit() {}

  async borrarSobre() {

    this.alertaInformativa( '¿Seguro que desea eliminar el sobre?' );


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
          this.sobreBorrado.emit(this.sobre);
          /* this.route.navigate(['/mis-eventos']); */
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
