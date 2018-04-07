"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var FormListComponent = /** @class */ (function () {
    function FormListComponent() {
    }
    FormListComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "form-list",
                    template: "<div fxLayout=\"row\" fxLayoutWrap fxLayoutAlign=\"center center\" >     <mat-card class=\"cards-item\" *ngFor=\"let item of (data$ | async)\" fxFlex=\"51\">       <h3>         <a [routerLink]=\"['edit' ,  item._id]\">           <mat-icon aria-label=\"edit form\">edit</mat-icon>         </a>         {{item.name}}       </h3>   </mat-card> </div>"
                },] },
    ];
    /** @nocollapse */
    FormListComponent.ctorParameters = function () { return []; };
    FormListComponent.propDecorators = {
        "data$": [{ type: core_1.Input, args: ["data",] },],
    };
    return FormListComponent;
}());
exports.FormListComponent = FormListComponent;
//# sourceMappingURL=form-list.component.js.map