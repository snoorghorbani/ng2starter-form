import { Component, OnInit, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

import { FieldConfig, Field } from "../../../models";
import { HttpClient } from "@angular/common/http";
import { MatTableDataSource } from "@angular/material";
import { SelectionModel } from "@angular/cdk/collections";

@Component({
	selector: "ngs-form-control-table",
	template: `<div class="example-container mat-elevation-z8" *ngIf="ready">     <mat-table #table [dataSource]="dataSource">          <ng-container matColumnDef="select">         <mat-header-cell *matHeaderCellDef>           <mat-checkbox (change)="$event ? masterToggle() : null"             [checked]="selection.hasValue() && isAllSelected()"             [indeterminate]="selection.hasValue() && !isAllSelected()">           </mat-checkbox>         </mat-header-cell>         <mat-cell *matCellDef="let row">           <mat-checkbox (click)="$event.stopPropagation()"             (change)="$event ? selection.toggle(row) : null"             [checked]="selection.isSelected(row)">           </mat-checkbox>         </mat-cell>       </ng-container>        <div *ngFor="let col of filedDisplayedColumns">         <ng-container  [matColumnDef]="col">           <mat-header-cell *matHeaderCellDef> {{col}} </mat-header-cell>           <mat-cell *matCellDef="let element"> {{element[col]}} </mat-cell>         </ng-container>       </div>                <ng-container matColumnDef="actions">         <mat-header-cell *matHeaderCellDef></mat-header-cell>         <mat-cell class='left-align' *matCellDef="let row">           <button mat-icon-button (click)="selectPlicy(row)">             <mat-icon aria-label="انتخاب">arrow_back</mat-icon>           </button>         </mat-cell>       </ng-container>            <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>       <mat-row *matRowDef="let row; columns: displayedColumns;" (click)="selection.toggle(row)"></mat-row>      </mat-table>   </div>   <!-- <mat-form-field fxFlexFill [formGroup]="form">      <input matInput [id]="schema.name" [type]="schema.inputType" [placeholder]="schema.title" [formControlName]="schema.name">      <mat-error *ngIf="form.get(schema.name).errors?.required">     {{schema.validator.required.message}}   </mat-error>   <mat-error *ngIf="form.get(schema.name).errors?.minlength">     {{schema.validator.minlength.message}}   </mat-error>   <mat-error *ngIf="form.get(schema.name).email?.minlength">     {{schema.validator.email.message}}   </mat-error> </mat-form-field> -->      <!-- <div *ngIf="form.get(schema.name).invalid && (form.get(schema.name).dirty || form.get(schema.name).touched)" class="alert alert-danger">   </div> -->`,
	styles: [`:host { 	display: block; } .mat-form-field { 	width: 100%; }`]
})
export class TableComponent implements OnInit, Field {
	config: FieldConfig;
	group: FormGroup;
	@Input() form: FormGroup;
	@Input() schema: FieldConfig;
	ready: boolean;
	displayedColumns: string[];
	filedDisplayedColumns: string[];
	dataSource: MatTableDataSource<any>;

	selection = new SelectionModel<any>(true, []);
	constructor(private http: HttpClient) {
		this.ready = false;
	}
	ngOnInit() {
		this.http.get(this.schema.options.dataEndpoint).subscribe((data: any) => {
			debugger;
			this.ready = true;
			this.displayedColumns = data.displayedColumns;
			this.filedDisplayedColumns = data.filedDisplayedColumns;
			this.dataSource = new MatTableDataSource<any>(data.dataSource);
		});
	}

	/** Whether the number of selected elements matches the total number of rows. */
	isAllSelected() {
		const numSelected = this.selection.selected.length;
		this.form.patchValue({
			[this.schema.name]: this.selection.selected
		});
		const numRows = this.dataSource.data.length;
		return numSelected === numRows;
	}

	/** Selects all rows if they are not all selected; otherwise clear selection. */
	masterToggle() {
		this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach(row => this.selection.select(row));
	}
}
