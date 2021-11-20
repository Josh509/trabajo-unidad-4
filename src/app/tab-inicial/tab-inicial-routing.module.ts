import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabInicialPage } from './tab-inicial.page';

const routes: Routes = [
  {
    path: '',
    component: TabInicialPage,
    children:[
      
      {
        path: 'perfil',
        loadChildren: () => import('./../perfil/perfil.module').then( m => m.PerfilPageModule)
      },
      {
        path: 'notificacion',
        loadChildren: () => import('./../notificacion/notificacion.module').then( m => m.NotificacionPageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('./../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'ayuda',
        loadChildren: () => import('./../ayuda/ayuda.module').then( m => m.AyudaPageModule)
      },
      {
        path: 'configuracion',
        loadChildren: () => import('./../configuracion/configuracion.module').then( m => m.ConfiguracionPageModule)
      },

      
      

      
      
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabInicialPageRoutingModule {}
