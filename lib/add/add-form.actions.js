"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AddFormActionTypes;
(function (AddFormActionTypes) {
    AddFormActionTypes["ADD_FORM"] = "[FORM][ADD] ADD_FORM_PROFILE";
    AddFormActionTypes["ADD_FORM_START"] = "[FORM][ADD] ADD_FORM_START";
    AddFormActionTypes["ADD_FORM_SUCCEED"] = "[FORM][ADD] ADD_FORM_SUCCEED";
    AddFormActionTypes["ADD_FORM_FAILED"] = "[FORM][ADD] ADD_FORM_FAILED";
})(AddFormActionTypes = exports.AddFormActionTypes || (exports.AddFormActionTypes = {}));
var AddFormAction = /** @class */ (function () {
    function AddFormAction(payload) {
        this.payload = payload;
        this.type = AddFormActionTypes.ADD_FORM;
    }
    return AddFormAction;
}());
exports.AddFormAction = AddFormAction;
var AddFormStartAction = /** @class */ (function () {
    function AddFormStartAction(payload) {
        this.payload = payload;
        this.type = AddFormActionTypes.ADD_FORM_START;
    }
    return AddFormStartAction;
}());
exports.AddFormStartAction = AddFormStartAction;
var AddFormSucceedAction = /** @class */ (function () {
    function AddFormSucceedAction() {
        this.type = AddFormActionTypes.ADD_FORM_SUCCEED;
    }
    return AddFormSucceedAction;
}());
exports.AddFormSucceedAction = AddFormSucceedAction;
var AddFormFailedAction = /** @class */ (function () {
    function AddFormFailedAction() {
        this.type = AddFormActionTypes.ADD_FORM_FAILED;
    }
    return AddFormFailedAction;
}());
exports.AddFormFailedAction = AddFormFailedAction;
//# sourceMappingURL=add-form.actions.js.map