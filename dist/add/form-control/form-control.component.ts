import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl, FormArray } from "@angular/forms";
import { FieldConfig } from "../../models";

@Component({
	selector: "app-form-control",
	template: `  <mat-expansion-panel>     <mat-expansion-panel-header>       <mat-panel-title>         <button mat-icon-button (click)="delete.emit()">             <mat-icon aria-label=" icon-button">delete_forever</mat-icon>           </button>         {{schema.name}}       </mat-panel-title>     </mat-expansion-panel-header>       <mat-form-field>         <input matInput [(ngModel)]="schema.name" (change)="changed()" placeholder="Name">       </mat-form-field>              <mat-form-field>         <input matInput [(ngModel)]="schema.title" (change)="changed()" placeholder="Placeholder"/>       </mat-form-field>              <mat-form-field>         <mat-select [(ngModel)]="schema.inputType" (change)="changed()" placeholder="Input Type">           <mat-option value="table">table</mat-option>           <mat-option value="select">select</mat-option>           <mat-option value="text">text</mat-option>           <mat-option value="number">number</mat-option>           <mat-option value="email">email</mat-option>           <mat-option value="color">color</mat-option>           <mat-option value="radio">radio</mat-option>           <mat-option value="checkbox">checkbox</mat-option>         </mat-select>       </mat-form-field>        <mat-form-field>           <input matInput [(ngModel)]="schema.value" (change)="changed()" placeholder="Value"/>       </mat-form-field>                <mat-form-field>           <mat-select [(ngModel)]="schema.width" (change)="changed()" placeholder="width">             <mat-option *ngFor="let item of width" [value]="item">{{item}}</mat-option>           </mat-select>         </mat-form-field>        <div *ngIf="schema.inputType=='table'" [formGroup]="tableOptions">         <mat-form-field>           <input matInput (change)="changed()" formControlName="dataEndpoint" placeholder="dataEndpoint"/>         </mat-form-field>       </div>        <div *ngIf="schema.inputType=='select'">         [options]         <button (click)="addOption()">+</button>         <button (click)="insertOptions()">insert</button>         <div *ngFor="let option of options.controls;index as i">           {{i}}           <div [formGroup]="options.controls[i]">             <mat-form-field>               <input matInput (change)="changed()" formControlName="key" placeholder="key"/>             </mat-form-field>             <mat-form-field>               <input matInput (change)="changed()" formControlName="value" placeholder="value"/>             </mat-form-field>           </div>         </div>       </div>       <br/>       <div>         <mat-slide-toggle (change)="changed()"  [(ngModel)]="schema.validator.required.active">اجباری</mat-slide-toggle>         <mat-form-field>           <input matInput (change)="changed()" [(ngModel)]="schema.validator.required.message"  placeholder="پیغام"/>         </mat-form-field>         </div>       <div>         <mat-slide-toggle (change)="changed()"  [(ngModel)]="schema.validator.email.active">ایمیل</mat-slide-toggle>         <mat-form-field>           <input matInput (change)="changed()" [(ngModel)]="schema.validator.email.message"  placeholder="پیغام"/>         </mat-form-field>       </div>       <div>         <mat-slide-toggle (change)="changed()"  [(ngModel)]="schema.validator.minlength.active">حداقل تعداد کاراکتر</mat-slide-toggle>         <mat-form-field>           <input matInput (change)="changed()" [(ngModel)]="schema.validator.minlength.message"  placeholder="پیغام"/>         </mat-form-field>         <mat-form-field>           <input matInput (change)="changed()" [(ngModel)]="schema.validator.minlength.value"  placeholder="تعداد حداقل کاراکتر"/>         </mat-form-field>     </div>          </mat-expansion-panel>`
})
export class FormControlComponent {
	@Input() schema: FieldConfig;
	@Output() changes = new EventEmitter();
	@Output() delete = new EventEmitter();

	width = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
	options = new FormArray([
		new FormGroup({
			key: new FormControl(),
			value: new FormControl()
		})
	]);
	tableOptions = new FormGroup({
		dataEndpoint: new FormControl("http://localhost:3000/api/fake/packgeCompareSimpleList")
	});
	constructor() {
		debugger;
	}

	changed() {
		if ([ this.schema.name, this.schema.title, this.schema.inputType ].some(item => !item)) return true;
		if (this.schema.inputType == "table") {
			this.schema.options = this.tableOptions.value;
		} else if (this.schema.inputType == "select") {
			this.schema.options = this.options.value;
		}
		this.changes.emit();
	}

	addOption() {
		this.options.push(
			new FormGroup({
				key: new FormControl(),
				value: new FormControl()
			})
		);
	}
	removeOption(i) {
		this.options.controls.splice(i, 1);
	}
	insertOptions() {
		this.schema.options = this.options.value;
	}
}
