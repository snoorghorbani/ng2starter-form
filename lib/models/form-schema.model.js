"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var field_config_model_1 = require("./field-config.model");
var FormSchemaModel = /** @class */ (function () {
    function FormSchemaModel() {
        this.events = {
            accept: {
                show: false,
                text: "ثبت"
            },
            cancel: {
                show: false,
                text: "انصراف"
            }
        };
        this.form = new field_config_model_1.FieldConfig("group");
    }
    FormSchemaModel.prototype.init = function () {
        this._id = (Math.random() * 10).toString();
    };
    return FormSchemaModel;
}());
exports.FormSchemaModel = FormSchemaModel;
//# sourceMappingURL=form-schema.model.js.map