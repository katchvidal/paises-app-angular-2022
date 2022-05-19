import { Component, Input, OnInit } from '@angular/core';
import { PaisService } from 'src/app/services/pais/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: []
})
export class PorPaisComponent implements OnInit {

  termino : string = ''
  paises: any[] = []
  error = false;
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
    
  }
}
