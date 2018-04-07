"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var models_1 = require("../../../models");
var http_1 = require("@angular/common/http");
var material_1 = require("@angular/material");
var collections_1 = require("@angular/cdk/collections");
var TableComponent = /** @class */ (function () {
    function TableComponent(http) {
        this.http = http;
        this.selection = new collections_1.SelectionModel(true, []);
        this.ready = false;
    }
    TableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get(this.schema.options.dataEndpoint).subscribe(function (data) {
            debugger;
            _this.ready = true;
            _this.displayedColumns = data.displayedColumns;
            _this.filedDisplayedColumns = data.filedDisplayedColumns;
            _this.dataSource = new material_1.MatTableDataSource(data.dataSource);
        });
    };
    /** Whether the number of selected elements matches the total number of rows. */
    /** Whether the number of selected elements matches the total number of rows. */
    TableComponent.prototype.isAllSelected = /** Whether the number of selected elements matches the total number of rows. */
    function () {
        var numSelected = this.selection.selected.length;
        this.form.patchValue((_a = {},
            _a[this.schema.name] = this.selection.selected,
            _a));
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
        var _a;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    TableComponent.prototype.masterToggle = /** Selects all rows if they are not all selected; otherwise clear selection. */
    function () {
        var _this = this;
        this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    TableComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "ngs-form-control-table",
                    template: "<div class=\"example-container mat-elevation-z8\" *ngIf=\"ready\">     <mat-table #table [dataSource]=\"dataSource\">          <ng-container matColumnDef=\"select\">         <mat-header-cell *matHeaderCellDef>           <mat-checkbox (change)=\"$event ? masterToggle() : null\"             [checked]=\"selection.hasValue() && isAllSelected()\"             [indeterminate]=\"selection.hasValue() && !isAllSelected()\">           </mat-checkbox>         </mat-header-cell>         <mat-cell *matCellDef=\"let row\">           <mat-checkbox (click)=\"$event.stopPropagation()\"             (change)=\"$event ? selection.toggle(row) : null\"             [checked]=\"selection.isSelected(row)\">           </mat-checkbox>         </mat-cell>       </ng-container>        <div *ngFor=\"let col of filedDisplayedColumns\">         <ng-container  [matColumnDef]=\"col\">           <mat-header-cell *matHeaderCellDef> {{col}} </mat-header-cell>           <mat-cell *matCellDef=\"let element\"> {{element[col]}} </mat-cell>         </ng-container>       </div>                <ng-container matColumnDef=\"actions\">         <mat-header-cell *matHeaderCellDef></mat-header-cell>         <mat-cell class='left-align' *matCellDef=\"let row\">           <button mat-icon-button (click)=\"selectPlicy(row)\">             <mat-icon aria-label=\"\u0627\u0646\u062A\u062E\u0627\u0628\">arrow_back</mat-icon>           </button>         </mat-cell>       </ng-container>            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>       <mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"selection.toggle(row)\"></mat-row>      </mat-table>   </div>   <!-- <mat-form-field fxFlexFill [formGroup]=\"form\">      <input matInput [id]=\"schema.name\" [type]=\"schema.inputType\" [placeholder]=\"schema.title\" [formControlName]=\"schema.name\">      <mat-error *ngIf=\"form.get(schema.name).errors?.required\">     {{schema.validator.required.message}}   </mat-error>   <mat-error *ngIf=\"form.get(schema.name).errors?.minlength\">     {{schema.validator.minlength.message}}   </mat-error>   <mat-error *ngIf=\"form.get(schema.name).email?.minlength\">     {{schema.validator.email.message}}   </mat-error> </mat-form-field> -->      <!-- <div *ngIf=\"form.get(schema.name).invalid && (form.get(schema.name).dirty || form.get(schema.name).touched)\" class=\"alert alert-danger\">   </div> -->",
                    styles: [":host { \tdisplay: block; } .mat-form-field { \twidth: 100%; }"]
                },] },
    ];
    /** @nocollapse */
    TableComponent.ctorParameters = function () { return [
        { type: http_1.HttpClient, },
    ]; };
    TableComponent.propDecorators = {
        "form": [{ type: core_1.Input },],
        "schema": [{ type: core_1.Input },],
    };
    return TableComponent;
}());
exports.TableComponent = TableComponent;
//# sourceMappingURL=table.component.js.map