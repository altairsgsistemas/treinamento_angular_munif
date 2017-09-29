import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClientesClientePage } from './clientes-cliente';

@NgModule({
  declarations: [
    ClientesClientePage,
  ],
  imports: [
    IonicPageModule.forChild(ClientesClientePage),
  ],
})
export class ClientesClientePageModule {}
