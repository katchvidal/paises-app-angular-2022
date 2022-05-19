import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableCountryComponent } from './table-country.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TableCountryComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports:[ TableCountryComponent ]
})
export class TableCountryModule { }
