import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { IonicModule } from '@ionic/angular';
import { AvatarSelectorComponent } from './avatar-selector/avatar-selector.component';
import { RouterModule } from '@angular/router';
import { EventosComponent } from './eventos/eventos.component';
import { EventoComponent } from './evento/evento.component';
import { IrAlEventoComponent } from './ir-al-evento/ir-al-evento.component';
import { SobresComponent } from './sobres/sobres.component';
import { SobreComponent } from './sobre/sobre.component';
import { NetworkgraphComponent } from './networkgraph/networkgraph.component';
import { HighchartsChartComponent, HighchartsChartModule } from 'highcharts-angular';
import { ChartModule } from 'angular-highcharts';
import { PipesModule } from '../pipes/pipes.module';
import { TabsComponent } from './tabs/tabs.component';


@NgModule({
  declarations: [
    MenuComponent,
    AvatarSelectorComponent,
    EventosComponent,
    EventoComponent,
    IrAlEventoComponent,
    SobreComponent,
    SobresComponent,
    NetworkgraphComponent,
    TabsComponent
  ],
  exports: [
    MenuComponent,
    AvatarSelectorComponent,
    EventosComponent,
    EventoComponent,
    IrAlEventoComponent,
    SobresComponent,
    SobreComponent,
    NetworkgraphComponent,
    TabsComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    HighchartsChartModule,
    ChartModule,
    PipesModule
  ]
})
export class ComponentsModule { }
