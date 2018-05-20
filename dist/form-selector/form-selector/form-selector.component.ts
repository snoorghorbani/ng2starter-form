import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";

import { FormSchemaModel } from "../../models";
import { MainContainerState } from "../../main-container";

@Component({
	selector: "ngs-form-selector",
	template: `<mat-form-field>   <mat-select (change)="select.emit($event.value)" placeholder="فرم">     <mat-option *ngFor="let item of forms$ | async" [value]="item._id">{{item.name}}</mat-option>   </mat-select> </mat-form-field>`
})
export class NgsFormSelectorComponent {
	forms$: Observable<FormSchemaModel[]>;
	@Output() select = new EventEmitter();
	constructor(private store: Store<MainContainerState>) {
		this.forms$ = this.store.select(state => state.form.list.data);
	}
}
