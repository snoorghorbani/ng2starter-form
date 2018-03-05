"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var models_1 = require("../../../models");
var NumberComponent = /** @class */ (function () {
    function NumberComponent() {
    }
    NumberComponent.prototype.ngOnInit = function () { };
    NumberComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "ngs-form-control-number",
                    template: "<div  [formGroup]=\"form\">     <mat-form-field fxFlexFill>         <input matInput [type]=\"schema.inputType\" [placeholder]=\"schema.title\" [formControlName]=\"schema.name\">     </mat-form-field> </div>",
                    styles: [":host { \tdisplay: block; } .mat-form-field { \twidth: 100%; }"]
                },] },
    ];
    /** @nocollapse */
    NumberComponent.ctorParameters = function () { return []; };
    NumberComponent.propDecorators = {
        "form": [{ type: core_1.Input },],
        "schema": [{ type: core_1.Input },],
    };
    return NumberComponent;
}());
exports.NumberComponent = NumberComponent;
//# sourceMappingURL=number.component.js.map