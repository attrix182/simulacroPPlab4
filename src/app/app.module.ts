import { environment } from './../environments/environment.prod';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeliculaAltaComponent } from './componentes/pelicula-alta/pelicula-alta.component';
import { ActorAltaComponent } from './componentes/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './componentes/actor-listado/actor-listado.component';
import { PeliculaListadoComponent } from './componentes/pelicula-listado/pelicula-listado.component';
import { TablaPeliculaComponent } from './componentes/tabla-pelicula/tabla-pelicula.component';
import { DetallePeliculaComponent } from './componentes/detalle-pelicula/detalle-pelicula.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { PeliculaComponent } from './componentes/pelicula/pelicula.component';
import { FilaPeliculaComponent } from './componentes/fila-pelicula/fila-pelicula.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TablaPaisesComponent } from './componentes/tabla-paises/tabla-paises.component';
import { AngularFireModule } from '@angular/fire';
import { TablaActoresComponent } from './componentes/tabla-actores/tabla-actores.component';
import { ActorPeliculaComponent } from './componentes/actor-pelicula/actor-pelicula.component';


@NgModule({
  declarations: [
    AppComponent,
    ActorAltaComponent,
    ActorListadoComponent,
    PeliculaListadoComponent,
    PeliculaAltaComponent,
    TablaPeliculaComponent,
    DetallePeliculaComponent,
    BusquedaComponent,
    PeliculaComponent,
    FilaPeliculaComponent,
    TablaPaisesComponent,
    TablaActoresComponent,
    ActorPeliculaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


