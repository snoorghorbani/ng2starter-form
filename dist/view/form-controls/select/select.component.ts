import { Component, OnInit, Input } from "@angular/core";
import { FormControlSchema, FieldConfig, Field } from "../../../models";
import { FormGroup } from "@angular/forms";

@Component({
	selector: "ngs-form-control-select",
	template: `<div  [formGroup]="form"> <mat-form-field>     <mat-select [formControlName]="schema.name" [placeholder]="schema.title">       <mat-option *ngFor="let option of schema.options" [value]="option.value">{{option.key}}</mat-option>     </mat-select> </mat-form-field> </div>`,
	styles: [`:host { 	display: block; } .mat-form-field { 	width: 100%; }`]
})
export class SelectComponent implements Field {
	config: FieldConfig;
	group: FormGroup;

	@Input() form: FormGroup;
	@Input() schema: FormControlSchema;
	constructor() { }
}
