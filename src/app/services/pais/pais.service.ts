import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from 'src/app/core/interfaces/paises/pais.interface';


@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private URI = 'https://restcountries.com/v3.1/name'
  private URLCODE = 'https://restcountries.com/v3.1/alpha?codes'
  private URLCAPITAL = 'https://restcountries.com/v3.1/capital'

  constructor( private http: HttpClient ) { }

  //  Llamdo a endopints API 
  getByCountry( pais : string ) : Observable<Country[]> {
    const url = `${ this.URI }/${ pais }`
    return this.http.get<Country[]>(url)
  }

  getByCode( code : string ){
    const url = `${ this.URLCODE }=${ code }`
    return this.http.get<Country>( url )
  }

  getByCapitalCity( pais : string ){
    const url = `${this.URLCAPITAL}/${ pais }`
    return this.http.get<Country[]>( url )
  }
}
