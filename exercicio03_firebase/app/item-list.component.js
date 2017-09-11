System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ItemListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ItemListComponent = (function () {
                function ItemListComponent() {
                    this.lista = [];
                    this.edit = new core_1.EventEmitter();
                    this.remove = new core_1.EventEmitter();
                }
                ItemListComponent.prototype.onEdit = function (item) {
                    this.edit.emit(item);
                };
                ItemListComponent.prototype.onRemove = function (item) {
                    this.remove.emit(item);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ItemListComponent.prototype, "lista", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], ItemListComponent.prototype, "edit", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], ItemListComponent.prototype, "remove", void 0);
                ItemListComponent = __decorate([
                    core_1.Component({
                        selector: 'item-list',
                        template: "\n    <div class=\"panel panel-default\">\n      <table class=\"table table-striped\">\n        <tr *ngFor=\"let item of lista\">\n          <td>\n            <a [href]=\"item.descricao\" target=\"_blank\">{{item.descricao}}</a>\n          </td>\n          <td class=\"hidden-xs hidden-sm\">{{item.quantidade}}</td>\n          <td>\n            <button (click)=\"onEdit(item)\" class=\"btn btn-primary\">\n              <span class=\"glyphicon glyphicon-pencil\"></span>\n              <span class=\"hidden-xs\">Edit</span>\n            </button>\n            <button (click)=\"onRemove(item)\" class=\"btn btn-danger\">\n              <span class=\"glyphicon glyphicon-trash\"></span>\n              <span class=\"hidden-xs\">Delete</span>\n            </button>\n          </td>\n        </tr>\n      </table>\n    </div>\n  ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], ItemListComponent);
                return ItemListComponent;
            }());
            exports_1("ItemListComponent", ItemListComponent);
        }
    }
});
