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
                    template: "<div fxFlexLayout=\"row\" fxLayoutWrap fxLayoutAlign=\"center center\">     <mat-card class=\"config-box\" *ngFor=\"let item of (data$ | async)\" [fxFlex]=\"30\">       <mat-card-header>         <mat-card-title>           <a [routerLink]=\"['edit' ,  item._id]\">             <mat-icon aria-label=\"edit config\">edit</mat-icon>           </a>           {{item.name}}         </mat-card-title>       </mat-card-header>       <mat-card-content>         <div [id]=\"'form_' + item.Name\"></div>       </mat-card-content>     </mat-card>   </div>"
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