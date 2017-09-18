import { Injectable } from '@angular/core';
import { SuperService} from './comum/superservice.service';
import { Http, Headers, Response } from '@angular/http';
import { AutorizadorService} from './autorizador.service';

@Injectable()
export class ProdutoService extends SuperService{

  constructor( http: Http,a:AutorizadorService) {
    super('produto',http,a);
   }

    filtra(filtro):Promise<any> {
    return this.http.get(`${this.baseUrl}/${this.collection}?searchFields=nome&q=${filtro}`,{headers:this.createAuthorizationHeader()})
      .toPromise().then(response=>response.json())
      .catch(this.errorHandler);
  }
}
