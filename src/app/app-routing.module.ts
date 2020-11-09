import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UsuarioGuard } from './guards/usuario.guard';
import { IrAlEventoComponent } from './components/ir-al-evento/ir-al-evento.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule),
    //anActivate: [ UsuarioGuard ]
    canLoad: [ UsuarioGuard ]
  },
  {
    path: 'lector-qr/:_id/:created/:nombre/:pregunta',
    loadChildren: () => import('./pages/lector-qr/lector-qr.module').then( m => m.LectorQRPageModule)
  },
  {
    path: 'datos-evento',
    loadChildren: () => import('./pages/datos-evento/datos-evento.module').then( m => m.DatosEventoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'mis-eventos',
    loadChildren: () => import('./pages/mis-eventos/mis-eventos.module').then( m => m.MisEventosPageModule)
  },
  {
    path: 'mi-perfil',
    loadChildren: () => import('./pages/mi-perfil/mi-perfil.module').then( m => m.MiPerfilPageModule)
  },
  {
    path: 'crear-evento',
    loadChildren: () => import('./pages/crear-evento/crear-evento.module').then( m => m.CrearEventoPageModule)
  },
  {
    path: 'evento/:_id/:created/:nombre/:pregunta',
    loadChildren: () => import('./pages/evento/evento.module').then( m => m.EventoPageModule)
  },
  {
    path: 'grafico/:_id',
    loadChildren: () => import('./pages/grafico/grafico.module').then( m => m.GraficoPageModule)
  },
  {
    path: 'unirse',
    loadChildren: () => import('./pages/unirse/unirse.module').then( m => m.UnirsePageModule)
  },
  {
    path: 'compartir/:_id',
    loadChildren: () => import('./pages/compartir/compartir.module').then( m => m.CompartirPageModule)
  },
  {
    path: 'tutorial',
    loadChildren: () => import('./pages/tutorial/tutorial.module').then( m => m.TutorialPageModule)
  },
  {
    path: 'interacciones/:_id',
    loadChildren: () => import('./pages/interacciones/interacciones.module').then( m => m.InteraccionesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
