"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var models_1 = require("../../../models");
var TextComponent = /** @class */ (function () {
    function TextComponent() {
    }
    TextComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "ngs-form-control-text",
                    template: "<mat-form-field fxFlexFill [formGroup]=\"form\">     <input matInput [type]=\"schema.inputType\" [placeholder]=\"schema.placeholder\" [formControlName]=\"schema.name\"> </mat-form-field>",
                    styles: [":host { \tdisplay: block; } .mat-form-field { \twidth: 100%; }"]
                },] },
    ];
    /** @nocollapse */
    TextComponent.ctorParameters = function () { return []; };
    TextComponent.propDecorators = {
        "form": [{ type: core_1.Input },],
        "schema": [{ type: core_1.Input },],
    };
    return TextComponent;
}());
exports.TextComponent = TextComponent;
//# sourceMappingURL=text.component.js.map