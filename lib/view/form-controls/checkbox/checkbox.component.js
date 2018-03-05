"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var models_1 = require("../../../models");
var forms_1 = require("@angular/forms");
var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent() {
    }
    CheckboxComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "ngs-form-control-checkbox",
                    template: "<div  [formGroup]=\"form\">     <mat-checkbox [formControlName]=\"schema.name\">         {{schema.title}}     </mat-checkbox> </div>",
                    styles: [":host { \tdisplay: block; } .mat-form-field { \twidth: 100%; }"]
                },] },
    ];
    /** @nocollapse */
    CheckboxComponent.ctorParameters = function () { return []; };
    CheckboxComponent.propDecorators = {
        "form": [{ type: core_1.Input },],
        "schema": [{ type: core_1.Input },],
    };
    return CheckboxComponent;
}());
exports.CheckboxComponent = CheckboxComponent;
//# sourceMappingURL=checkbox.component.js.map