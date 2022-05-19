import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerPaisComponent } from './ver-pais.component';

const routes: Routes = [
  { path: '', component: VerPaisComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerPaisRoutingModule { }
