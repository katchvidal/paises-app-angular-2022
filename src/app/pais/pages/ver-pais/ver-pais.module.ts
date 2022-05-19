import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { VerPaisRoutingModule } from './ver-pais-routing.module';
import { VerPaisComponent } from './ver-pais.component';


@NgModule({
  declarations: [
    VerPaisComponent
  ],
  imports: [
    VerPaisRoutingModule,
    CommonModule,
  ]
})
export class VerPaisModule { }
