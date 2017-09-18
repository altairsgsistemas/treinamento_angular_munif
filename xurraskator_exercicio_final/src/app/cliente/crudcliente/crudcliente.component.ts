import { Component, OnInit } from '@angular/core';
import { ClienteService} from '../../cliente.service';
import { SuperCrud} from '../../comum/supercrud.component';

@Component({
  selector: 'crudcliente',
  templateUrl: './crudcliente.component.html',
  styleUrls: ['./crudcliente.component.css']
})
export class CrudclienteComponent extends SuperCrud implements OnInit {
  constructor(service: ClienteService) {
    super(service);
  }
}
