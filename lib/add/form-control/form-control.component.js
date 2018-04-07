"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var models_1 = require("../../models");
var FormControlComponent = /** @class */ (function () {
    function FormControlComponent() {
        this.changes = new core_1.EventEmitter();
        this.delete = new core_1.EventEmitter();
        this.width = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.options = new forms_1.FormArray([
            new forms_1.FormGroup({
                key: new forms_1.FormControl(),
                value: new forms_1.FormControl()
            })
        ]);
        this.tableOptions = new forms_1.FormGroup({
            dataEndpoint: new forms_1.FormControl("http://localhost:3000/api/fake/packgeCompareSimpleList")
        });
    }
    FormControlComponent.prototype.changed = function () {
        if ([this.schema.name, this.schema.title, this.schema.inputType].some(function (item) { return !item; }))
            return true;
        if (this.schema.inputType == "table") {
            this.schema.options = this.tableOptions.value;
        }
        else if (this.schema.inputType == "select") {
            this.schema.options = this.options.value;
        }
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
        this.schema.options = this.options.value;
    };
    FormControlComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "app-form-control",
                    template: "  <mat-expansion-panel>     <mat-expansion-panel-header>       <mat-panel-title>         <button mat-icon-button (click)=\"delete.emit()\">             <mat-icon aria-label=\" icon-button\">delete_forever</mat-icon>           </button>         {{schema.name}}       </mat-panel-title>     </mat-expansion-panel-header>       <mat-form-field>         <input matInput [(ngModel)]=\"schema.name\" (change)=\"changed()\" placeholder=\"Name\">       </mat-form-field>              <mat-form-field>         <input matInput [(ngModel)]=\"schema.title\" (change)=\"changed()\" placeholder=\"Placeholder\"/>       </mat-form-field>              <mat-form-field>         <mat-select [(ngModel)]=\"schema.inputType\" (change)=\"changed()\" placeholder=\"Input Type\">           <mat-option value=\"table\">table</mat-option>           <mat-option value=\"select\">select</mat-option>           <mat-option value=\"text\">text</mat-option>           <mat-option value=\"number\">number</mat-option>           <mat-option value=\"email\">email</mat-option>           <mat-option value=\"color\">color</mat-option>           <mat-option value=\"radio\">radio</mat-option>           <mat-option value=\"checkbox\">checkbox</mat-option>         </mat-select>       </mat-form-field>        <mat-form-field>           <input matInput [(ngModel)]=\"schema.value\" (change)=\"changed()\" placeholder=\"Value\"/>       </mat-form-field>                <mat-form-field>           <mat-select [(ngModel)]=\"schema.width\" (change)=\"changed()\" placeholder=\"width\">             <mat-option *ngFor=\"let item of width\" [value]=\"item\">{{item}}</mat-option>           </mat-select>         </mat-form-field>        <div *ngIf=\"schema.inputType=='table'\" [formGroup]=\"tableOptions\">         <mat-form-field>           <input matInput (change)=\"changed()\" formControlName=\"dataEndpoint\" placeholder=\"dataEndpoint\"/>         </mat-form-field>       </div>        <div *ngIf=\"schema.inputType=='select'\">         [options]         <button (click)=\"addOption()\">+</button>         <button (click)=\"insertOptions()\">insert</button>         <div *ngFor=\"let option of options.controls;index as i\">           {{i}}           <div [formGroup]=\"options.controls[i]\">             <mat-form-field>               <input matInput (change)=\"changed()\" formControlName=\"key\" placeholder=\"key\"/>             </mat-form-field>             <mat-form-field>               <input matInput (change)=\"changed()\" formControlName=\"value\" placeholder=\"value\"/>             </mat-form-field>           </div>         </div>       </div>       <br/>       <div>         <mat-slide-toggle (change)=\"changed()\"  [(ngModel)]=\"schema.validator.required.active\">\u0627\u062C\u0628\u0627\u0631\u06CC</mat-slide-toggle>         <mat-form-field>           <input matInput (change)=\"changed()\" [(ngModel)]=\"schema.validator.required.message\"  placeholder=\"\u067E\u06CC\u063A\u0627\u0645\"/>         </mat-form-field>         </div>       <div>         <mat-slide-toggle (change)=\"changed()\"  [(ngModel)]=\"schema.validator.email.active\">\u0627\u06CC\u0645\u06CC\u0644</mat-slide-toggle>         <mat-form-field>           <input matInput (change)=\"changed()\" [(ngModel)]=\"schema.validator.email.message\"  placeholder=\"\u067E\u06CC\u063A\u0627\u0645\"/>         </mat-form-field>       </div>       <div>         <mat-slide-toggle (change)=\"changed()\"  [(ngModel)]=\"schema.validator.minlength.active\">\u062D\u062F\u0627\u0642\u0644 \u062A\u0639\u062F\u0627\u062F \u06A9\u0627\u0631\u0627\u06A9\u062A\u0631</mat-slide-toggle>         <mat-form-field>           <input matInput (change)=\"changed()\" [(ngModel)]=\"schema.validator.minlength.message\"  placeholder=\"\u067E\u06CC\u063A\u0627\u0645\"/>         </mat-form-field>         <mat-form-field>           <input matInput (change)=\"changed()\" [(ngModel)]=\"schema.validator.minlength.value\"  placeholder=\"\u062A\u0639\u062F\u0627\u062F \u062D\u062F\u0627\u0642\u0644 \u06A9\u0627\u0631\u0627\u06A9\u062A\u0631\"/>         </mat-form-field>     </div>          </mat-expansion-panel>"
                },] },
    ];
    /** @nocollapse */
    FormControlComponent.ctorParameters = function () { return []; };
    FormControlComponent.propDecorators = {
        "schema": [{ type: core_1.Input },],
        "changes": [{ type: core_1.Output },],
        "delete": [{ type: core_1.Output },],
    };
    return FormControlComponent;
}());
exports.FormControlComponent = FormControlComponent;
//# sourceMappingURL=form-control.component.js.map