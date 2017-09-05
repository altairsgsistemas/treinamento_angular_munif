import { Component } from '@angular/core';
import { HoraService } from './hora.service'

@Component({
    selector: 'hora-quote',
    template: '<p>{{horas}}</p>'
})
export class HoraComponent {

    horas: String;

    constructor(horaService: HoraService){
        horaService.generateHoras(1000, horas => this.horas = horas);
    }

}