import { Component, Input, OnInit } from '@angular/core';
import { Country } from 'src/app/core/interfaces/paises/pais.interface';

@Component({
  selector: 'app-table-country',
  templateUrl: './table-country.component.html',
  styles: [
    `
      .small-flag{
        width: 70px;
        height: 40px
      }
    `
  ]
})
export class TableCountryComponent implements OnInit {

  @Input() paises : Country[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
