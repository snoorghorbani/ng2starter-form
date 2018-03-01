"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FormControlSchema = /** @class */ (function () {
    function FormControlSchema(type) {
        this.type = type;
        if (type != "control")
            this.fields = [];
        this.width = 3;
    }
    return FormControlSchema;
}());
exports.FormControlSchema = FormControlSchema;
//# sourceMappingURL=form-field-schema.model.js.map