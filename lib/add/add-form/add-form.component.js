"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var form_field_schema_model_1 = require("../../models/form-field-schema.model");
var form_schema_model_1 = require("../../models/form-schema.model");
var models_1 = require("../../models");
var AddFormComponent = /** @class */ (function () {
    function AddFormComponent() {
        this.formGroup = models_1.AddFormApiModel.Request.formGroup;
        this.submited = new core_1.EventEmitter();
        this.changes = new core_1.EventEmitter();
    }
    AddFormComponent.prototype.emit = function () {
        this.formGroup.patchValue({ form: this.schema.form });
        this.submited.emit(this.formGroup.value);
    };
    AddFormComponent.prototype.changed = function () {
        this.formGroup.patchValue({ form: this.schema.form });
        this.changes.emit(this.formGroup.value);
    };
    AddFormComponent.prototype.changeOrder = function ($event) {
        debugger;
    };
    AddFormComponent.prototype.addFormGroup = function (root) {
        var group = new form_field_schema_model_1.FormControlSchema("group");
        group.fields = [];
        root.fields.push(group);
        return group;
    };
    AddFormComponent.prototype.addFormArray = function (root) {
        var array = new form_field_schema_model_1.FormControlSchema("array");
        array.fields = [];
        root.fields.push(array);
        return array;
    };
    AddFormComponent.prototype.addFormControl = function (root) {
        var control = new form_field_schema_model_1.FormControlSchema("control");
        root.fields.push(control);
        return control;
    };
    AddFormComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "ngs-form-add",
                    template: "<div fxLayout=\"row\" *ngIf=\"schema\">     <div [fxFlex]=\"50\" *ngIf=\"formGroup\">       <form [formGroup]=\"formGroup\">         <mat-card >           <mat-card-title>\u0627\u06CC\u062C\u0627\u062F \u0641\u0631\u0645 \u062C\u062F\u06CC\u062F</mat-card-title>           <mat-card-content>             <mat-form-field>                 <input type=\"text\" matInput (change)=\"changed()\" placeholder=\"\u0646\u0627\u0645 \u0641\u0631\u0645\" formControlName=\"name\">             </mat-form-field>             <!-- <div class=\"button-row\">                 <button mat-button color=\"primary\" (click)=\"addFormGroup(schema.form)\">Add form group</button>                 <button mat-button color=\"primary\" (click)=\"addFormArray(schema.form)\">Add form array</button>                 <button mat-button color=\"primary\" (click)=\"addFormControl(schema.form)\">Add form control</button>               </div> -->           </mat-card-content>         </mat-card>         <mat-card>           <mat-card-content>             <div [ngSwitch]=\"schema.form?.type\">               <app-form-group *ngSwitchCase=\"'group'\" [schema]=\"schema.form\" noHeader=\"true\" (changes)=\"changed()\"></app-form-group>               <app-form-array *ngSwitchCase=\"'array'\" [schema]=\"schema.form\" (changes)=\"changed()\"></app-form-array>             </div>           </mat-card-content>           <mat-card-actions>             <button mat-raised-button color=\"primary\" (click)=\"form.generate(schema)\">\u0627\u06CC\u062C\u0627\u062F \u0641\u0631\u0645</button>             <button mat-raised-button color=\"primary\" (click)=\"emit()\" type=\"submit\">\u062B\u0628\u062A</button>            </mat-card-actions>                      <div [formGroup]=\"formGroup.controls.events.controls.accept\">             <mat-slide-toggle (change)=\"changed()\"  formControlName=\"show\">\u0646\u0645\u0627\u06CC\u0634 \u062A\u0627\u06CC\u06CC\u062F</mat-slide-toggle>             <mat-form-field>               <input type=\"text\" (change)=\"changed()\"  matInput placeholder=\"\u0645\u062A\u0646 \u062A\u0627\u06CC\u06CC\u062F\" formControlName=\"text\">              </mat-form-field>           </div>           <div [formGroup]=\"formGroup.controls.events.controls.cancel\">             <mat-slide-toggle (change)=\"changed()\"  formControlName=\"show\">\u0646\u0645\u0627\u06CC\u0634 \u0627\u0646\u0635\u0631\u0627\u0641</mat-slide-toggle>             <mat-form-field>               <input type=\"text\" (change)=\"changed()\"  matInput placeholder=\"\u0645\u062A\u0646 \u0627\u0646\u0635\u0631\u0627\u0641\" formControlName=\"text\">              </mat-form-field>           </div>          </mat-card>     </form>   </div>     <div [fxFlex]=\"50\">       <ngs-form-view [local]='true' [id]=\"schema._id\"></ngs-form-view>     </div>   </div>"
                },] },
    ];
    /** @nocollapse */
    AddFormComponent.ctorParameters = function () { return []; };
    AddFormComponent.propDecorators = {
        "schema": [{ type: core_1.Input },],
        "formGroup": [{ type: core_1.Input },],
        "submited": [{ type: core_1.Output },],
        "changes": [{ type: core_1.Output },],
    };
    return AddFormComponent;
}());
exports.AddFormComponent = AddFormComponent;
//# sourceMappingURL=add-form.component.js.map