import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.page.html',
  styleUrls: ['./tutorial.page.scss'],
})
export class TutorialPage implements OnInit {

  slides: { img: string, titulo: string, desc: string }[] = [
    {
      img: '/assets/slides/add.png',
      titulo: 'Crea un Tejido',
      desc: 'Crea un nuevo tejido para luego empezar a trabajar sobre el.'
    },
    {
      img: '/assets/slides/qr.png',
      titulo: 'Escanea codigos QR',
      desc: 'Escanea el código QR del nodo y posteriormente escanea todos los códigos que se encuentran dentro de él.'
    },
    {
      img: '/assets/slides/compartir.png',
      titulo: 'Compartir',
      desc: 'Copia el código de tu tejido y compártelo para que otro usuario te ayude a agilizar el proceso de escaneo.'
    },
    {
      img: '/assets/slides/correo.png',
      titulo: 'Envia correo electronico',
      desc: 'Envía un correo electrónico con los resultados de tu tejido en formato CSV instantáneamente.'
    },
    {
      img: '/assets/slides/network.png',
      titulo: 'Grafico de Red',
      desc: 'Genera instantáneamente un grafico de red con las interacciones de las personas de tu organización.'
    }
  ];

  constructor( private navCtrl: NavController ) { }

  ngOnInit() {
  }

  onClick() {
    this.navCtrl.navigateBack('/inicio');
  }

}
