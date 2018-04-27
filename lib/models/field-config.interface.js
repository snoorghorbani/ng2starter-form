"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var form_field_validator_model_1 = require("./form-field-validator.model");
var FieldConfig = /** @class */ (function () {
    function FieldConfig(type) {
        this.type = type;
        if (type != "control")
            this.fields = [];
        this.width = 3;
        this.validator = new form_field_validator_model_1.Validator();
    }
    return FieldConfig;
}());
exports.FieldConfig = FieldConfig;
//# sourceMappingURL=field-config.interface.js.map