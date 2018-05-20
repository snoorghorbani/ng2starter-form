"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var store_1 = require("@ngrx/store");
var form_controls_1 = require("../form-controls");
var services_1 = require("../../services");
var list_1 = require("../../list");
var models_1 = require("../../models");
var FormViewComponent = /** @class */ (function () {
    function FormViewComponent(service, compiler, resolver, store) {
        var _this = this;
        this.service = service;
        this.compiler = compiler;
        this.resolver = resolver;
        this.store = store;
        this.accept = new core_1.EventEmitter();
        this.cancel = new core_1.EventEmitter();
        this.formGroupCreated = false;
        this.schema$ = new BehaviorSubject_1.BehaviorSubject(undefined);
        this.schema$.subscribe(function (schema) {
            if (!schema)
                return;
            _this.formGroup = _this.createFrom(schema.form);
            debugger;
            if (!schema.form.name)
                return;
            _this.formGroupCreated = true;
        });
    }
    Object.defineProperty(FormViewComponent.prototype, "id", {
        set: function (id) {
            var _this = this;
            if (!this.local) {
                this.store.dispatch(new list_1.GetFormSchemaAction(id));
            }
            this.service.selectFormById(id).subscribe(function (schema) { return _this.schema$.next(schema); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormViewComponent.prototype, "schema", {
        set: function (schema) {
            this.schema$.next(schema);
        },
        enumerable: true,
        configurable: true
    });
    FormViewComponent.prototype.generate = function (schema) {
        this.schema$.next(schema);
    };
    FormViewComponent.prototype.createFrom = function (data, parentPath) {
        var _this = this;
        if (parentPath === void 0) { parentPath = ""; }
        if (data.type == "control") {
            if (data.parentType == "array") {
                // parentPath = `${parentPath}.controls[${(data as FormControlSchema).name}]`;
            }
            else if (data.parentType == "group") {
                var formGroupPath = parentPath;
                parentPath = parentPath + ".controls." + data.name;
            }
            var validators = [];
            if (data.validator.required.active) {
                validators.push(forms_1.Validators.required);
            }
            if (data.validator.minlength.active) {
                validators.push(forms_1.Validators.minLength(data.validator.minlength.value));
            }
            if (data.validator.email.active) {
                validators.push(forms_1.Validators.email);
            }
            var ctr = new forms_1.FormControl(data.value, validators);
            ctr.schema = data;
            ctr.schema.path = parentPath;
            ctr.schema.formGroupPath = formGroupPath;
            return ctr;
        }
        else if (data.type == "group") {
            var formGroup = new forms_1.FormGroup({});
            if (data.parentType == undefined) {
                parentPath = data.name;
            }
            else if (data.parentType == "array") {
                parentPath = parentPath + ".controls[" + data.name + "]";
            }
            else if (data.parentType == "group") {
                parentPath = parentPath + ".controls." + data.name;
            }
            formGroup.schema = data;
            formGroup.schema.path = parentPath;
            data.fields.forEach(function (item) {
                item.parentType = "group";
                formGroup.addControl(item.name, _this.createFrom(item, parentPath));
            });
            return formGroup;
        }
        else {
            var formArray = new forms_1.FormArray([]);
            parentPath =
                parentPath == ""
                    ? data.name
                    : parentPath + ".controls." + data.name;
            formArray.schema = data;
            formArray.schema.path = parentPath;
            data.fields.forEach(function (item, idx) {
                item.parentType = "array";
                item.name = idx.toString();
                formArray.controls.push(_this.createFrom(item, parentPath));
            });
            return formArray;
        }
    };
    FormViewComponent.prototype.accepted = function () {
        this.accept.emit(this.formGroup);
    };
    FormViewComponent.prototype.canceled = function () {
        this.cancel.emit(this.formGroup);
    };
    FormViewComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "ngs-form-view",
                    template: "<form *ngIf=\"formGroupCreated\" class=\"dynamic-form\" [formGroup]=\"formGroup\" (ngSubmit)=\"accepted()\">   <mat-card>     <mat-card-content>       <ng-container *ngFor=\"let field of (schema$ | async)?.form.fields;\" dynamicField [config]=\"field\" [group]=\"formGroup\">       </ng-container>      </mat-card-content>     <mat-card-actions>       <button fxFlex type=\"submit\" *ngIf=\"(schema$ | async)?.events.accept.show\" mat-raised-button color=\"primary\">{{(schema$ | async)?.events.accept.text}}</button>       <button fxFlex type=\"button\" *ngIf=\"(schema$ | async)?.events.cancel.show\" (click)=\"cancel.emit()\" mat-raised-button color=\"primary\">{{(schema$ | async)?.events.cancel.text}</button>     </mat-card-actions>   </mat-card> </form>"
                },] },
    ];
    /** @nocollapse */
    FormViewComponent.ctorParameters = function () { return [
        { type: services_1.FormService, },
        { type: core_1.Compiler, },
        { type: core_1.ComponentFactoryResolver, },
        { type: store_1.Store, },
    ]; };
    FormViewComponent.propDecorators = {
        "accept": [{ type: core_1.Output },],
        "cancel": [{ type: core_1.Output },],
        "local": [{ type: core_1.Input },],
        "id": [{ type: core_1.Input },],
        "schema": [{ type: core_1.Input },],
    };
    return FormViewComponent;
}());
exports.FormViewComponent = FormViewComponent;
var components = {
    checkbox: form_controls_1.CheckboxComponent,
    text: form_controls_1.TextComponent,
    table: form_controls_1.TableComponent,
    color: form_controls_1.ColorComponent,
    email: form_controls_1.EmailComponent,
    select: form_controls_1.SelectComponent
};
var DynamicFieldDirective = /** @class */ (function () {
    function DynamicFieldDirective(resolver, container) {
        this.resolver = resolver;
        this.container = container;
    }
    DynamicFieldDirective.prototype.ngOnChanges = function () {
        if (this.component) {
            this.component.instance.config = this.config;
            this.component.instance.group = this.group;
        }
    };
    DynamicFieldDirective.prototype.ngOnInit = function () {
        if (!components[this.config.subtype]) {
            var supportedTypes = Object.keys(components).join(", ");
            throw new Error("Trying to use an unsupported type (" + this.config.subtype + ").\n\t\t  Supported types: " + supportedTypes);
        }
        var component = this.resolver.resolveComponentFactory(components[this.config.subtype]);
        this.component = this.container.createComponent(component);
        this.component.instance.config = this.config;
        this.component.instance.group = this.group;
    };
    DynamicFieldDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[dynamicField]"
                },] },
    ];
    /** @nocollapse */
    DynamicFieldDirective.ctorParameters = function () { return [
        { type: core_1.ComponentFactoryResolver, },
        { type: core_1.ViewContainerRef, },
    ]; };
    DynamicFieldDirective.propDecorators = {
        "config": [{ type: core_1.Input },],
        "group": [{ type: core_1.Input },],
    };
    return DynamicFieldDirective;
}());
exports.DynamicFieldDirective = DynamicFieldDirective;
//# sourceMappingURL=form-view.component.js.map