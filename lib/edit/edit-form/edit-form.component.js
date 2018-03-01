"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var add_1 = require("../../add");
var EditFormComponent = /** @class */ (function (_super) {
    __extends(EditFormComponent, _super);
    function EditFormComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EditFormComponent.prototype.emit = function () {
        if (!this.formGroup.valid)
            return;
        return this.submited.emit(this.formGroup.value);
    };
    EditFormComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "edit-form",
                    template: "<div fxFlexLayout=\"row\" fxLayoutWrap fxLayoutAlign=\"center center\" *ngIf=\"schema\">   <div [fxFlex]=\"50\">     <form [formGroup]=\"formGroup\">       <mat-card >         <mat-card-header>           <mat-card-title>\u0627\u06CC\u062C\u0627\u062F \u0641\u0631\u0645 \u062C\u062F\u06CC\u062F</mat-card-title>         </mat-card-header>         <mat-card-content>           <mat-form-field>               <input type=\"text\" matInput placeholder=\"\u0646\u0627\u0645 \u0641\u0631\u0645*\" formControlName=\"name\">           </mat-form-field>           <div class=\"button-row\">               <button mat-button color=\"primary\" (click)=\"addFormGroup(schema.form)\">Add form group</button>               <button mat-button color=\"primary\" (click)=\"addFormArray(schema.form)\">Add form array</button>             </div>         </mat-card-content>       </mat-card>       <mat-card >         <mat-card-content>           <div [ngSwitch]=\"schema.form?.type\">             <app-form-group *ngSwitchCase=\"'group'\" [schema]=\"schema.form\" (changes)=\"changed($event)\"></app-form-group>             <app-form-array *ngSwitchCase=\"'array'\" [schema]=\"schema.form\" (changes)=\"changed($event)\"></app-form-array>           </div>         </mat-card-content>         <mat-card-actions>           <button mat-raised-button color=\"primary\" (click)=\"form.generate(schema)\">\u0627\u06CC\u062C\u0627\u062F \u0641\u0631\u0645</button>           <button mat-raised-button color=\"primary\" (click)=\"emit()\" type=\"submit\">\u062B\u0628\u062A</button>          </mat-card-actions>     </mat-card>   </form> </div>   <div [fxFlex]=\"50\">     <mat-card>       <mat-card-content>         <ngs-form-view [local]='true' [id]=\"schema._id\"></ngs-form-view>       </mat-card-content>     </mat-card>   </div> </div>"
                },] },
    ];
    /** @nocollapse */
    EditFormComponent.ctorParameters = function () { return []; };
    return EditFormComponent;
}(add_1.AddFormComponent));
exports.EditFormComponent = EditFormComponent;
//# sourceMappingURL=edit-form.component.js.map