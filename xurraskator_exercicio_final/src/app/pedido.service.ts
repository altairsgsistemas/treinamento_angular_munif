import { Injectable } from '@angular/core';
import { SuperService} from './comum/superservice.service';
import { Http, Headers, Response } from '@angular/http';
import { AutorizadorService} from './autorizador.service';


@Injectable()
export class PedidoService extends SuperService{

  constructor( http: Http,a:AutorizadorService) {
    super('pedido',http,a);
   }

  
}
