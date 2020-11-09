import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/interfaces';
import { UsuarioService } from '../../services/usuario.service';
import { NgForm } from '@angular/forms';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { EventosService } from '../../services/eventos.service';
import { AlertController, ToastController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.page.html',
  styleUrls: ['./mi-perfil.page.scss'],
})
export class MiPerfilPage implements OnInit {

  usuario: Usuario = {};

  newPass = {
    pass1: '',
    pass2: ''
  }

  constructor( private usuarioService: UsuarioService, private uiService: UiServiceService, private eventosService: EventosService, private alertController: AlertController, private navCtrl: NavController ) { }

  ngOnInit() {

    this.usuario = this.usuarioService.getUsuario();

    console.log(this.usuario);

  }

  actualizar( fActualizar: NgForm ) {

    if ( fActualizar.invalid ) { return; }

    this.alertaInformativaDatos( '¿Seguro que desea actualizar sus datos?' );

  }

  logout(){

    this.usuarioService.logout();
    
  }

  async actualizarPass( fActualizarPass: NgForm ) {

    if ( fActualizarPass.invalid ) { return; }

    if ( this.newPass.pass1 === this.newPass.pass2 ) {

      this.alertaInformativa( '¿Seguro que desea actualizar su contraseña?' );
      
    } else {
      
      this.uiService.presentToast( 'Error al escribir nueva contraseña' );

    } 

    

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
        handler: () => {
          this.usuario.password = this.newPass.pass1;
          this.usuarioService.actualizarContraseña( this.usuario);
          this.uiService.presentToast( 'Contraseña actualizada correctamente' );
          this.navCtrl.back();
        }
      },
      {
        text: 'Cancelar',
        role: 'cancel',
        cssClass: 'rojo'
      }  
    ]
    });

    await alert.present();
  }

  async alertaInformativaDatos( message: string ) {
    const alert = await this.alertController.create({
      backdropDismiss: false,
      //header: 'Alert',
      //subHeader: 'Subtitle',
      message,
      buttons: [
        {
        text: 'Aceptar',
        handler: () => {
          this.usuarioService.actualizarUsuario( this.usuario );
          this.uiService.presentToast( 'Datos actualizados correctamente' );
          this.navCtrl.back();
        }
      },
      {
        text: 'Cancelar',
        role: 'cancel',
        cssClass: 'rojo'
      }  
    ]
    });

    await alert.present();
  }

}
