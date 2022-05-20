import { Component, Input, OnInit } from '@angular/core';
import { Country } from 'src/app/core/interfaces/paises/pais.interface';
import { PaisService } from 'src/app/services/pais/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li{
        cursor: pointer;
      }

      a{
        text-decoration: none;
        cursor: pointer;
      }
    `
  ]
})
export class PorPaisComponent implements OnInit {

  termino : string = ''
  paises: Country[] = []
  error = false;
  suggestionCountry : Country[] = []
  constructor( private paisService : PaisService) { }

  ngOnInit(): void {
  }

  onSubmit(  termino : string  ){
    this.termino = termino;
    this.paisService.getByCountry( this.termino ).subscribe(
      ( countries ) => {
        this.error = false
        this.paises = countries
        return
      }, ( err ) => {
        this.error = true;
        this.paises = []
        console.log( err )
        return
      }
    )
  }

  pressKey( termino : string ){
    this.error = false
    
    this.paisService.getByCountry( termino ).subscribe(
      paises => this.suggestionCountry = paises.splice(0,5),
      ( err ) => this.suggestionCountry = []
    )
  }
}
