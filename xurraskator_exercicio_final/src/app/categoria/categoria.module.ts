import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AccordionModule,GrowlModule, DataListModule} from 'primeng/primeng';     //accordion and accordion tab
import { ToolbarModule,ButtonModule,SplitButtonModule} from 'primeng/primeng';
import { DataTableModule,SharedModule} from 'primeng/primeng';
import { InputTextModule} from 'primeng/primeng';
import {PanelModule} from 'primeng/primeng';

import { CategoriaRoutingModule } from './categoria-routing.module';
import { CrudcategoriaComponent } from './crudcategoria/crudcategoria.component';
import { ListaComponent } from './lista/lista.component';
import { DetalhesComponent } from './detalhes/detalhes.component';

@NgModule({
  imports: [
    CommonModule,FormsModule,PanelModule,
    CategoriaRoutingModule,
    BrowserAnimationsModule,
    AccordionModule,GrowlModule,DataListModule,ToolbarModule,ButtonModule,SplitButtonModule,
    DataTableModule,SharedModule,InputTextModule

  ],
  declarations: [CrudcategoriaComponent, ListaComponent, DetalhesComponent]
})
export class CategoriaModule { 
   
   constructor(){
     console.log("CategoriaModule");

   }


}
