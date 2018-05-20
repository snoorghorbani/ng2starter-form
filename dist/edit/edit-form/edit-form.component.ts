import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

import { FormSchemaModel, EditFormApiModel } from "../../models";
import { FormService } from "../../services";
import { AddFormComponent } from "../../add";

@Component({
	selector: "edit-form",
	template: `<div fxLayout="row" *ngIf="schema">   <div [fxFlex]="50" *ngIf="formGroup">     <form [formGroup]="formGroup">       <mat-card>         <mat-card-title>ایجاد فرم جدید</mat-card-title>         <mat-card-content>           <mat-form-field>             <input type="text" matInput (change)="changed()" placeholder="نام فرم" formControlName="name">           </mat-form-field>           <!-- <div class="button-row">                 <button mat-button color="primary" (click)="addFormGroup(schema.form)">Add form group</button>                 <button mat-button color="primary" (click)="addFormArray(schema.form)">Add form array</button>                 <button mat-button color="primary" (click)="addFormControl(schema.form)">Add form control</button>               </div> -->         </mat-card-content>       </mat-card>       <mat-card>         <mat-card-content>           <div [ngSwitch]="schema.form?.type">             <app-form-group *ngSwitchCase="'group'" [schema]="schema.form" noHeader="true" (changes)="changed()"></app-form-group>             <app-form-array *ngSwitchCase="'array'" [schema]="schema.form" (changes)="changed()"></app-form-array>           </div>         </mat-card-content>         <mat-card-actions>           <!-- <button mat-raised-button color="primary" (click)="$any(form).generate(schema)">ایجاد فرم</button> -->           <button mat-raised-button color="primary" (click)="emit()" type="submit">ثبت</button>         </mat-card-actions>          <div [formGroup]="$any(formGroup.controls.events).controls.accept">           <mat-slide-toggle (change)="changed()" formControlName="show">نمایش تایید</mat-slide-toggle>           <mat-form-field>             <input type="text" (change)="changed()" matInput placeholder="متن تایید" formControlName="text">           </mat-form-field>         </div>         <div [formGroup]="$any(formGroup.controls.events).controls.cancel">           <mat-slide-toggle (change)="changed()" formControlName="show">نمایش انصراف</mat-slide-toggle>           <mat-form-field>             <input type="text" (change)="changed()" matInput placeholder="متن انصراف" formControlName="text">           </mat-form-field>         </div>        </mat-card>     </form>   </div>   <div [fxFlex]="50">     <ngs-form-view [local]='true' [id]="schema._id"></ngs-form-view>   </div> </div>`
})
export class EditFormComponent extends AddFormComponent {
	emit() {
		if (!this.formGroup.valid) return;
		return this.submited.emit(this.formGroup.value);
	}
}
