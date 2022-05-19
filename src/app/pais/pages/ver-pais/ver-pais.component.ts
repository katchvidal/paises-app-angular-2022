import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Country } from 'src/app/core/interfaces/paises/pais.interface';
import { PaisService } from 'src/app/services/pais/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.scss']
})
export class VerPaisComponent implements OnInit {
  pais! : Country;
  constructor( private activatedRoute : ActivatedRoute, private paisService : PaisService  ) { }

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(
    //   ({ code }) => {
    //     this.paisService.getByCode( code ).subscribe(
    //       (res) =>{
    //         this.pais = res
    //         console.log( this.pais )
    //       }
    //     )
    //   }
    // )

    this.activatedRoute.params
      .pipe(
        switchMap(({ code }) => this.paisService.getByCode( code )))
      .subscribe(( pais : any  ) =>  {
        console.log( pais[0])
        return this.pais = pais[0]
      })
  }

}
