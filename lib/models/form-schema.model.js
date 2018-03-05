"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var form_field_schema_model_1 = require("./form-field-schema.model");
var FormSchemaModel = /** @class */ (function () {
    function FormSchemaModel() {
        this.form = new form_field_schema_model_1.FormControlSchema("group");
    }
    FormSchemaModel.prototype.init = function () {
        this._id = (Math.random() * 10).toString();
    };
    return FormSchemaModel;
}());
exports.FormSchemaModel = FormSchemaModel;
//# sourceMappingURL=form-schema.model.js.map