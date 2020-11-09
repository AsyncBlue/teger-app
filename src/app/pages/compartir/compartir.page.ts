import { Component, OnInit } from '@angular/core';
import { Evento } from '../../interfaces/interfaces';
import { ActivatedRoute } from '@angular/router';
import { UiServiceService } from '../../services/ui-service.service';

@Component({
  selector: 'app-compartir',
  templateUrl: './compartir.page.html',
  styleUrls: ['./compartir.page.scss'],
})
export class CompartirPage implements OnInit {

  evento: Evento = {};

  constructor( private activatedRoute: ActivatedRoute, private uiService: UiServiceService ) { }

  ngOnInit() {

    this.evento._id = this.activatedRoute.snapshot.paramMap.get('_id');

  }

  copyText(val: string){
    let selBox = document.createElement('textarea');
      selBox.style.position = 'fixed';
      selBox.style.left = '0';
      selBox.style.top = '0';
      selBox.style.opacity = '0';
      selBox.value = val;
      document.body.appendChild(selBox);
      selBox.focus();
      selBox.select();
      document.execCommand('copy');
      document.body.removeChild(selBox);

      this.uiService.presentToast( 'Codigo Copiado!' );
    }
  
}
