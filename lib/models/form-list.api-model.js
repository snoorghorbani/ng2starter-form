"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("@angular/forms");
var FormListApiModel;
(function (FormListApiModel) {
    var Request = /** @class */ (function () {
        function Request(initValue) {
            if (initValue === void 0) { initValue = {}; }
            var _this = this;
            Object.keys(initValue).forEach(function (key) { return (_this[key] = initValue[key]); });
        }
        Request.prototype.getRequestBody = function () {
            return {
                Name: this.Name,
                Controls: this.Controls
            };
        };
        Object.defineProperty(Request, "formGroup", {
            get: function () {
                return new forms_1.FormGroup({
                    Name: new forms_1.FormControl("", [forms_1.Validators.required]),
                    Controls: new forms_1.FormGroup({})
                });
            },
            enumerable: true,
            configurable: true
        });
        return Request;
    }());
    FormListApiModel.Request = Request;
    var Response = /** @class */ (function () {
        function Response() {
        }
        return Response;
    }());
    FormListApiModel.Response = Response;
})(FormListApiModel = exports.FormListApiModel || (exports.FormListApiModel = {}));
//# sourceMappingURL=form-list.api-model.js.map