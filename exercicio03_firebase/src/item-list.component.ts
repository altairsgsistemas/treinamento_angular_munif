import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'item-list',
  template: `
    <div class="panel panel-default">
      <table class="table table-striped">
        <tr *ngFor="let item of lista">
          <td>
            <a [href]="item.descricao" target="_blank">{{item.descricao}}</a>
          </td>
          <td class="hidden-xs hidden-sm">{{item.quantidade}}</td>
          <td>
            <button (click)="onEdit(item)" class="btn btn-primary">
              <span class="glyphicon glyphicon-pencil"></span>
              <span class="hidden-xs">Edit</span>
            </button>
            <button (click)="onRemove(item)" class="btn btn-danger">
              <span class="glyphicon glyphicon-trash"></span>
              <span class="hidden-xs">Delete</span>
            </button>
          </td>
        </tr>
      </table>
    </div>
  `,
})
export class ItemListComponent {

  @Input() lista = [];
  @Output() edit = new EventEmitter();
  @Output() remove = new EventEmitter();

  onEdit(item) {
    this.edit.emit(item);
  }

  onRemove(item) {
    this.remove.emit(item);
  }

}
