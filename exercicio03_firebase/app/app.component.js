System.register(['@angular/core', './churrasco.service'], function(exports_1, context_1) {
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
    var core_1, churrasco_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (churrasco_service_1_1) {
                churrasco_service_1 = churrasco_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(churrascoService) {
                    this.churrascoService = churrascoService;
                    this.lista = [];
                    this.editableItem = {};
                    churrascoService.errorHandler = function (error) {
                        return window.alert('Oops! The server request failed.');
                    };
                    this.reload();
                }
                AppComponent.prototype.clear = function () {
                    this.editableItem = {};
                };
                AppComponent.prototype.edit = function (item) {
                    this.editableItem = Object.assign({}, item);
                };
                AppComponent.prototype.remove = function (item) {
                    var _this = this;
                    this.churrascoService.removeItem(item)
                        .then(function () { return _this.reload(); });
                };
                AppComponent.prototype.save = function (item) {
                    var _this = this;
                    if (item.id) {
                        this.churrascoService.updateItem(item)
                            .then(function () { return _this.reload(); });
                    }
                    else {
                        this.churrascoService.addItem(item)
                            .then(function () { return _this.reload(); });
                    }
                    this.clear();
                };
                AppComponent.prototype.reload = function () {
                    var _this = this;
                    return this.churrascoService.getLista()
                        .then(function (lista) { return _this.lista = lista; });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'churrasco-app',
                        template: "\n    <item-edit [item]=\"editableItem\"\n      (save)=\"save($event)\" (clear)=\"clear()\"></item-edit>\n    <item-list [lista]=\"lista\"\n      (edit)=\"edit($event)\" (remove)=\"remove($event)\"></item-list>\n  ",
                    }), 
                    __metadata('design:paramtypes', [churrasco_service_1.ChurrascoService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
