import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/core/interfaces/paises/pais.interface';
import { PaisService } from 'src/app/services/pais/pais.service';

@Component({
  selector: 'app-por-regiones',
  templateUrl: './por-regiones.component.html',
  styles: [`
    button{
      margin-right: 5px
    }
  `
  ]
})
export class PorRegionesComponent implements OnInit {
  regiones = ['america', 'africa', 'Europe', 'asia', 'oceania']
  activeRegion = ''
  paises : Country[] = []
  constructor( private paisService : PaisService ) { }

  ngOnInit(): void {
  }

  activateRegion( region : string ){
    this.activeRegion = region
    // TODO: HACER EL LLAMADO A LA API REGION POR LA REGIO DE BUSQUEDA 
    this.paisService.getByRegion( this.activeRegion )
      .subscribe(
        ( res ) => {
          console.log( res )
          this.paises = res 
        }
      )
  }
}
