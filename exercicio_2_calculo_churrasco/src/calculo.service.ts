export class CalculoService {

    getQuantidadeComida(pessoasAdultas: number, pessoasCriancas: number, comidaAdultas: number, comidaCriancas: number){
        return pessoasAdultas*comidaAdultas + pessoasCriancas*comidaCriancas;
    }

}