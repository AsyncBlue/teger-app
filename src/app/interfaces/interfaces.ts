export interface RespuestaEventos {
  ok: boolean;
  /* pagina: number; */
  eventos: Evento[];
}

export interface Evento {
  _id?: string;
  nombre?: string;
  pregunta?: string;
  usuario?: Usuario;
  created?: string;
}

export interface RespuestaSobres {
  ok: boolean;
  sobres: Sobre[];
}

export interface Sobre {
  source?: string[];
  _id?: string;
  target?: string;
  evento?: string;

}

export interface Usuario {
  avatar?: string;
  _id?: string;
  nombre?: string;
  apellido?: string;
  email?: string;
  password?: string;
}

export interface Menu {
  icon: string;
  name: string;
  redirectTo: string;
}

/* export interface Sobre {
  _id?: string;
  target?: string;
  source?: Array<string>;
  evento?: string;
} */

