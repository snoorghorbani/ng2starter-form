import { Component, OnInit, Input } from "@angular/core";
import { Field, FieldConfig } from "../../../models";
import { FormGroup } from "@angular/forms";

@Component({
	selector: "ngs-form-control-checkbox",
	template: `<div [formGroup]="group">     <mat-checkbox [formControlName]="config.name">         {{config.title}}     </mat-checkbox> </div>`,
	styles: [`:host { 	display: block; } .mat-form-field { 	width: 100%; }`]
})
export class CheckboxComponent implements Field {
	config: FieldConfig;
	group: FormGroup;

	constructor() {}
}
