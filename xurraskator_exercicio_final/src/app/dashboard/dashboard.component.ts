import { Component, OnInit } from '@angular/core';
import {CategoriaService} from '../categoria.service';
import {ProdutoService} from '../produto.service';
import {PedidoService} from '../pedido.service';
import {ClienteService} from '../cliente.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  listaCategoria:any[];
  listaProduto:any[];
  listaPedido:any[];
  listaCliente:any[];

  constructor(
    private categoriaService:CategoriaService,
    private produtoService:ProdutoService,
    private pedidoService:PedidoService,
    private clienteService:ClienteService
    ) { }

  ngOnInit() {
    this.atualiza();
  }

  atualiza(){
    this.categoriaService.getAll().then(response=>{
      this.listaCategoria=response.values;
    });
    this.produtoService.getAll().then(response=>{
      this.listaProduto=response.values;
    });
    this.pedidoService.getAll().then(response=>{
      this.listaPedido=response.values;
    });
    this.clienteService.getAll().then(response=>{
      this.listaCliente=response.values;
    });


  }

}
