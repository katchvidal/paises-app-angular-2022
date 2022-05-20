import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PorRegionesRoutingModule } from './por-regiones-routing.module';
import { PorRegionesComponent } from './por-regiones.component';
import { TableCountryModule } from 'src/app/shared/table-country/table-country.module';


@NgModule({
  declarations: [
    PorRegionesComponent
  ],
  imports: [
    CommonModule,
    TableCountryModule,
    PorRegionesRoutingModule
  ]
})
export class PorRegionesModule { }
