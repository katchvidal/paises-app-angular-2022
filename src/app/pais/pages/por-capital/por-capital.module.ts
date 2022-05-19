import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PorCapitalRoutingModule } from './por-capital-routing.module';
import { PorCapitalComponent } from './por-capital.component';
import { SearchBarModule } from 'src/app/shared/search-bar/search-bar.module';
import { TableCountryModule } from 'src/app/shared/table-country/table-country.module';


@NgModule({
  declarations: [
    PorCapitalComponent
  ],
  imports: [
    CommonModule,
    SearchBarModule,
    TableCountryModule,
    PorCapitalRoutingModule
  ]
})
export class PorCapitalModule { }
