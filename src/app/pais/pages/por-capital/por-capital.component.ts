import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/core/interfaces/paises/pais.interface';
import { PaisService } from 'src/app/services/pais/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {
  termino: string = ''
  paises: Country[] = [];
  error: any;
  constructor( private paisService : PaisService ) { }

  ngOnInit(): void {
  }

  onSubmit(termino : any ){
    this.termino = termino 
    this.paisService.getByCapitalCity( this.termino ).subscribe(
      country => {
        
        this.paises = country
      }, ( err ) => {
        this.error = true;
        this.paises = []
        console.log( err )
        return
      }
      
    )
  }
}
