"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var material_1 = require("@angular/material");
var common_1 = require("@angular/common");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var flex_layout_1 = require("@angular/flex-layout");
var store_1 = require("@ngrx/store");
var form_controls_1 = require("../form-controls");
var services_1 = require("../../services");
var list_1 = require("../../list");
var contorlTemplate = function (schema) {
    switch (schema.inputType) {
        case "text":
            return "\n\t\t\t\t<ngs-form-control-text fxFlex=\"" + schema.width *
                10 + "\" [form]=\"" + schema.formGroupPath + "\" [schema]=\"" + schema.path + ".schema\"></ngs-form-control-text>\n\t\t";
        case "number":
            return "\n\t\t\t\t<ngs-form-control-number fxFlex=\"" + schema.width *
                10 + "\" [form]=\"" + schema.formGroupPath + "\" [schema]=\"" + schema.path + ".schema\"></ngs-form-control-number>\n\t\t";
        case "email":
            return "\n\t\t\t\t<ngs-form-control-email fxFlex=\"" + schema.width *
                10 + "\" [form]=\"" + schema.formGroupPath + "\" [schema]=\"" + schema.path + ".schema\"></ngs-form-control-email>\n    \t";
        case "color":
            return "\n\t\t\t\t<ngs-form-control-color fxFlex=\"" + schema.width *
                10 + "\" [form]=\"" + schema.formGroupPath + "\" [schema]=\"" + schema.path + ".schema\"></ngs-form-control-color>\n    \t";
        case "checkbox":
            return "\n      \t\t\t<ngs-form-control-checkbox fxFlex=\"" + schema.width *
                10 + "\" [form]=\"" + schema.formGroupPath + "\" [schema]=\"" + schema.path + ".schema\"></ngs-form-control-checkbox>\n    \t";
        case "select":
            return "\n      \t\t\t<ngs-form-control-select fxFlex=\"" + schema.width *
                10 + "\" [form]=\"" + schema.formGroupPath + "\" [schema]=\"" + schema.path + ".schema\"></ngs-form-control-select>\n    \t";
    }
};
var ɵ0 = contorlTemplate;
exports.ɵ0 = ɵ0;
var GroupOpenTemplate = function (_a) {
    var path = _a.path;
    return "\n    \t<div [formGroup]=\"" + path + "\" fxLayout=\"row\" fxLayoutWrap>\n  \t";
};
var ɵ1 = GroupOpenTemplate;
exports.ɵ1 = ɵ1;
var GroupCloseTemplate = function () {
    return "\n\t\t</div>\n\t";
};
var ɵ2 = GroupCloseTemplate;
exports.ɵ2 = ɵ2;
var ArrayOpenTemplate = function (_a) {
    var path = _a.path;
    return "\n    \t<div *ngFor=\"let item of " + path + ".controls\">\n  \t";
};
var ɵ3 = ArrayOpenTemplate;
exports.ɵ3 = ɵ3;
var ArrayCloseTemplate = function () {
    return "\n  \t\t</div>\n  \t";
};
var ɵ4 = ArrayCloseTemplate;
exports.ɵ4 = ɵ4;
var FormViewComponent = /** @class */ (function () {
    function FormViewComponent(service, compiler, resolver, store) {
        var _this = this;
        this.service = service;
        this.compiler = compiler;
        this.resolver = resolver;
        this.store = store;
        this.formGroupCreated = false;
        this.template = "";
        this.schema$ = new BehaviorSubject_1.BehaviorSubject(undefined);
        this.schema$.subscribe(function (schema) {
            if (!schema)
                return;
            _this.formGroup = _this.createFrom(schema.form);
            if (!schema.form.name)
                return;
            _this.template = _this.createTemplate(_this.formGroup);
            _this.formGroupCreated = true;
            setTimeout(function () {
                if (_this.formCompnent)
                    _this.formCompnent.destroy();
                var _module = _this.createModuleWithFormComponent(schema, _this.template, schema.form.name, _this.formGroup);
                _this.compiler.compileModuleAndAllComponentsAsync(_module).then(function (factory) {
                    _this.formCompnent = _this.target.createComponent(factory.componentFactories.find(function (item) { return item.selector == "dynamic"; }), 0);
                    _this.target.insert(_this.formCompnent.hostView);
                });
            }, 10);
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
    FormViewComponent.prototype.generate = function (schema) {
        this.schema$.next(schema);
    };
    FormViewComponent.prototype.createTemplate = function (control) {
        var _this = this;
        if (control instanceof forms_1.FormArray) {
            var res = ArrayOpenTemplate(control.schema);
            control.controls.map(function (item) {
                res += _this.createTemplate(item);
            });
            res += ArrayCloseTemplate();
            return res;
        }
        else if (control instanceof forms_1.FormGroup) {
            var res = GroupOpenTemplate(control.schema);
            Object.keys(control.controls).forEach(function (key) {
                res += _this.createTemplate(control.controls[key]);
            });
            res += GroupCloseTemplate();
            return res;
        }
        else {
            return contorlTemplate(control.schema);
        }
    };
    FormViewComponent.prototype.createModuleWithFormComponent = function (schema, template, formGroupName, formGroup) {
        var CustomComponent = /** @class */ (function () {
            // formGroup = formGroup;
            function CustomComponent() {
                this[formGroupName] = formGroup;
                this["schema"] = schema;
            }
            CustomComponent.decorators = [
                { type: core_1.Component, args: [{
                            template: template,
                            selector: "dynamic"
                        },] },
            ];
            /** @nocollapse */
            CustomComponent.ctorParameters = function () { return []; };
            return CustomComponent;
        }());
        var _module = /** @class */ (function () {
            function _module() {
            }
            _module.decorators = [
                { type: core_1.NgModule, args: [{
                            imports: [
                                common_1.CommonModule,
                                material_1.MatSidenavModule,
                                material_1.MatToolbarModule,
                                material_1.MatFormFieldModule,
                                material_1.MatInputModule,
                                material_1.MatCheckboxModule,
                                material_1.MatRadioModule,
                                material_1.MatSelectModule,
                                material_1.MatSliderModule,
                                forms_1.FormsModule,
                                forms_1.ReactiveFormsModule,
                                material_1.MatIconModule,
                                material_1.MatButtonModule,
                                material_1.MatCardModule,
                                flex_layout_1.FlexLayoutModule,
                                form_controls_1.FormControlsModule
                            ],
                            declarations: [CustomComponent],
                            exports: [CustomComponent]
                        },] },
            ];
            /** @nocollapse */
            _module.ctorParameters = function () { return []; };
            return _module;
        }());
        return _module;
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
            var ctr = new forms_1.FormControl(data.value);
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
    FormViewComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "ngs-form-view",
                    template: "<div *ngIf=\"formGroupCreated\">   <div #contentFormGen></div> </div>",
                    styles: [
                        "\n\t\t"
                    ]
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
        "local": [{ type: core_1.Input },],
        "id": [{ type: core_1.Input },],
        "schema$": [{ type: core_1.Input },],
        "target": [{ type: core_1.ViewChild, args: ["contentFormGen", { read: core_1.ViewContainerRef },] },],
    };
    return FormViewComponent;
}());
exports.FormViewComponent = FormViewComponent;
//# sourceMappingURL=form-view.component.js.map