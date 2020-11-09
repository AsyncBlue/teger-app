import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { DataVotacionesService } from '../../services/data-votaciones.service';
import { Evento, Sobre } from '../../interfaces/interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { UiServiceService } from 'src/app/services/ui-service.service';

@Component({
  selector: 'app-lector-qr',
  templateUrl: './lector-qr.page.html',
  styleUrls: ['./lector-qr.page.scss'],
})
export class LectorQRPage implements OnInit {

  sobre: Sobre = {};

  evento: Evento = {};

  swiperOpts = {
    allowSlidePrev: false,
    allowSlideNext: false
  };

  constructor( private barcodeScanner: BarcodeScanner,
               private dataVotaciones: DataVotacionesService,
               private activatedRoute: ActivatedRoute,
               private uiService: UiServiceService,
               private router: Router ) { }

  ionViewWillEnter() {
    console.log('viewWillEnter');
    this.scan();
  }

  ngOnInit() {

    this.evento._id = this.activatedRoute.snapshot.paramMap.get('_id');
    this.evento.created = this.activatedRoute.snapshot.paramMap.get('created');
    this.evento.nombre = this.activatedRoute.snapshot.paramMap.get('nombre');
    this.evento.pregunta = this.activatedRoute.snapshot.paramMap.get('pregunta');
    console.log(this.evento._id);

  }

  scan() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);

      if ( !barcodeData.cancelled ) {
        this.dataVotaciones.guardarRegistro( barcodeData.format, barcodeData.text );
        //aqui va lo que hace al scanear (guardar target)
        this.sobre.target = barcodeData.text;
        /* this.dataVotaciones.crearTarget( this.sobre ); */
      }

     }).catch(err => {
         console.log('Error', err);
     });
  }

  async cerrarSobre() {

    if (this.sobre.target === undefined) {

      this.uiService.presentToast( 'Nodo sin ESCANEAR' );

    } else {

      this.sobre.evento = this.evento._id;

      const cerrado = await this.dataVotaciones.cerrarSobre( this.sobre );

      if (cerrado) {
        this.uiService.presentToast( 'Nodo Cerrado' );
        this.router.navigate(['/evento', this.evento._id, this.evento.created, this.evento.nombre, this.evento.pregunta]);
      }

    }


   

  }

}
