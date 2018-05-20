import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { FormGroup, FormControl } from "@angular/forms";
import { Store } from "@ngrx/store";

import { FormSchemaModel, EditFormApiModel } from "../../models";

import { MainContainerState, FormReducers } from "../../main-container";

@Component({
	selector: "form-list",
	template: `<div fxLayout="row" fxLayoutWrap fxLayoutAlign="center center" >     <mat-card class="cards-item" *ngFor="let item of (data$ | async)" fxFlex="51">       <h3>         <a [routerLink]="['edit' ,  item._id]">           <mat-icon aria-label="edit form">edit</mat-icon>         </a>         {{item.name}}       </h3>   </mat-card> </div>`
})
export class FormListComponent {
	@Input("data") data$: Observable<FormSchemaModel[]>;
}
