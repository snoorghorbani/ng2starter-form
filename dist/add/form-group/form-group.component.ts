import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FieldConfig } from "../../models";
import { Form } from "@angular/forms";

@Component({
	selector: "app-form-group",
	template: `<mat-card>   <mat-card-content>      <mat-form-field *ngIf="!noHeader">       <input matInput [(ngModel)]="schema.name" placeholder="Name">     </mat-form-field>      <mat-form-field *ngIf="!noHeader">       <input matInput [(ngModel)]="schema.title" placeholder="عنوان">     </mat-form-field>      <div class="button-row">       <button mat-button color="primary" (click)="addFormGroup(schema)"> addFormGroup </button>       <button mat-button color="primary" (click)="addFormArray(schema)"> addFormArray </button>       <button mat-button color="primary" (click)="addFormControl(schema)">addFormControl</button>     </div>      <div *ngFor="let field of schema.fields;let i = index">       <div [ngSwitch]="field.type">         <app-form-group *ngSwitchCase="'group'" [schema]="field" (change)="changed()"></app-form-group>         <app-form-array *ngSwitchCase="'array'" [schema]="field" (change)="changed()"></app-form-array>         <app-form-control *ngSwitchCase="'control'" [schema]="field" (changes)="changed()" (delete)="deleteFormGroup(i)"></app-form-control>       </div>     </div>    </mat-card-content> </mat-card>`
})
export class FormGroupComponent {
	@Input() schema: FieldConfig;
	@Input() noHeader: boolean = false;
	@Output() changes = new EventEmitter();
	@Output() delete = new EventEmitter();
	constructor() {
		debugger;
	}

	changed() {
		this.changes.emit();
	}

	addFormGroup(root: FieldConfig) {
		const group = new FieldConfig("group");
		group.fields = [];
		root.fields.push(group);
		this.schema.id = this.schema.id + 1;
		return group;
	}
	addFormArray(root: FieldConfig) {
		const array = new FieldConfig("array");
		array.fields = [];
		root.fields.push(array);
		return array;
	}
	addFormControl(root: FieldConfig) {
		const control = new FieldConfig("control");
		root.fields.push(control);
		return control;
	}
	deleteFormGroup(idx: number) {
		this.schema.fields.splice(idx, 1);
	}
}
