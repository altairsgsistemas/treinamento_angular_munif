import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { ClienteService} from '../../cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SuperLista } from '../../comum/superlista.component';

@Component({
  selector: 'app-lista',
  templateUrl: '../../comum/lista.component.html',
  styleUrls:  ['../../comum/lista.component.css']
})
export class ListaComponent extends SuperLista implements OnInit {

  constructor(service:ClienteService, router:Router, route: ActivatedRoute) { 
    super(service,router,route);
    this.cols = [ {field: 'nome', header: 'Nome'}
    //, {field: 'version', header: 'Versão'} 
  ];
  }

}
