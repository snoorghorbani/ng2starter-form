import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormControlSchema } from "../../models/form-field-schema.model";
import { FormSchemaModel } from "../../models/form-schema.model";
import { AddFormApiModel } from "../../models";

@Component({
	selector: "ngs-form-add",
	template: `<div fxLayout="row" *ngIf="schema">   <div [fxFlex]="50" *ngIf="formGroup">     <form [formGroup]="formGroup">       <mat-card>         <mat-card-title>ایجاد فرم جدید</mat-card-title>         <mat-card-content>           <mat-form-field>             <input type="text" matInput (change)="changed()" placeholder="نام فرم" formControlName="name">           </mat-form-field>           <!-- <div class="button-row">                 <button mat-button color="primary" (click)="addFormGroup(schema.form)">Add form group</button>                 <button mat-button color="primary" (click)="addFormArray(schema.form)">Add form array</button>                 <button mat-button color="primary" (click)="addFormControl(schema.form)">Add form control</button>               </div> -->         </mat-card-content>       </mat-card>       <mat-card>         <mat-card-content>           <div [ngSwitch]="schema.form?.type">             <app-form-group *ngSwitchCase="'group'" [schema]="schema.form" noHeader="true" (changes)="changed()"></app-form-group>             <app-form-array *ngSwitchCase="'array'" [schema]="schema.form" (changes)="changed()"></app-form-array>           </div>         </mat-card-content>         <mat-card-actions>           <!-- <button mat-raised-button color="primary" (click)="form.generate(schema)">ایجاد فرم</button> -->           <button mat-raised-button color="primary" (click)="emit()" type="submit">ثبت</button>         </mat-card-actions>          <div [formGroup]="$any(formGroup.controls.events).controls.accept">           <mat-slide-toggle (change)="changed()" formControlName="show">نمایش تایید</mat-slide-toggle>           <mat-form-field>             <input type="text" (change)="changed()" matInput placeholder="متن تایید" formControlName="text">           </mat-form-field>         </div>         <div [formGroup]="$any(formGroup.controls.events).controls.cancel">           <mat-slide-toggle (change)="changed()" formControlName="show">نمایش انصراف</mat-slide-toggle>           <mat-form-field>             <input type="text" (change)="changed()" matInput placeholder="متن انصراف" formControlName="text">           </mat-form-field>         </div>        </mat-card>     </form>   </div>   <div [fxFlex]="50">     <ngs-form-view [local]='true' [id]="schema._id"></ngs-form-view>   </div> </div>`
})
export class AddFormComponent {
	@Input() schema: FormSchemaModel;
	@Input() formGroup = AddFormApiModel.Request.formGroup;
	@Output() submited = new EventEmitter();
	@Output() changes = new EventEmitter();

	emit() {
		this.formGroup.patchValue({ form: this.schema.form });
		this.submited.emit(this.formGroup.value);
	}
	changed() {
		this.formGroup.patchValue({ form: this.schema.form });
		this.changes.emit(this.formGroup.value);
	}
	changeOrder($event) {
		debugger;
	}

	addFormGroup(root: FormControlSchema) {
		const group = new FormControlSchema("group");
		group.fields = [];
		root.fields.push(group);
		return group;
	}
	addFormArray(root: FormControlSchema) {
		const array = new FormControlSchema("array");
		array.fields = [];
		root.fields.push(array);
		return array;
	}
	addFormControl(root: FormControlSchema) {
		const control = new FormControlSchema("control");
		root.fields.push(control);
		return control;
	}
}
