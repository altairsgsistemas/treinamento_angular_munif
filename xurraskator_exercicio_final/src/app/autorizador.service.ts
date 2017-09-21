import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

@Injectable()
export class AutorizadorService {

  protected token="";
  logado=false;
  url="";
  constructor(private http: Http) { 

  }

  getToken(){
    return this.token;
  }

  login(usuario:string,senha:string){

    console.log("usuario: " + usuario);
    console.log("senha: " + senha);

    if ( usuario == "admin@xurraskator.org" && senha == "sucesso" ) {
      this.logado = true;
    }else {
      this.logado = false;
    }
    
    this.token = "eternotoken";

    return new Promise(resolve => {
      setTimeout(() => resolve(1), 200); // Simula atraso do server 
    });

  }

}
