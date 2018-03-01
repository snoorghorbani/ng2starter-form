"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var models_1 = require("../../models");
var FormControlComponent = /** @class */ (function () {
    function FormControlComponent() {
        this.changes = new core_1.EventEmitter();
        this.width = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.options = new forms_1.FormArray([
            new forms_1.FormGroup({
                key: new forms_1.FormControl(),
                value: new forms_1.FormControl()
            })
        ]);
    }
    FormControlComponent.prototype.changed = function () {
        debugger;
        if ([this.schema.name, this.schema.placeholder, this.schema.inputType].some(function (item) { return !item; }))
            return true;
        this.changes.emit();
    };
    FormControlComponent.prototype.addOption = function () {
        this.options.push(new forms_1.FormGroup({
            key: new forms_1.FormControl(),
            value: new forms_1.FormControl()
        }));
    };
    FormControlComponent.prototype.removeOption = function (i) {
        this.options.controls.splice(i, 1);
    };
    FormControlComponent.prototype.insertOptions = function () {
        debugger;
        this.schema.options = this.options.value;
    };
    FormControlComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "app-form-control",
                    template: " <mat-accordion fxFlexLayout=\"row\">     <mat-expansion-panel [expanded]=\"1\"  (opened)=\"1\" >       <mat-expansion-panel-header>         <mat-panel-title>             {{schema.name}}         </mat-panel-title>       </mat-expansion-panel-header>         <mat-form-field>           <input matInput [(ngModel)]=\"schema.name\" (change)=\"changed()\" placeholder=\"Name\">         </mat-form-field>                  <mat-form-field>           <input matInput [(ngModel)]=\"schema.placeholder\" (change)=\"changed()\" placeholder=\"Placeholder\"/>         </mat-form-field>                  <mat-form-field>           <mat-select [(ngModel)]=\"schema.inputType\" (change)=\"changed()\" placeholder=\"Input Type\">             <mat-option value=\"select\">select</mat-option>             <mat-option value=\"text\">text</mat-option>             <mat-option value=\"number\">number</mat-option>             <mat-option value=\"email\">email</mat-option>             <mat-option value=\"color\">color</mat-option>             <mat-option value=\"radio\">radio</mat-option>             <mat-option value=\"checkbox\">checkbox</mat-option>           </mat-select>         </mat-form-field>            <mat-form-field>             <input matInput [(ngModel)]=\"schema.value\" (change)=\"changed()\" placeholder=\"Value\"/>         </mat-form-field>                    <mat-form-field>             <mat-select [(ngModel)]=\"schema.width\" (change)=\"changed()\" placeholder=\"width\">               <mat-option *ngFor=\"let item of width\" [value]=\"item\">{{item}}</mat-option>             </mat-select>           </mat-form-field>          <div *ngIf=\"schema.inputType=='select'\">           [options]           <button (click)=\"addOption()\">+</button>           <button (click)=\"insertOptions()\">insert</button>           <div *ngFor=\"let option of options.controls;index as i\">             {{i}}             <div [formGroup]=\"options.controls[i]\">               <mat-form-field>                 <input matInput (change)=\"changed()\" formControlName=\"key\" placeholder=\"key\"/>               </mat-form-field>               <mat-form-field>                 <input matInput (change)=\"changed()\" formControlName=\"value\" placeholder=\"value\"/>               </mat-form-field>             </div>           </div>         </div>     </mat-expansion-panel>   </mat-accordion>"
                },] },
    ];
    /** @nocollapse */
    FormControlComponent.ctorParameters = function () { return []; };
    FormControlComponent.propDecorators = {
        "schema": [{ type: core_1.Input },],
        "changes": [{ type: core_1.Output },],
    };
    return FormControlComponent;
}());
exports.FormControlComponent = FormControlComponent;
//# sourceMappingURL=form-control.component.js.map