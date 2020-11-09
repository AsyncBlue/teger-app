import { Component, OnInit, Input } from '@angular/core';
import { Evento, Sobre, RespuestaSobres } from '../../interfaces/interfaces';
import { ActivatedRoute } from '@angular/router';
import { DataVotacionesService } from '../../services/data-votaciones.service';
import { EventosService } from '../../services/eventos.service';
import { AlertController, ToastController } from '@ionic/angular';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-evento',
  templateUrl: './evento.page.html',
  styleUrls: ['./evento.page.scss'],
})
export class EventoPage implements OnInit {

  evento: Evento = {};

  sobres: Sobre[] = [];

  votosSolidos = [];

  constructor( private activatedRoute: ActivatedRoute, public dataVotaciones: DataVotacionesService, private eventosService: EventosService, private alertController: AlertController, private router: Router ) {}    

  ngOnInit() {
  
    this.evento._id = this.activatedRoute.snapshot.paramMap.get('_id');
    this.evento.created = this.activatedRoute.snapshot.paramMap.get('created');
    this.evento.nombre = this.activatedRoute.snapshot.paramMap.get('nombre');
    this.evento.pregunta = this.activatedRoute.snapshot.paramMap.get('pregunta');

    this.verSobres( this.evento._id );

    this.dataVotaciones.pasarSobre.subscribe( sobre =>{
     
      this.sobres.unshift( sobre );
         
  
    });

     

    console.log(this.sobres);

    

  }

 
  verSobres( idEvento ) {

    this.dataVotaciones.verSobres( idEvento).subscribe(  resp =>{
      
      console.log(resp);
      this.sobres.push( ...resp.sobres ); 
    
    });


  }

  enviarCorreo(infoSObres){

    this.sobres.forEach(element => {
      element.source.forEach(source => {
        let z = {from: source, to: element.target};
        this.votosSolidos.push(z);

      })
    });

    this.dataVotaciones.recibirDataVotos(this.votosSolidos);
  }

  async aviso() {

    this.alertaInformativa( 'RECUERDA primero escanear el nodo y luego los códigos dentro de el.' );

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
        /* cssClass: 'rojo', */
        handler: () => {
          this.router.navigate(['/lector-qr', this.evento._id, this.evento.created, this.evento.nombre, this.evento.pregunta]);
        }
      }/* ,
      {
        text: 'Cancelar',
        role: 'cancel',
      }  */ 
    ]
    });

    await alert.present();
  }


}
