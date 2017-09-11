import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'item-edit',
  template: `
    <div class="panel panel-primary">
      <div class="panel-body">

        <input type="text" [(ngModel)]="item.descricao"
          placeholder="Descrição" style="width: 50%;">

        <input type="text" [(ngModel)]="item.quantidade"
          placeholder="Quantidade" style="width: 25%;">

        <button (click)="onSave()" class="btn btn-primary">
          <span class="glyphicon glyphicon-ok"></span>
          <span class="hidden-xs">Save</span>
        </button>

        <button (click)="onClear()" class="btn btn-warning">
          <span class="glyphicon glyphicon-remove"></span>
          <span class="hidden-xs">Clear</span>
        </button>
        
      </div>
    </div>
  `,
})
export class ItemEditComponent {

  @Input() item = {};
  @Output() clear = new EventEmitter();
  @Output() save = new EventEmitter();

  onClear() {
    this.clear.emit();
  }

  onSave() {
    this.save.emit(this.item);
  }

}
