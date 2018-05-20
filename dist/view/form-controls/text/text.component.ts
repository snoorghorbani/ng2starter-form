import { Component, OnInit, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

import { FormControlSchema, FieldConfig, Field } from "../../../models";

@Component({
	selector: "ngs-form-control-text",
	template: `<mat-form-field fxFlexFill [formGroup]="group">    <input matInput [id]="config.name" [type]="config.inputType" [placeholder]="config.title" [formControlName]="config.name">    <mat-error *ngIf="group.get(config.name).errors?.required">     {{config.validator.required.message}}   </mat-error>   <mat-error *ngIf="group.get(config.name).errors?.minlength">     {{config.validator.minlength.message}}   </mat-error>   <!-- <mat-error *ngIf="group.get(config.name).email?.minlength">     {{config.validator.email.message}}   </mat-error> -->    <!-- <div *ngIf="form.get(config.name).invalid && (form.get(config.name).dirty || form.get(config.name).touched)" class="alert alert-danger">   </div> -->  </mat-form-field>`,
	styles: [`:host { 	display: block; } .mat-form-field { 	width: 100%; }`]
})
export class TextComponent implements Field {
	config: FieldConfig;
	group: FormGroup;

	constructor() {
		debugger
		console.log(this)
	}
}
