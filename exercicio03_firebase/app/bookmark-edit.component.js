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
    var BookmarkEditComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            BookmarkEditComponent = (function () {
                function BookmarkEditComponent() {
                    this.item = {};
                    this.clear = new core_1.EventEmitter();
                    this.save = new core_1.EventEmitter();
                }
                BookmarkEditComponent.prototype.onClear = function () {
                    this.clear.emit();
                };
                BookmarkEditComponent.prototype.onSave = function () {
                    this.save.emit(this.item);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], BookmarkEditComponent.prototype, "item", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], BookmarkEditComponent.prototype, "clear", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], BookmarkEditComponent.prototype, "save", void 0);
                BookmarkEditComponent = __decorate([
                    core_1.Component({
                        selector: 'churrasco-edit',
                        template: "\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-body\">\n\n        <input type=\"text\" [(ngModel)]=\"churrasco.title\"\n          placeholder=\"Title\" style=\"width: 25%;\">\n\n        <input type=\"text\" [(ngModel)]=\"churrasco.url\"\n          placeholder=\"URL\" style=\"width: 50%;\">\n\n        <button (click)=\"onSave()\" class=\"btn btn-primary\">\n          <span class=\"glyphicon glyphicon-ok\"></span>\n          <span class=\"hidden-xs\">Save</span>\n        </button>\n\n        <button (click)=\"onClear()\" class=\"btn btn-warning\">\n          <span class=\"glyphicon glyphicon-remove\"></span>\n          <span class=\"hidden-xs\">Clear</span>\n        </button>\n        \n      </div>\n    </div>\n  ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], BookmarkEditComponent);
                return BookmarkEditComponent;
            }());
            exports_1("BookmarkEditComponent", BookmarkEditComponent);
        }
    }
});
