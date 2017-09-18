import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudclienteComponent } from './crudcliente/crudcliente.component';
import { ListaComponent } from './lista/lista.component';
import { DetalhesComponent } from './detalhes/detalhes.component';


const routes: Routes = [
  {
    path: 'clientes', component: CrudclienteComponent,
    children: [
      { path: '', component: ListaComponent },
      { path: 'detalhes/:id', component: DetalhesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule {
  constructor() {


  }

}
