import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnibusComponent } from './onibus/onibus.component';
import { LotacaoComponent } from './lotacao/lotacao.component';
import { ItinerariosComponent } from './itinerarios/itinerarios.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'onibus', component: OnibusComponent },
  { path: 'lotacoes', component: LotacaoComponent },
  { path: 'itinerario/:id', component: ItinerariosComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
