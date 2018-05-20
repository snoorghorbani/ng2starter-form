import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormControlSchema } from "../../models";

@Component({
	selector: "app-form-array",
	template: `<mat-card>   <mat-card-content>     <mat-form-field>         <input matInput [(ngModel)]="schema.name" placeholder="Name">     </mat-form-field>            <div class="button-row">       <button mat-button color="primary" (click)="addFormGroup(schema)">addFormGroup</button>       <button mat-button color="primary" (click)="addFormArray(schema)">addFormArray</button>       <!-- <button mat-button color="primary" (click)="addFormControl(schema)">addFormControl</button> -->     </div>          <div *ngFor="let field of schema.fields">       <div [ngSwitch]="field.type">         <app-form-group *ngSwitchCase="'group'" [schema]="field" (changes)="changed()"></app-form-group>         <app-form-array *ngSwitchCase="'array'" [schema]="field" (changes)="changed()"></app-form-array>         <!-- <app-form-control *ngSwitchCase="'control'" [schema]="field" (change)="changed($event)"></app-form-control> -->       </div>     </div>        </mat-card-content> </mat-card>`
})
export class FormArrayComponent {
	@Input() schema: FormControlSchema;
	@Output() changes = new EventEmitter();
	constructor() {}

	changed() {
		this.changes.emit();
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
