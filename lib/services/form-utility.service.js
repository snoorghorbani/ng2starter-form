"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var store_1 = require("@ngrx/store");
var form_configuration_service_1 = require("./form-configuration.service");
var FormUtilityService = /** @class */ (function () {
    function FormUtilityService(http, store, configurationService) {
        this.http = http;
        this.store = store;
        this.configurationService = configurationService;
    }
    FormUtilityService.decorators = [
        { type: core_1.Injectable },
    ];
    // createFrom(data: FormControlSchema, parentPath = ""): AbstractControl {
    // if (data.type == "control") {
    // 	if (data.parentType == "array") {
    // 		// parentPath = `${parentPath}.controls[${(data as FormControlSchema).name}]`;
    // 	} else if (data.parentType == "group") {
    // 		var formGroupPath = parentPath;
    // 		parentPath = `${parentPath}.controls.${(data as FormControlSchema).name}`;
    // 	}
    // 	var validators = [];
    // 	if (data.validator.required.active) {
    // 		validators.push(Validators.required);
    // 	}
    // 	if (data.validator.minlength.active) {
    // 		validators.push(Validators.minLength(data.validator.minlength.value));
    // 	}
    // 	if (data.validator.email.active) {
    // 		validators.push(Validators.email);
    // 	}
    // 	var ctr = new FormControl(data.value, validators);
    // 	(ctr as any).schema = data;
    // 	(ctr as any).schema.path = parentPath;
    // 	(ctr as any).schema.formGroupPath = formGroupPath;
    // 	return ctr;
    // } else if (data.type == "group") {
    // 	var formGroup = new FormGroup({});
    // 	if (data.parentType == undefined) {
    // 		parentPath = (data as FormControlSchema).name;
    // 	} else if (data.parentType == "array") {
    // 		parentPath = `${parentPath}.controls[${(data as FormControlSchema).name}]`;
    // 	} else if (data.parentType == "group") {
    // 		parentPath = `${parentPath}.controls.${(data as FormControlSchema).name}`;
    // 	}
    // 	(formGroup as any).schema = data;
    // 	(formGroup as any).schema.path = parentPath;
    // 	data.fields.forEach(item => {
    // 		item.parentType = "group";
    // 		formGroup.addControl(item.name, this.createFrom(item, parentPath));
    // 	});
    // 	return formGroup;
    // } else {
    // 	var formArray: FormArray = new FormArray([]);
    // 	parentPath =
    // 		parentPath == ""
    // 			? (data as FormControlSchema).name
    // 			: `${parentPath}.controls.${(data as FormControlSchema).name}`;
    // 	(formArray as any).schema = data;
    // 	(formArray as any).schema.path = parentPath;
    // 	data.fields.forEach((item, idx) => {
    // 		item.parentType = "array";
    // 		item.name = idx.toString();
    // 		formArray.controls.push(this.createFrom(item, parentPath));
    // 	});
    // 	return formArray;
    // }
    // }
    /** @nocollapse */
    FormUtilityService.ctorParameters = function () { return [
        { type: http_1.HttpClient, },
        { type: store_1.Store, },
        { type: form_configuration_service_1.FormConfigurationService, },
    ]; };
    return FormUtilityService;
}());
exports.FormUtilityService = FormUtilityService;
//# sourceMappingURL=form-utility.service.js.map