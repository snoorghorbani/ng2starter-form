"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var models_1 = require("../../../models");
var forms_1 = require("@angular/forms");
var ColorComponent = /** @class */ (function () {
    function ColorComponent() {
    }
    ColorComponent.prototype.ngOnInit = function () { };
    ColorComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "ngs-form-control-color",
                    template: "<div  [formGroup]=\"form\"> <mat-form-field fxFlexFill>     <input matInput [type]=\"schema.inputType\" [placeholder]=\"schema.placeholder\" [formControlName]=\"schema.name\"> </mat-form-field> </div>",
                    styles: [":host { \tdisplay: block; } .mat-form-field { \twidth: 100%; }"]
                },] },
    ];
    /** @nocollapse */
    ColorComponent.ctorParameters = function () { return []; };
    ColorComponent.propDecorators = {
        "form": [{ type: core_1.Input },],
        "schema": [{ type: core_1.Input },],
    };
    return ColorComponent;
}());
exports.ColorComponent = ColorComponent;
//# sourceMappingURL=color.component.js.map