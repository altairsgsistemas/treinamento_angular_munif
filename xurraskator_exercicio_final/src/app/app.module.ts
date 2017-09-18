import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,Http } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AccordionModule,GrowlModule, DataListModule} from 'primeng/primeng';     //accordion and accordion tab
import { ToolbarModule,ButtonModule,SplitButtonModule} from 'primeng/primeng';
import { CategoriaService} from './categoria.service';
import { ProdutoService} from './produto.service';
import { PedidoService} from './pedido.service';
import { CategoriaModule} from './categoria/categoria.module';
import { ClienteModule} from './cliente/cliente.module';
import { ProdutoModule} from './produto/produto.module';
import { PedidoModule} from './pedido/pedido.module';
import { AutorizadorService} from './autorizador.service';
import { ClienteService} from './cliente.service';
import { LoginComponent } from './login/login.component';
import { GuardGuard } from './guard.guard';
import { PanelModule} from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CategoriaModule,ProdutoModule,PedidoModule,ClienteModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AccordionModule,GrowlModule,DataListModule,ToolbarModule,ButtonModule,SplitButtonModule,PanelModule
    
  ],
  providers: [CategoriaService,ProdutoService,PedidoService,ClienteService,AutorizadorService,GuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { 


    constructor(private http:Http){
    }

}
