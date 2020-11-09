import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides, NavController, MenuController } from '@ionic/angular';
import { UsuarioService } from '../../services/usuario.service';
import { UiServiceService } from '../../services/ui-service.service';
import { Usuario } from '../../interfaces/interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild('slidePrincipal', {static: true}) slides: IonSlides;
  

  loginUser = {
    email: '',
    password: ''
  };

  registerUser: Usuario = {
    email: '',
    nombre: '',
    apellido: '',
    password: '',
    avatar: 'av-1.png'
  };

  passwordTypeInput  =  'password';

  constructor( private usuarioService: UsuarioService, private navCtrl: NavController, private uiService: UiServiceService, public menuCtrl: MenuController ) { }

  ngOnInit() {
    this.slides.lockSwipes(true);
  }

  async login(fLogin: NgForm) {

    if ( fLogin.invalid ) { return; }

    const valido = await this.usuarioService.login( this.loginUser.email, this.loginUser.password );

    if ( valido ) {
      // navegar al inicio.html
      this.navCtrl.navigateRoot('/inicio', { animated: true });
    } else {
      //mostrar alerta de usuario contraseña no correctos
      this.uiService.alertaInformativa('Usuario y/o Contraseña no son correctos.');
    }

  }

  async registro(fRegistro: NgForm) {

    if ( fRegistro.invalid ) { return; }

    const valido = await this.usuarioService.registro( this.registerUser );

    if ( valido ) {
      // navegar al inicio.html
      this.navCtrl.navigateRoot('/inicio', { animated: true });
    } else {
      //mostrar alerta de usuario contraseña no correctos
      this.uiService.alertaInformativa('Correo electronico ya existe');
    }

  }

  mostrarLogin() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(0);
    this.slides.lockSwipes(true);
  }

  mostrarRegistro() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(1);  
    this.slides.lockSwipes(true);
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ionViewWillLeave() {
    this.menuCtrl.enable(true);
  }

  

}
