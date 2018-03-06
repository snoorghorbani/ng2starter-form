"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var NgsFormSelectorComponent = /** @class */ (function () {
    function NgsFormSelectorComponent(store) {
        this.store = store;
        this.select = new core_1.EventEmitter();
        this.forms$ = this.store.select(function (state) { return state.form.list.data; });
    }
    NgsFormSelectorComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "ngs-form-selector",
                    template: "<mat-form-field>   <mat-select (change)=\"select.emit($event.value)\" placeholder=\"\u0641\u0631\u0645\">     <mat-option *ngFor=\"let item of forms$ | async\" [value]=\"item._id\">{{item.name}}</mat-option>   </mat-select> </mat-form-field>"
                },] },
    ];
    /** @nocollapse */
    NgsFormSelectorComponent.ctorParameters = function () { return [
        { type: store_1.Store, },
    ]; };
    NgsFormSelectorComponent.propDecorators = {
        "select": [{ type: core_1.Output },],
    };
    return NgsFormSelectorComponent;
}());
exports.NgsFormSelectorComponent = NgsFormSelectorComponent;
//# sourceMappingURL=form-selector.component.js.map