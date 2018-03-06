"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var flex_layout_1 = require("@angular/flex-layout");
var animations_1 = require("@angular/platform-browser/animations");
var material_1 = require("@angular/material");
var store_1 = require("@ngrx/store");
var effects_1 = require("@ngrx/effects");
var infra_1 = require("@soushians/infra");
var form_routing_module_1 = require("./form-routing.module");
var form_config_1 = require("./form.config");
var main_container_1 = require("./main-container");
var add_1 = require("./add");
var services_1 = require("./services");
var list_1 = require("./list");
var edit_1 = require("./edit");
var add_form_effects_1 = require("./add/add-form.effects");
var view_1 = require("./view");
var form_group_1 = require("./add/form-group");
var form_array_1 = require("./add/form-array");
var form_control_1 = require("./add/form-control");
var form_selector_1 = require("./form-selector");
var NgsFormModule = /** @class */ (function () {
    function NgsFormModule() {
    }
    NgsFormModule.forRoot = function (config) {
        return {
            ngModule: RootNgsFormModule,
            providers: [{ provide: form_config_1.MODULE_CONFIG_TOKEN, useValue: config }, services_1.FormService, services_1.FormConfigurationService]
        };
    };
    NgsFormModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        http_1.HttpClientModule,
                        infra_1.InfraModule,
                        forms_1.FormsModule,
                        router_1.RouterModule,
                        common_1.CommonModule,
                        material_1.MatExpansionModule,
                        material_1.MatSnackBarModule,
                        material_1.MatIconModule,
                        material_1.MatButtonModule,
                        material_1.MatCardModule,
                        material_1.MatSelectModule,
                        material_1.MatInputModule,
                        material_1.MatFormFieldModule,
                        material_1.MatTabsModule,
                        material_1.MatDividerModule,
                        flex_layout_1.FlexLayoutModule,
                        material_1.MatRadioModule,
                        material_1.MatSlideToggleModule,
                        forms_1.ReactiveFormsModule,
                        animations_1.BrowserAnimationsModule
                    ],
                    declarations: [
                        edit_1.EditFormContainerComponent,
                        edit_1.EditFormComponent,
                        list_1.FormListContainerComponent,
                        list_1.FormListComponent,
                        add_1.AddFormContainerComponent,
                        main_container_1.MainContainerComponent,
                        add_1.AddFormComponent,
                        form_group_1.FormGroupComponent,
                        form_array_1.FormArrayComponent,
                        form_control_1.FormControlComponent,
                        view_1.FormViewComponent,
                        form_selector_1.NgsFormSelectorComponent
                    ],
                    exports: [view_1.FormViewComponent, form_selector_1.NgsFormSelectorComponent]
                },] },
    ];
    /** @nocollapse */
    NgsFormModule.ctorParameters = function () { return []; };
    return NgsFormModule;
}());
exports.NgsFormModule = NgsFormModule;
var RootNgsFormModule = /** @class */ (function () {
    function RootNgsFormModule() {
    }
    RootNgsFormModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        NgsFormModule,
                        store_1.StoreModule.forFeature("form", main_container_1.FormReducers),
                        effects_1.EffectsModule.forFeature([add_form_effects_1.AddFormEffects, edit_1.EditFormEffects, list_1.FormsListEffects]),
                        form_routing_module_1.RoutingModule
                    ],
                    exports: [NgsFormModule]
                },] },
    ];
    /** @nocollapse */
    RootNgsFormModule.ctorParameters = function () { return []; };
    return RootNgsFormModule;
}());
exports.RootNgsFormModule = RootNgsFormModule;
//# sourceMappingURL=form.module.js.map