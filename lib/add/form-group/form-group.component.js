"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var models_1 = require("../../models");
var FormGroupComponent = /** @class */ (function () {
    function FormGroupComponent() {
        this.noHeader = false;
        this.changes = new core_1.EventEmitter();
        this.delete = new core_1.EventEmitter();
    }
    FormGroupComponent.prototype.changed = function () {
        this.changes.emit();
    };
    FormGroupComponent.prototype.addFormGroup = function (root) {
        var group = new models_1.FormControlSchema("group");
        group.fields = [];
        root.fields.push(group);
        this.schema.id = this.schema.id + 1;
        return group;
    };
    FormGroupComponent.prototype.addFormArray = function (root) {
        var array = new models_1.FormControlSchema("array");
        array.fields = [];
        root.fields.push(array);
        return array;
    };
    FormGroupComponent.prototype.addFormControl = function (root) {
        var control = new models_1.FormControlSchema("control");
        root.fields.push(control);
        return control;
    };
    FormGroupComponent.prototype.deleteFormGroup = function (idx) {
        this.schema.fields.splice(idx, 1);
    };
    FormGroupComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "app-form-group",
                    template: "<mat-card>     <mat-card-content>        <mat-form-field *ngIf=\"!noHeader\">           <input matInput [(ngModel)]=\"schema.name\" placeholder=\"Name\">       </mat-form-field>                <mat-form-field *ngIf=\"!noHeader\">           <input matInput [(ngModel)]=\"schema.title\" placeholder=\"\u0639\u0646\u0648\u0627\u0646\">       </mat-form-field>                <div class=\"button-row\">         <button mat-button color=\"primary\" (click)=\"addFormGroup(schema)\">  addFormGroup  </button>         <button mat-button color=\"primary\" (click)=\"addFormArray(schema)\">  addFormArray  </button>         <button mat-button color=\"primary\" (click)=\"addFormControl(schema)\">addFormControl</button>       </div>        <div *ngFor=\"let field of schema.fields;let i = index\">         <div [ngSwitch]=\"field.type\">           <app-form-group   *ngSwitchCase=\"'group'\"   [schema]=\"field\" (change)=\"changes()\"></app-form-group>           <app-form-array   *ngSwitchCase=\"'array'\"   [schema]=\"field\" (change)=\"changes()\"></app-form-array>           <app-form-control *ngSwitchCase=\"'control'\" [schema]=\"field\" (changes)=\"changed()\" (delete)=\"deleteFormGroup(i)\"></app-form-control>         </div>       </div>    </mat-card-content> </mat-card>"
                },] },
    ];
    /** @nocollapse */
    FormGroupComponent.ctorParameters = function () { return []; };
    FormGroupComponent.propDecorators = {
        "schema": [{ type: core_1.Input },],
        "noHeader": [{ type: core_1.Input },],
        "changes": [{ type: core_1.Output },],
        "delete": [{ type: core_1.Output },],
    };
    return FormGroupComponent;
}());
exports.FormGroupComponent = FormGroupComponent;
//# sourceMappingURL=form-group.component.js.map