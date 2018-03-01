"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var models_1 = require("../../../models");
var forms_1 = require("@angular/forms");
var SelectComponent = /** @class */ (function () {
    function SelectComponent() {
    }
    SelectComponent.prototype.ngOnInit = function () { };
    SelectComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "ngs-form-control-select",
                    template: "<div  [formGroup]=\"form\"> <mat-form-field>     <mat-select [formControlName]=\"schema.name\" [placeholder]=\"schema.placeholder\">       <mat-option *ngFor=\"let option of schema.options\" [value]=\"option.value\">{{option.key}}</mat-option>     </mat-select> </mat-form-field> </div>",
                    styles: [":host { \tdisplay: block; } .mat-form-field { \twidth: 100%; }"]
                },] },
    ];
    /** @nocollapse */
    SelectComponent.ctorParameters = function () { return []; };
    SelectComponent.propDecorators = {
        "form": [{ type: core_1.Input },],
        "schema": [{ type: core_1.Input },],
    };
    return SelectComponent;
}());
exports.SelectComponent = SelectComponent;
//# sourceMappingURL=select.component.js.map