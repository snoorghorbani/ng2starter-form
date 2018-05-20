import { Component, OnInit, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

import { FormControlSchema } from "../../../models";

@Component({
	selector: "ngs-form-control-number",
	template: `<div  [formGroup]="form">     <mat-form-field fxFlexFill>         <input matInput [type]="schema.inputType" [placeholder]="schema.title" [formControlName]="schema.name">     </mat-form-field> </div>`,
	styles: [`:host { 	display: block; } .mat-form-field { 	width: 100%; }`]
})
export class NumberComponent implements OnInit {
	@Input() form: FormGroup;
	@Input() schema: FormControlSchema;
	constructor() {}

	ngOnInit() {}
}
