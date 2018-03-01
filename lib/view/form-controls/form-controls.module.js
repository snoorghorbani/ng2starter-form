"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var material_1 = require("@angular/material");
var forms_1 = require("@angular/forms");
var select_1 = require("./select");
var checkbox_1 = require("./checkbox");
var email_1 = require("./email");
var color_1 = require("./color");
var text_1 = require("./text");
var number_1 = require("./number");
var FormControlsModule = /** @class */ (function () {
    function FormControlsModule() {
    }
    FormControlsModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        common_1.CommonModule,
                        material_1.MatSidenavModule,
                        material_1.MatToolbarModule,
                        material_1.MatFormFieldModule,
                        material_1.MatCardModule,
                        material_1.MatButtonModule,
                        material_1.MatIconModule,
                        material_1.MatInputModule,
                        material_1.MatCheckboxModule,
                        material_1.MatRadioModule,
                        material_1.MatSelectModule,
                        material_1.MatSliderModule,
                        forms_1.FormsModule,
                        forms_1.ReactiveFormsModule
                    ],
                    declarations: [
                        select_1.SelectComponent,
                        checkbox_1.CheckboxComponent,
                        email_1.EmailComponent,
                        color_1.ColorComponent,
                        text_1.TextComponent,
                        number_1.NumberComponent
                    ],
                    exports: [select_1.SelectComponent, checkbox_1.CheckboxComponent, email_1.EmailComponent, color_1.ColorComponent, text_1.TextComponent, number_1.NumberComponent]
                },] },
    ];
    /** @nocollapse */
    FormControlsModule.ctorParameters = function () { return []; };
    return FormControlsModule;
}());
exports.FormControlsModule = FormControlsModule;
//# sourceMappingURL=form-controls.module.js.map