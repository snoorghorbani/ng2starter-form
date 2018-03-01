"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var models_1 = require("../../../models");
var forms_1 = require("@angular/forms");
var EmailComponent = /** @class */ (function () {
    function EmailComponent() {
    }
    EmailComponent.prototype.ngOnInit = function () { };
    EmailComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "ngs-form-control-email",
                    template: "<div  [formGroup]=\"form\"> <mat-form-field fxFlexFill>     <input matInput [type]=\"schema.inputType\" [placeholder]=\"schema.placeholder\" [formControlName]=\"schema.name\"> </mat-form-field> </div>",
                    styles: [":host { \tdisplay: block; } .mat-form-field { \twidth: 100%; }"]
                },] },
    ];
    /** @nocollapse */
    EmailComponent.ctorParameters = function () { return []; };
    EmailComponent.propDecorators = {
        "form": [{ type: core_1.Input },],
        "schema": [{ type: core_1.Input },],
    };
    return EmailComponent;
}());
exports.EmailComponent = EmailComponent;
//# sourceMappingURL=email.component.js.map