import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AutorizadorService} from './autorizador.service';

@Injectable()
export class GuardGuard implements CanActivate {
 
 constructor(private gas:AutorizadorService,private router:Router){

 }



  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.gas.url=state.url;
    if (!this.gas.logado){
        this.router.navigate(['/login']);
    }

    return this.gas.logado;
  }
}
