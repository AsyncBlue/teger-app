import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RespuestaEventos, Evento } from '../interfaces/interfaces';
import { UsuarioService } from './usuario.service';
import { Router } from '@angular/router';
import { resolve } from 'url';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  pasarEvento = new EventEmitter<Evento>();

  pasarUnido = new EventEmitter<Evento>();

  constructor( private http: HttpClient, private usuarioService: UsuarioService, private route: Router ) { }

  getEventos() {


    const headers = new HttpHeaders({
      
      'x-token': this.usuarioService.token  // recoge el token del usuario

    });

    return this.http.get<RespuestaEventos>(`${URL}/eventos`, {headers});

  }



  //Aqui genero el evento y lo envio a la DB
  crearEvento( evento ) {

    const headers = new HttpHeaders({
      
      'x-token': this.usuarioService.token  // recoge el token del usuario

    });

    return new Promise ( resolve => {

      this.http.post(`${URL}/eventos`, evento , {headers})  // INSERCION EN BD 1- la url 2- la data que enviara 3- los headers(token)
      .subscribe( resp => {  // es para ver el evento creado en la consola xd
        
        this.pasarEvento.emit( resp['evento'] ); // emite el nuevo evento y le pasa la info a evento.html xd
        resolve(true);

      });

    });
  
  }

  //Borrar Evento
  borrarEvento( evento ){

    const headers = new HttpHeaders({
      
      'x-token': this.usuarioService.token  // recoge el token del usuario

    });

    return new Promise ( resolve => {

      this.http.post(`${URL}/eventos/borrarEvento`, evento, {headers})  // INSERCION EN BD 1- la url 2- la data que enviara 3- los headers(token)
      .subscribe( resp => {  // es para ver el evento creado en la consola xd
        
        if ( resp['ok'] ) {
          resolve(true);
        } else {
          resolve(false);
        }

      });

    });

  }

  //Borrar Sobre
  borrarSobre( sobre ){

    return new Promise ( resolve => {

      this.http.post(`${URL}/sobre/borrarSobre`, sobre)  // INSERCION EN BD 1- la url 2- la data que enviara 3- los headers(token)
      .subscribe( resp => {  // es para ver el evento creado en la consola xd
        
        if ( resp['ok'] ) {
          resolve(true);
        } else {
          resolve(false);
        }

      });

    });

  }

  //Unirse a tejido

  unirseEvento( idEvento ){

    return new Promise ( resolve => {

      this.http.post(`${URL}/eventos/unirseEvento`, idEvento)
      .subscribe( resp => { 

         if ( resp['ok'] ) {
          this.pasarUnido.emit( resp['evento'] );
          resolve(true);
        } else {
          resolve(false);
        } 

      });

    });
    
  }




}
