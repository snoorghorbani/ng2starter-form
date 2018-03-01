import { ComponentFactoryResolver, Compiler } from "@angular/core";
import { AbstractControl } from "@angular/forms";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { ComponentRef } from "@angular/core/src/linker/component_factory";
import { Store } from "@ngrx/store";
import { FormControlSchema } from "../../models/form-field-schema.model";
import { FormSchemaModel } from "../../models/form-schema.model";
import { FormService } from "../../services";
import { MainContainerState } from "../../main-container";
export declare class FormViewComponent {
    private service;
    private compiler;
    private resolver;
    private store;
    local: any;
    _id: string;
    id: string;
    schema$: BehaviorSubject<FormSchemaModel>;
    formGroup: AbstractControl;
    formGroupCreated: boolean;
    template: string;
    formCompnent: ComponentRef<any>;
    private target;
    constructor(service: FormService, compiler: Compiler, resolver: ComponentFactoryResolver, store: Store<MainContainerState>);
    generate(schema: FormSchemaModel): void;
    createTemplate(control: AbstractControl): string;
    createModuleWithFormComponent(schema: FormSchemaModel, template: string, formGroupName: string, formGroup: AbstractControl): any;
    createFrom(data: FormControlSchema, parentPath?: string): AbstractControl;
}
