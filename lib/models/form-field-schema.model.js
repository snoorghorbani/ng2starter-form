"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var form_field_validator_model_1 = require("./form-field-validator.model");
var FormControlSchema = /** @class */ (function () {
    function FormControlSchema(type) {
        this.type = type;
        if (type != "control")
            this.fields = [];
        this.width = 3;
        this.validator = new form_field_validator_model_1.Validator();
    }
    return FormControlSchema;
}());
exports.FormControlSchema = FormControlSchema;
//# sourceMappingURL=form-field-schema.model.js.map