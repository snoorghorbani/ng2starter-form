import {
	Component,
	OnInit,
	ViewChild,
	ViewContainerRef,
	ComponentFactoryResolver,
	Compiler,
	ReflectiveInjector,
	NgModule,
	Input,
	Output,
	EventEmitter,
	OnChanges,
	Directive,
	Type,
	OnDestroy
} from "@angular/core";
import { Observable } from "rxjs/Observable";
import {
	FormControl,
	FormGroup,
	FormArray,
	AbstractControl,
	FormsModule,
	ReactiveFormsModule,
	Validators
} from "@angular/forms";
import {
	MatSidenavModule,
	MatToolbarModule,
	MatFormFieldModule,
	MatCardModule,
	MatButtonModule,
	MatIconModule,
	MatInputModule,
	MatCheckboxModule,
	MatRadioModule,
	MatSelectModule,
	MatSliderModule
} from "@angular/material";
import { CommonModule } from "@angular/common";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { ComponentRef } from "@angular/core/src/linker/component_factory";
import { FlexLayoutModule } from "@angular/flex-layout";
import { Store } from "@ngrx/store";

import {
	SelectComponent,
	EmailComponent,
	ColorComponent,
	CheckboxComponent,
	TextComponent,
	TableComponent
} from "../form-controls";
import { FormService } from "../../services";
import { MainContainerState } from "../../main-container";
import { GetFormSchemaAction } from "../../list";
import { Field, FieldConfig, FormSchemaModel } from "../../models";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
	selector: "ngs-form-view",
	template: `<form *ngIf="formGroupCreated" class="dynamic-form" [formGroup]="formGroup" (ngSubmit)="accepted()">   <mat-card>     <mat-card-content fxLayout="row wrap" fxLayoutGap="25px">       <div  *ngFor="let field of (schema$ | async)?.form.fields;" [fxFlex]="field.width * 10">         <ng-container dynamicField  [config]="field" [group]="formGroup"></ng-container>       </div>     </mat-card-content>     <mat-card-actions>       <button fxFlex type="submit" *ngIf="(schema$ | async)?.events.accept.show" mat-raised-button color="primary">{{(schema$ | async)?.events.accept.text}}</button>       <button fxFlex type="button" *ngIf="(schema$ | async)?.events.cancel.show" (click)="cancel.emit()" mat-raised-button color="primary">{{(schema$ | async)?.events.cancel.text}</button>     </mat-card-actions>   </mat-card> </form>`
})
export class FormViewComponent implements OnDestroy {
	unsubscribe = new Subject<void>();
	@Output() accept = new EventEmitter<FormGroup>();
	@Output() cancel = new EventEmitter<FormGroup>();
	@Input() local;
	@Input()
	set id(id: string) {
		if (!this.local) this.store.dispatch(new GetFormSchemaAction(id));
		this.service
			.selectFormById(id)
			.pipe(takeUntil(this.unsubscribe))
			.subscribe(schema => this.schema$.next(schema));
	}
	@Input()
	set schema(schema: FormSchemaModel) {
		this.schema$.next(schema);
	}
	_id: string;
	formGroup: FormGroup;
	formGroupCreated = false;
	schema$: BehaviorSubject<FormSchemaModel>;

	constructor(
		private service: FormService,
		private compiler: Compiler,
		private resolver: ComponentFactoryResolver,
		private store: Store<MainContainerState>
	) {
		this.schema$ = new BehaviorSubject(undefined);
		this.schema$.pipe(takeUntil(this.unsubscribe)).subscribe(schema => {
			if (!schema) return;
			this.formGroup = this.createFrom(schema.form) as FormGroup;
			if (!schema.form.name) return;
			this.formGroupCreated = true;
		});
	}
	ngOnDestroy() {
		this.unsubscribe.next();
		this.unsubscribe.complete();
	}
	generate(schema: FormSchemaModel) {
		this.schema$.next(schema);
	}

	createFrom(data: FieldConfig, parentPath = ""): AbstractControl {
		if (data.type == "control") {
			if (data.parentType == "array") {
				// parentPath = `${parentPath}.controls[${(data as FieldConfig).name}]`;
			} else if (data.parentType == "group") {
				var formGroupPath = parentPath;
				parentPath = `${parentPath}.controls.${(data as FieldConfig).name}`;
			}
			var validators = [];
			if (data.validator.required.active) {
				validators.push(Validators.required);
			}
			if (data.validator.minlength.active) {
				validators.push(Validators.minLength(data.validator.minlength.value));
			}
			if (data.validator.email.active) {
				validators.push(Validators.email);
			}
			var ctr = new FormControl(data.value, validators);
			(ctr as any).schema = data;
			(ctr as any).schema.path = parentPath;
			(ctr as any).schema.formGroupPath = formGroupPath;
			return ctr;
		} else if (data.type == "group") {
			var formGroup = new FormGroup({});
			if (data.parentType == undefined) {
				parentPath = (data as FieldConfig).name;
			} else if (data.parentType == "array") {
				parentPath = `${parentPath}.controls[${(data as FieldConfig).name}]`;
			} else if (data.parentType == "group") {
				parentPath = `${parentPath}.controls.${(data as FieldConfig).name}`;
			}

			(formGroup as any).schema = data;
			(formGroup as any).schema.path = parentPath;
			data.fields.forEach(item => {
				item.parentType = "group";
				formGroup.addControl(item.name, this.createFrom(item, parentPath));
			});
			return formGroup;
		} else {
			var formArray: FormArray = new FormArray([]);
			parentPath =
				parentPath == "" ? (data as FieldConfig).name : `${parentPath}.controls.${(data as FieldConfig).name}`;
			(formArray as any).schema = data;
			(formArray as any).schema.path = parentPath;
			data.fields.forEach((item, idx) => {
				item.parentType = "array";
				item.name = idx.toString();
				formArray.controls.push(this.createFrom(item, parentPath));
			});
			return formArray;
		}
	}

	accepted() {
		this.accept.emit(this.formGroup);
	}
	canceled() {
		this.cancel.emit(this.formGroup);
	}
}

const components: { [type: string]: Type<Field> } = {
	checkbox: CheckboxComponent,
	text: TextComponent,
	table: TableComponent,
	color: ColorComponent,
	email: EmailComponent,
	select: SelectComponent
};

@Directive({
	selector: "[dynamicField]"
})
export class DynamicFieldDirective implements Field, OnChanges, OnInit {
	@Input() config: FieldConfig;

	@Input() group: FormGroup;

	component: ComponentRef<Field>;

	constructor(private resolver: ComponentFactoryResolver, private container: ViewContainerRef) {}

	ngOnChanges() {
		if (this.component) {
			this.component.instance.config = this.config;
			this.component.instance.group = this.group;
		}
	}

	ngOnInit() {
		if (!components[this.config.subtype]) {
			const supportedTypes = Object.keys(components).join(", ");
			throw new Error(
				`Trying to use an unsupported type (${this.config.subtype}).
		  Supported types: ${supportedTypes}`
			);
		}
		const component = this.resolver.resolveComponentFactory<Field>(components[this.config.subtype]);
		this.component = this.container.createComponent(component);
		this.component.instance.config = this.config;
		this.component.instance.group = this.group;
	}
}
