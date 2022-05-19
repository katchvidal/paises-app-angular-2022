import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PorPaisRoutingModule } from './por-pais-routing.module';
import { PorPaisComponent } from './por-pais.component';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { TableCountryModule } from 'src/app/shared/table-country/table-country.module';
import { SearchBarModule } from 'src/app/shared/search-bar/search-bar.module';




@NgModule({
  declarations: [
    PorPaisComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    TableCountryModule,
    SearchBarModule,
    RouterModule,
    PorPaisRoutingModule
  ]
})
export class PorPaisModule { }
