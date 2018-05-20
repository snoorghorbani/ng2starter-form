import { OnInit, ViewContainerRef, ComponentFactoryResolver, Compiler, EventEmitter, OnChanges } from "@angular/core";
import { FormGroup, AbstractControl } from "@angular/forms";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { ComponentRef } from "@angular/core/src/linker/component_factory";
import { Store } from "@ngrx/store";
import { FormControlSchema } from "../../models/form-field-schema.model";
import { FormSchemaModel } from "../../models/form-schema.model";
import { FormService } from "../../services";
import { MainContainerState } from "../../main-container";
import { Field, FieldConfig } from "../../models";
export declare class FormViewComponent {
    private service;
    private compiler;
    private resolver;
    private store;
    accept: EventEmitter<FormGroup>;
    cancel: EventEmitter<FormGroup>;
    local: any;
    _id: string;
    id: string;
    schema$: BehaviorSubject<FormSchemaModel>;
    schema: any;
    formGroup: FormGroup;
    formGroupCreated: boolean;
    constructor(service: FormService, compiler: Compiler, resolver: ComponentFactoryResolver, store: Store<MainContainerState>);
    generate(schema: FormSchemaModel): void;
    createFrom(data: FormControlSchema, parentPath?: string): AbstractControl;
    accepted(): void;
    canceled(): void;
}
export declare class DynamicFieldDirective implements Field, OnChanges, OnInit {
    private resolver;
    private container;
    config: FieldConfig;
    group: FormGroup;
    component: ComponentRef<Field>;
    constructor(resolver: ComponentFactoryResolver, container: ViewContainerRef);
    ngOnChanges(): void;
    ngOnInit(): void;
}
