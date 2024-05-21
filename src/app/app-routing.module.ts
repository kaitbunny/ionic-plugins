import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ConstantsService } from './utils/constants/constants.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: ConstantsService.HOME_PATH,
    pathMatch: 'full'
  },
  {
    path: ConstantsService.HOME_PATH,
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: ConstantsService.BUSSOLA_PATH,
    loadChildren: () => import('./pages/bussola/bussola.module').then( m => m.BussolaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
