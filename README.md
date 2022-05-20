#   Aplicacion de Angular por Paises @13 
```
    -   Configuracion del Arbol
        src
            -   Shared
            -   Paises
                -   Componennts
                -   Pages
                -   Interfaces
                -   Services
```

##  Lazy Loading
```
    Lazy Loading en la Carga de Rutas (router-outlet)
    Paises -> Modulo que maneje todo lo que pasa en ese folder
            -   Pais.module.ts -> Routing.module.ts
            #   Pais.module.ts
                import { NgModule } from '@angular/core';
                import { CommonModule } from '@angular/common';
                import { PaisRoutingModule } from './pais-routing.module';

                @NgModule({
                declarations: [
                ],
                imports: [
                    CommonModule,
                    PaisRoutingModule   -> Da acceso al Modulo al manejador de las Rutas
                ]
                })
                export class PaisModule { }

            #   Pais-Routing.module.ts      -> Hacemos llamado a las ruas de cada Modulo
            const routes: Routes = [
                { path: '', loadChildren: () => import('./pages/por-pais/por-pais.module').then(m => m.PorPaisModule) },
                { path: 'capital', loadChildren: () => import('./pages/por-capital/por-capital.module').then(m => m.PorCapitalModule) }
            ];
            export class PaisRoutingModule { }

            -   Pages Folder 
                -   por-pais -> Contiene su Modulo y Routing-module
                    import { NgModule } from '@angular/core';
                    import { RouterModule, Routes } from '@angular/router';
                    import { PorPaisComponent } from './por-pais.component';

                    const routes: Routes = [
                        {path: '',  component: PorPaisComponent }
                    ];

                    @NgModule({
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule]
                    })
                    export class PorPaisRoutingModule { }

                - Pais Modulo ->
                    import { NgModule } from '@angular/core';
                    import { CommonModule } from '@angular/common';

                    import { PorPaisRoutingModule } from './por-pais-routing.module';
                    import { PorPaisComponent } from './por-pais.component';




                    @NgModule({
                    declarations: [
                        PorPaisComponent -> Le damos Acceso al Modulo de el manejador de Ruta
                    ],
                    imports: [
                        CommonModule,
                        PorPaisRoutingModule
                    ]
                    })
                    export class PorPaisModule { }

            -   App.module.ts
                import { NgModule } from '@angular/core';
                import { BrowserModule } from '@angular/platform-browser';

                import { AppRoutingModule } from './app-routing.module';
                import { AppComponent } from './app.component';
                import { PaisModule } from './pais/pais.module';


                @NgModule({
                declarations: [
                    AppComponent,
                ],
                imports: [
                    BrowserModule,
                    PaisModule, ->  Le damos acceso a toda la aplicacion global al Modulo de la App Pais ( contiene el manejador global de rutas de la aplicacion pais -> a su vez de los modulos que contiene  por dentro haciendo una configuracion del lazy loading )
                    AppRoutingModule
                ],
                providers: [],
                bootstrap: [AppComponent]
                })
                export class AppModule { }



```

##  Input & Output
```
    Para recibir informacion de un componente padare a un componente hijo por lo general haremos uso de la propiedad
    Ej. Nuestra tabla consume informacion de Country[] para poder renderizarla
        @Input() paises : Country[] = [] <- Espera recibir un arreglo de Paises
        como en el componente donde se manda a llamar ese modulo de tabla Gnerica <T> podemos enviarle informacion atravez de la siguiente propiedad
        <app-table-country [paises]="paises" ></app-table-country>

    Ej.2 Nuestro componente de Search Bar Reacciona cuando el cliente ejecuta una accion ( click, enter ) del teclado este emite cierta informacion y necesitamos 
    enviar de un componente Hijo -> a un Componente Padre haremos uso de la propiedad @Output del angular core
        @Output() terminoEvent = new EventEmitter<string>();
        termino : string = ''
        <input class="form-control" type="text"  [(ngModel)]="termino" name="termino" /> <- Propiedades del HTML -> AL TS.COMPONENT
        <app-search-bar (terminoEvent)="onSubmit( $event )"></app-search-bar> <- Componente Padre recibe por medio del evento emitter dentro de la funcion que ya hemos creado

```

##  ngOnInit(){}
```
```

##  API RestCountry V3
```
    -> https://restcountries.com/
    fue la API USADA DONDE TODO EL PROYECTO
```

##  AutoComplete Suggestion with Debounce
```
    1.  Necesitamos tener un debounce 
```