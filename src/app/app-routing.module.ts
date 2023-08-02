import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullScreenViewComponent } from './full-screen-view/full-screen-view.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { GlaComponent } from './Gallary/gla/gla.component';

const routes: Routes = [
  // {path:"" , component:GlaComponent},
  {path:"SplashScr" , component:SplashScreenComponent},
  {path:"fullscreen" , component:FullScreenViewComponent},
  {
    path:"Galary" , loadChildren:()=>import('./gla-modul/gla-modul.module').then(mod=>mod.GlaModulModule)
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
