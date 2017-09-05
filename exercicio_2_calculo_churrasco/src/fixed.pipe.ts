import  { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'fixed'})
export class FixedPipe implements PipeTransform {

    transform(valor: number, pessoasAdultas: number, pessoasCriancas: number){
        if (Number.isFinite(valor) && valor > 0 ) {
            return "Para " + pessoasAdultas.toString() + " adultos e " + pessoasCriancas.toString() + " criança(s) será necessário " + valor.toFixed( 3 ) + " Kilogramas de carne";
        
        } else {
            return "Valores inválidos"
        }
 
    }

}