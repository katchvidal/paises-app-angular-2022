import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorRegionesComponent } from './por-regiones.component';

const routes: Routes = [
  { path: '', component: PorRegionesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PorRegionesRoutingModule { }
