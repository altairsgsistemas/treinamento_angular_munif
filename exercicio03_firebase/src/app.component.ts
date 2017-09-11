import { Component } from '@angular/core';
import { ChurrascoService } from './churrasco.service';

@Component({
  selector: 'churrasco-app',
  template: `
    <item-edit [item]="editableItem"
      (save)="save($event)" (clear)="clear()"></item-edit>
    <item-list [lista]="lista"
      (edit)="edit($event)" (remove)="remove($event)"></item-list>
  `,
})
export class AppComponent {

  lista = [];
  editableItem = {};

  constructor(private churrascoService: ChurrascoService) {
    churrascoService.errorHandler = error =>
      window.alert('Oops! The server request failed.');
    this.reload();
  }

  clear() {
    this.editableItem = {};
  }

  edit(item) {
    this.editableItem = Object.assign({}, item);
  }

  remove(item) {
    this.churrascoService.removeItem(item)
      .then(() => this.reload());    
  }

  save(item) {
    if (item.id) {
      this.churrascoService.updateItem(item)
        .then(() => this.reload());
    } else {
      this.churrascoService.addItem(item)
        .then(() => this.reload());
    }
    this.clear();
  }

  private reload() {
    return this.churrascoService.getLista()
      .then(lista => this.lista = lista);
  }

}
