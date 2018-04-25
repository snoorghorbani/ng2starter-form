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
	EventEmitter
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

import { FormControlSchema } from "../../models/form-field-schema.model";
import { FormSchemaModel } from "../../models/form-schema.model";
import { FormControlsModule } from "../form-controls";
import { FormService } from "../../services";
import { MainContainerState } from "../../main-container";
import { GetFormSchemaAction } from "../../list";

const contorlTemplate = (schema: FormControlSchema) => {
	switch (schema.inputType) {
		case "text":
			return `
				<ngs-form-control-text fxFlex="${schema.width *
				10}" [form]="${schema.formGroupPath}" [schema]="${schema.path}.schema"></ngs-form-control-text>
		`;
		case "number":
			return `
				<ngs-form-control-number fxFlex="${schema.width *
				10}" [form]="${schema.formGroupPath}" [schema]="${schema.path}.schema"></ngs-form-control-number>
		`;
		case "email":
			return `
				<ngs-form-control-email fxFlex="${schema.width *
				10}" [form]="${schema.formGroupPath}" [schema]="${schema.path}.schema"></ngs-form-control-email>
    	`;
		case "color":
			return `
				<ngs-form-control-color fxFlex="${schema.width *
				10}" [form]="${schema.formGroupPath}" [schema]="${schema.path}.schema"></ngs-form-control-color>
    	`;
		case "checkbox":
			return `
      			<ngs-form-control-checkbox fxFlex="${schema.width *
				10}" [form]="${schema.formGroupPath}" [schema]="${schema.path}.schema"></ngs-form-control-checkbox>
    	`;
		case "select":
			return `
      			<ngs-form-control-select fxFlex="${schema.width *
				10}" [form]="${schema.formGroupPath}" [schema]="${schema.path}.schema"></ngs-form-control-select>
    	`;
		case "table":
			return `
      			<ngs-form-control-table fxFlex="${schema.width *
				10}" [form]="${schema.formGroupPath}" [schema]="${schema.path}.schema"></ngs-form-control-table>
    	`;
	}
};
const FormOpenTemplate = ({ name, form }) => {
	return `
	<form [formGroup]="formGroup" (ngSubmit)="accepted()">
		<mat-card fxFlex='1 1 auto'>
			<mat-card-header>
				<mat-card-title>${name}</mat-card-title>
			</mat-card-header>
			<mat-card-content>
  	`;
};
const FormCloseTemplate = (formSchema: FormSchemaModel) => {
	return `
			</mat-card-content>
			<mat-card-actions>
				<button fxFlex type="submit" *ngIf="${formSchema.events.accept.show}" 
					mat-raised-button color="primary">${formSchema.events.accept.text}</button>
				<button fxFlex type="button" *ngIf="${formSchema.events.cancel.show}" 
					(click)="cancel.emit(this.formGroup)" mat-raised-button color="primary">${formSchema.events.cancel.text}</button>
			</mat-card-actions>
		</mat-card>
	</form>
	`;
};
const GroupOpenTemplate = ({ path }) => {
	return `
    	<div [formGroup]="${path}" fxLayout="row" fxLayoutWrap>
  	`;
};
const GroupCloseTemplate = () => {
	return `
		</div>
	`;
};
const ArrayOpenTemplate = ({ path }) => {
	return `
    	<div *ngFor="let item of ${path}.controls">
  	`;
};
const ArrayCloseTemplate = () => {
	return `
  		</div>
  	`;
};

@Component({
	selector: "ngs-form-view",
	templateUrl: "./form-view.component.html"
})
export class FormViewComponent {
	@Output() accept = new EventEmitter<FormGroup>();
	@Output() cancel = new EventEmitter<FormGroup>();
	@Input() local;
	_id: string;
	@Input()
	set id(id: string) {
		if (!this.local) {
			this.store.dispatch(new GetFormSchemaAction(id));
		}
		this.service.selectFormById(id).subscribe(schema => this.schema$.next(schema));
	}
	@Input() schema$: BehaviorSubject<FormSchemaModel>;
	formGroup: AbstractControl;
	formGroupCreated = false;
	template = "";
	formCompnent: ComponentRef<any>;
	@ViewChild("contentFormGen", { read: ViewContainerRef })
	private target: ViewContainerRef;

	constructor(
		private service: FormService,
		private compiler: Compiler,
		private resolver: ComponentFactoryResolver,
		private store: Store<MainContainerState>
	) {
		this.schema$ = new BehaviorSubject(undefined);

		this.schema$.subscribe(schema => {
			if (!schema) return;
			this.formGroup = this.createFrom(schema.form);
			if (!schema.form.name) return;
			this.template = this.createTemplate(this.formGroup, true, schema);
			this.formGroupCreated = true;

			setTimeout(() => {
				if (this.formCompnent) this.formCompnent.destroy();

				let _module = this.createModuleWithFormComponent(
					schema,
					this.template,
					this.formGroup as FormGroup,
					this.accept,
					this.cancel
				);

				// this.resolver.resolveComponentFactory
				this.compiler.compileModuleAndAllComponentsAsync(_module).then(factory => {
					this.formCompnent = this.target.createComponent(
						factory.componentFactories.find(item => item.selector == "dynamic"),
						0
					);
					this.target.insert(this.formCompnent.hostView);
				});
			}, 10);
		});
	}
	generate(schema: FormSchemaModel) {
		this.schema$.next(schema);
	}
	createTemplate(control: AbstractControl, root = false, formSchema?: FormSchemaModel) {
		if (control instanceof FormArray) {
			var res = ArrayOpenTemplate((control as any).schema);
			control.controls.map(item => {
				res += this.createTemplate(item);
			});
			res += ArrayCloseTemplate();
			return res;
		} else if (control instanceof FormGroup) {
			var res = "";
			if (root) {
				res += FormOpenTemplate(formSchema);
			}
			res += GroupOpenTemplate((control as any).schema);
			Object.keys(control.controls).forEach(key => {
				res += this.createTemplate(control.controls[key]);
			});
			res += GroupCloseTemplate();

			if (root) {
				res += FormCloseTemplate(formSchema);
			}
			return res;
		} else {
			return contorlTemplate((control as any).schema);
		}
	}
	createModuleWithFormComponent(
		schema: FormSchemaModel,
		template: string,
		formGroup: FormGroup,
		acceptFn: EventEmitter<FormGroup>,
		cancelFn: EventEmitter<FormGroup>
	): any {
		@Component({
			template: template,
			selector: "dynamic"
		})
		class CustomComponent {
			formGroup: FormGroup;
			accept = new EventEmitter();
			cancel = new EventEmitter();
			constructor() {
				this.accept.subscribe(() => acceptFn.emit(this.formGroup));
				this.cancel.subscribe(() => cancelFn.emit(this.formGroup));
				this.formGroup = formGroup;
				this["schema"] = schema;
			}
			accepted() {
				if (!this.formGroup.valid) return;
				this.accept.emit(this.formGroup);
			}
		}

		@NgModule({
			imports: [
				CommonModule,
				MatSidenavModule,
				MatToolbarModule,
				MatFormFieldModule,
				MatInputModule,
				MatCheckboxModule,
				MatRadioModule,
				MatSelectModule,
				MatSliderModule,
				FormsModule,
				ReactiveFormsModule,
				MatIconModule,
				MatButtonModule,
				MatCardModule,
				FlexLayoutModule,
				FormControlsModule
			],
			declarations: [CustomComponent],
			exports: [CustomComponent]
		})
		class _module { }

		return _module;
	}

	createFrom(data: FormControlSchema, parentPath = ""): AbstractControl {
		if (data.type == "control") {
			if (data.parentType == "array") {
				// parentPath = `${parentPath}.controls[${(data as FormControlSchema).name}]`;
			} else if (data.parentType == "group") {
				var formGroupPath = parentPath;
				parentPath = `${parentPath}.controls.${(data as FormControlSchema).name}`;
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
				parentPath = (data as FormControlSchema).name;
			} else if (data.parentType == "array") {
				parentPath = `${parentPath}.controls[${(data as FormControlSchema).name}]`;
			} else if (data.parentType == "group") {
				parentPath = `${parentPath}.controls.${(data as FormControlSchema).name}`;
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
				parentPath == ""
					? (data as FormControlSchema).name
					: `${parentPath}.controls.${(data as FormControlSchema).name}`;
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
}
