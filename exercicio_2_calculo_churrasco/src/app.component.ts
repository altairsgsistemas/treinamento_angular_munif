import { Component } from '@angular/core';
import {CalculoService} from './calculo.service';

@Component({
  selector: 'calculadora-churrasco',
  template: `
  <hr>
  Numero de pessoas:<br>
  Adultos: <input type="number" [(ngModel)]="pessoasAdultas" [class.error]="isInvalid(pessoasAdultas)" [class.negativo]="isNegativo(pessoasAdultas)"> Crianças: <input type="number" [(ngModel)]="pessoasCriancas" [class.error]="isInvalid(pessoasCriancas)" [class.negativo]="isNegativo(pessoasCriancas)">
  <hr> 
  Quantidade de comida média (Kilogramas):<br>
  Adultos: <input type="number" [(ngModel)]="comidaAdultas" min="0" step="0.1"> Crianças: <input type="number" [(ngModel)]="comidaCriancas" min="0" step="0.1">
  <hr>
  Quantidade de carne a ser comprada:<br>
  {{totalCarne | fixed:pessoasAdultas : pessoasCriancas}}
  `,
  styles: [`
    input[type=number] {
      width: 10ex;
      text-align: right;
    }
    .error {
      background-color: #ff6666;
    }
    .negativo{
      background-color: #fff666;
    }
  `]
})
export class AppComponent {

  pessoasAdultas = 0;
  pessoasCriancas = 0;
  comidaAdultas = 0;
  comidaCriancas = 0;

  constructor(private calculoService: CalculoService) {}

  get totalCarne(){
    const total = this.calculoService.getQuantidadeComida(this.pessoasAdultas, this.pessoasCriancas, this.comidaAdultas, this.comidaCriancas);
    return total;
  }

  isInvalid(valor){
    return !Number.isFinite(valor);
  }

  isNegativo(valor){
    return Number.isFinite(valor) && valor < 0;
  }

}
