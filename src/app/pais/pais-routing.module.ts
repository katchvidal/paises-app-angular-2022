import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',  pathMatch: 'full' ,loadChildren: () => import('./pages/por-pais/por-pais.module').then(m => m.PorPaisModule) },
  { path: 'capital', loadChildren: () => import('./pages/por-capital/por-capital.module').then(m => m.PorCapitalModule) },
  { path : '**', redirectTo: ''}  //  Redirecciona cuaquier otro path 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaisRoutingModule { }
