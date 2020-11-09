import { Injectable, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RegistroVotaciones } from '../models/registroVotaciones.model';
import { Storage } from '@ionic/storage';
import { File } from '@ionic-native/file/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UsuarioService } from './usuario.service';
import { Sobre, RespuestaSobres } from '../interfaces/interfaces';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class DataVotacionesService {

  sobre: Sobre = {};

  guardados: RegistroVotaciones[] = [];

  source = [];

  target = "";

  pasarSobre = new EventEmitter<Sobre>();

  contenidoCorreo = [];

  constructor( private storage: Storage, private file: File, private emailComposer: EmailComposer, private http: HttpClient, private usuarioService: UsuarioService ) { 
    this.cargarStorage();
  }

  async cargarStorage() {
    /* this.guardados = await this.storage.get('registros') || []; */
    this.source = await this.storage.get('registros') || [];
  }

  async guardarRegistro ( format: string, text: string) {

    await this.cargarStorage();

    const nuevoRegistro = new RegistroVotaciones( format, text );
    this.guardados.unshift( nuevoRegistro );
    
    if ( this.target.length === 0 ) {
      this.target = text;
    }else {
      this.source.unshift( text );
    }


    //Registros
    this.storage.set('registros', this.source);

  }

  enviarCorreo() {

    const arrTemp = [];
    /* const titulos = 'Formato, Creado, Contenido\n'; */
    const titulos = 'Source, Target\n';

    arrTemp.push ( titulos );

    /* this.guardados.forEach( registro => { */
      this.contenidoCorreo.forEach( registro => {
      /* const fila = `${registro.format}, ${registro.created}, ${registro.text}\n`; */
      const fila = `${registro.from}, ${registro.to}\n`;

      arrTemp.push( fila );

    } );

    this.crearArchivoFisico( arrTemp.join('') );

  }

  crearArchivoFisico( text: string  ) {
    this.file.checkFile( this.file.dataDirectory, 'votaciones.csv' ).then( existe => {
      console.log('Eviste archivo?', existe);
      return this.escribirEnArchivo( text );
    } ).catch( err => {
      return this.file.createFile( this.file.dataDirectory, 'votaciones.csv', false ).then( creado => this.escribirEnArchivo( text ) )
      .catch( err2 => console.log('No se pudo crear el archivo', err2) );
    } );
  }

  async escribirEnArchivo( text: string ) {

    await this.file.writeExistingFile( this.file.dataDirectory, 'votaciones.csv', text );

    const archivo = `${this.file.dataDirectory}/votaciones.csv`;
    //console.log(this.file.dataDirectory + 'votaciones.csv');

    const email = {
      /* to: 'pedro.ones1@gmail.com', */
      // cc: 'erika@mustermann.de',
      // bcc: ['john@doe.com', 'jane@doe.com'],
      attachments: [
        archivo
        /* 'file://img/logo.png',
        'res://icon.png',
        'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
        'file://README.pdf' */
      ],
      subject: 'TeGeR',
      body: 'Resultado de su tejido grupal en redes',
      isHtml: true
    };
    
    // Send a text message using default options
    this.emailComposer.open(email);

  }



  cerrarSobre( sobre: Sobre ) {

    this.sobre.evento = sobre.evento;

    this.sobre.source = this.source;

    this.sobre.target = this.target;


    return new Promise( resolve =>{

      this.http.post(`${URL}/sobre/create`, this.sobre ).subscribe( resp => {
  
        console.log(resp);
  
        if ( resp['ok'] ) {

          this.pasarSobre.emit( resp['sobre'] );

          this.target = "";
          this.storage.clear();
          resolve(true);
  
        } 
        
  
      });  
  
    }); 

  }
  
  verSobres( evento ) {

    return this.http.get<RespuestaSobres>(`${URL}/sobre/obtener/${evento}`);

  } 

  recibirDataVotos(infoSObres){
    this.contenidoCorreo = infoSObres;
    this.enviarCorreo();
  }




}

