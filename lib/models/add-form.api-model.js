"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("@angular/forms");
var AddFormApiModel;
(function (AddFormApiModel) {
    var Request = /** @class */ (function () {
        function Request(initValue) {
            if (initValue === void 0) { initValue = {}; }
            var _this = this;
            Object.keys(initValue).forEach(function (key) { return (_this[key] = initValue[key]); });
        }
        Request.prototype.getRequestBody = function () {
            return {
                name: this.name,
                form: this.form,
                events: this.events
            };
        };
        Object.defineProperty(Request, "formGroup", {
            get: function () {
                return new forms_1.FormGroup({
                    _id: new forms_1.FormControl("", [forms_1.Validators.required]),
                    name: new forms_1.FormControl("", [forms_1.Validators.required]),
                    title: new forms_1.FormControl("", [forms_1.Validators.required]),
                    form: new forms_1.FormControl({}),
                    events: new forms_1.FormGroup({
                        accept: new forms_1.FormGroup({
                            show: new forms_1.FormControl(false),
                            text: new forms_1.FormControl("ثبت")
                        }),
                        cancel: new forms_1.FormGroup({
                            show: new forms_1.FormControl(false),
                            text: new forms_1.FormControl("انصراف")
                        })
                    })
                });
            },
            enumerable: true,
            configurable: true
        });
        return Request;
    }());
    AddFormApiModel.Request = Request;
    var Response = /** @class */ (function () {
        function Response() {
        }
        return Response;
    }());
    AddFormApiModel.Response = Response;
})(AddFormApiModel = exports.AddFormApiModel || (exports.AddFormApiModel = {}));
//# sourceMappingURL=add-form.api-model.js.map