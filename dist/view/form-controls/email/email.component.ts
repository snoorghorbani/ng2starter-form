import { Component, OnInit, Input } from "@angular/core";
import { FormControlSchema, FieldConfig, Field } from "../../../models";
import { FormGroup } from "@angular/forms";

@Component({
	selector: "ngs-form-control-email",
	template: `<div  [formGroup]="form"> <mat-form-field fxFlexFill>     <input matInput [type]="schema.inputType" [placeholder]="schema.title" [formControlName]="schema.name"> </mat-form-field> </div>`,
	styles: [`:host { 	display: block; } .mat-form-field { 	width: 100%; }`]
})
export class EmailComponent implements Field {
	config: FieldConfig;
	group: FormGroup;

	@Input() form: FormGroup;
	@Input() schema: FormControlSchema;
	constructor() { }

	ngOnInit() { }
}
