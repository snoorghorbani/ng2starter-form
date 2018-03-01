"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("@angular/forms");
var EditFormApiModel;
(function (EditFormApiModel) {
    var Request = /** @class */ (function () {
        function Request(initValue) {
            if (initValue === void 0) { initValue = {}; }
            var _this = this;
            Object.keys(initValue).forEach(function (key) { return (_this[key] = initValue[key]); });
        }
        Request.prototype.getRequestBody = function () {
            return {
                _id: this._id,
                name: this.name,
                form: this.form
            };
        };
        Object.defineProperty(Request, "formGroup", {
            get: function () {
                return new forms_1.FormGroup({
                    _id: new forms_1.FormControl("", [forms_1.Validators.required]),
                    name: new forms_1.FormControl("", [forms_1.Validators.required]),
                    form: new forms_1.FormControl({})
                });
            },
            enumerable: true,
            configurable: true
        });
        return Request;
    }());
    EditFormApiModel.Request = Request;
    var Response = /** @class */ (function () {
        function Response() {
        }
        return Response;
    }());
    EditFormApiModel.Response = Response;
})(EditFormApiModel = exports.EditFormApiModel || (exports.EditFormApiModel = {}));
//# sourceMappingURL=edit-form.api-model.js.map