"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FormsListActionTypes;
(function (FormsListActionTypes) {
    FormsListActionTypes["FORMS_LIST"] = "[FORM][LIST] FORMS_LIST";
    FormsListActionTypes["FORMS_LIST_START"] = "[FORM][LIST] FORMS_LIST_START";
    FormsListActionTypes["FORMS_LIST_SUCCEED"] = "[FORM][LIST] FORMS_LIST_SUCCEED";
    FormsListActionTypes["FORMS_LIST_FAILED"] = "[FORM][LIST] FORMS_LIST_FAILED";
    FormsListActionTypes["ADD_FORM_SCHEMA"] = "[FORM][LIST] ADD_FORM_SCHEMA";
    FormsListActionTypes["FORM_SCHEMA_UPDATE"] = "[FORM][LIST] FORM_SCHEMA_UPDATE";
    FormsListActionTypes["GET_FORM_SCHEMA"] = "[FORM][LIST] GET_FORM_SCHEMA";
    FormsListActionTypes["FORM_SCHEMA_FETCHED"] = "[FORM][LIST] FORM_SCHEMA_FETCHED";
})(FormsListActionTypes = exports.FormsListActionTypes || (exports.FormsListActionTypes = {}));
var FormsListAction = /** @class */ (function () {
    function FormsListAction() {
        this.type = FormsListActionTypes.FORMS_LIST;
    }
    return FormsListAction;
}());
exports.FormsListAction = FormsListAction;
var FormsListStartAction = /** @class */ (function () {
    function FormsListStartAction() {
        this.type = FormsListActionTypes.FORMS_LIST_START;
    }
    return FormsListStartAction;
}());
exports.FormsListStartAction = FormsListStartAction;
var FormsListSucceedAction = /** @class */ (function () {
    function FormsListSucceedAction(payload) {
        this.payload = payload;
        this.type = FormsListActionTypes.FORMS_LIST_SUCCEED;
    }
    return FormsListSucceedAction;
}());
exports.FormsListSucceedAction = FormsListSucceedAction;
var FormsListFailedAction = /** @class */ (function () {
    function FormsListFailedAction() {
        this.type = FormsListActionTypes.FORMS_LIST_FAILED;
    }
    return FormsListFailedAction;
}());
exports.FormsListFailedAction = FormsListFailedAction;
var UpdateFormSchemaAction = /** @class */ (function () {
    function UpdateFormSchemaAction(payload) {
        this.payload = payload;
        this.type = FormsListActionTypes.FORM_SCHEMA_UPDATE;
    }
    return UpdateFormSchemaAction;
}());
exports.UpdateFormSchemaAction = UpdateFormSchemaAction;
var AddFormSchemaAction = /** @class */ (function () {
    function AddFormSchemaAction(payload) {
        this.payload = payload;
        this.type = FormsListActionTypes.ADD_FORM_SCHEMA;
    }
    return AddFormSchemaAction;
}());
exports.AddFormSchemaAction = AddFormSchemaAction;
var GetFormSchemaAction = /** @class */ (function () {
    function GetFormSchemaAction(payload) {
        this.payload = payload;
        this.type = FormsListActionTypes.GET_FORM_SCHEMA;
    }
    return GetFormSchemaAction;
}());
exports.GetFormSchemaAction = GetFormSchemaAction;
var FormSchemaFechedAction = /** @class */ (function () {
    function FormSchemaFechedAction(payload) {
        this.payload = payload;
        this.type = FormsListActionTypes.FORM_SCHEMA_FETCHED;
    }
    return FormSchemaFechedAction;
}());
exports.FormSchemaFechedAction = FormSchemaFechedAction;
//# sourceMappingURL=list.actions.js.map