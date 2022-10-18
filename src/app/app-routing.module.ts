import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      },
      {
        path: ':id',
        loadChildren: () => import('./home/detalle/detalle.module').then( m=> m.DetallePageModule)
      }

    ]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'splashscreen',
    loadChildren: () => import('./pages/splashscreen/splashscreen.module').then( m => m.SplashscreenPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'prueba',
    loadChildren: () => import('./pages/prueba/prueba.module').then( m => m.PruebaPageModule)
  },
  {
    path: 'scanear',
    loadChildren: () => import('./pages/scanear/scanear.module').then( m => m.ScanearPageModule)
  },
  {
    path: 'docente',
    loadChildren: () => import('./pages/docente/docente.module').then( m => m.DocentePageModule)
  },
  {
    path: 'generate-qr',
    loadChildren: () => import('./pages/generate-qr/generate-qr.module').then( m => m.GenerateQRPageModule)
  },
  {
    path: 'horario',
    loadChildren: () => import('./pages/horario/horario.module').then( m => m.HorarioPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'seccion',
    loadChildren: () => import('./pages/seccion/seccion.module').then( m => m.SeccionPageModule)
  },
  {
    path: 'api',
    loadChildren: () => import('./pages/api/api.module').then( m => m.ApiPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
