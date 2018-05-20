"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var models_1 = require("../../models");
var FormArrayComponent = /** @class */ (function () {
    function FormArrayComponent() {
        this.changes = new core_1.EventEmitter();
    }
    FormArrayComponent.prototype.changed = function () {
        this.changes.emit();
    };
    FormArrayComponent.prototype.addFormGroup = function (root) {
        var group = new models_1.FieldConfig("group");
        group.fields = [];
        root.fields.push(group);
        return group;
    };
    FormArrayComponent.prototype.addFormArray = function (root) {
        var array = new models_1.FieldConfig("array");
        array.fields = [];
        root.fields.push(array);
        return array;
    };
    FormArrayComponent.prototype.addFormControl = function (root) {
        var control = new models_1.FieldConfig("control");
        root.fields.push(control);
        return control;
    };
    FormArrayComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "app-form-array",
                    template: "<mat-card>   <mat-card-content>     <mat-form-field>         <input matInput [(ngModel)]=\"schema.name\" placeholder=\"Name\">     </mat-form-field>            <div class=\"button-row\">       <button mat-button color=\"primary\" (click)=\"addFormGroup(schema)\">addFormGroup</button>       <button mat-button color=\"primary\" (click)=\"addFormArray(schema)\">addFormArray</button>       <!-- <button mat-button color=\"primary\" (click)=\"addFormControl(schema)\">addFormControl</button> -->     </div>          <div *ngFor=\"let field of schema.fields\">       <div [ngSwitch]=\"field.type\">         <app-form-group *ngSwitchCase=\"'group'\" [schema]=\"field\" (changes)=\"changed()\"></app-form-group>         <app-form-array *ngSwitchCase=\"'array'\" [schema]=\"field\" (changes)=\"changed()\"></app-form-array>         <!-- <app-form-control *ngSwitchCase=\"'control'\" [schema]=\"field\" (change)=\"changed($event)\"></app-form-control> -->       </div>     </div>        </mat-card-content> </mat-card>"
                },] },
    ];
    /** @nocollapse */
    FormArrayComponent.ctorParameters = function () { return []; };
    FormArrayComponent.propDecorators = {
        "schema": [{ type: core_1.Input },],
        "changes": [{ type: core_1.Output },],
    };
    return FormArrayComponent;
}());
exports.FormArrayComponent = FormArrayComponent;
//# sourceMappingURL=form-array.component.js.map