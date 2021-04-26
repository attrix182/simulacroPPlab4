import { ActorAltaComponent } from './componentes/actor-alta/actor-alta.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';


const routes: Routes = [

  { path: 'busqueda', component: BusquedaComponent },

 { path: '', redirectTo: '/busqueda', pathMatch: 'full' },


 {

  path: 'actor',

  children:
    [

      { path: 'alta', component: ActorAltaComponent }
    ]

},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
