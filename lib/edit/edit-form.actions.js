"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EditFormActionTypes;
(function (EditFormActionTypes) {
    EditFormActionTypes["EDIT_FORM"] = "[FORM][EDIT] EDIT_FORM";
    EditFormActionTypes["EDIT_FORM_START"] = "[FORM][EDIT] EDIT_FORM_START";
    EditFormActionTypes["EDIT_FORM_SUCCEED"] = "[FORM][EDIT] EDIT_FORM_SUCCEED";
    EditFormActionTypes["EDIT_FORM_FAILED"] = "[FORM][EDIT] EDIT_FORM_FAILED";
})(EditFormActionTypes = exports.EditFormActionTypes || (exports.EditFormActionTypes = {}));
var EditFormAction = /** @class */ (function () {
    function EditFormAction(payload) {
        this.payload = payload;
        this.type = EditFormActionTypes.EDIT_FORM;
    }
    return EditFormAction;
}());
exports.EditFormAction = EditFormAction;
var EditFormStartAction = /** @class */ (function () {
    function EditFormStartAction(payload) {
        this.payload = payload;
        this.type = EditFormActionTypes.EDIT_FORM_START;
    }
    return EditFormStartAction;
}());
exports.EditFormStartAction = EditFormStartAction;
var EditFormSucceedAction = /** @class */ (function () {
    function EditFormSucceedAction(payload) {
        this.payload = payload;
        this.type = EditFormActionTypes.EDIT_FORM_SUCCEED;
    }
    return EditFormSucceedAction;
}());
exports.EditFormSucceedAction = EditFormSucceedAction;
var EditFormFailedAction = /** @class */ (function () {
    function EditFormFailedAction() {
        this.type = EditFormActionTypes.EDIT_FORM_FAILED;
    }
    return EditFormFailedAction;
}());
exports.EditFormFailedAction = EditFormFailedAction;
//# sourceMappingURL=edit-form.actions.js.map