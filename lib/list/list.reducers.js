"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var list_actions_1 = require("./list.actions");
exports.initialState = {
    status: "pristine",
    data: []
};
function reducer(state, action) {
    if (state === void 0) { state = exports.initialState; }
    switch (action.type) {
        case list_actions_1.FormsListActionTypes.FORMS_LIST: {
            return __assign({}, state, { status: "dirty" });
        }
        case list_actions_1.FormsListActionTypes.FORMS_LIST_START: {
            return __assign({}, state, { status: "pending" });
        }
        case list_actions_1.FormsListActionTypes.FORMS_LIST_SUCCEED: {
            return __assign({}, state, { data: action.payload, status: "succeed" });
        }
        case list_actions_1.FormsListActionTypes.FORMS_LIST_FAILED: {
            return __assign({}, state, { status: "failed" });
        }
        case list_actions_1.FormsListActionTypes.FORM_SCHEMA_UPDATE: {
            debugger;
            var data = state.data.concat();
            var entityIdx = state.data.findIndex(function (form) { return form._id == action.payload._id; });
            if (entityIdx > -1) {
                data[entityIdx] = Object.assign({}, data[entityIdx], action.payload);
            }
            else {
                data.push(action.payload);
            }
            return __assign({}, state, { data: data });
        }
        case list_actions_1.FormsListActionTypes.ADD_FORM_SCHEMA: {
            var data = state.data.concat();
            var entityIdx = state.data.findIndex(function (form) { return form._id == action.payload._id; });
            if (entityIdx > -1) {
                data[entityIdx] = Object.assign({}, data[entityIdx], action.payload);
            }
            else {
                data.push(action.payload);
            }
            return __assign({}, state, { data: data });
        }
        case list_actions_1.FormsListActionTypes.FORM_SCHEMA_FETCHED: {
            var data = state.data.concat();
            var entityIdx = state.data.findIndex(function (form) { return form._id == action.payload._id; });
            if (entityIdx > -1) {
                data[entityIdx] = Object.assign({}, data[entityIdx], action.payload);
            }
            else {
                data.push(action.payload);
            }
            return __assign({}, state, { data: data });
        }
        default: {
            return state;
        }
    }
}
exports.reducer = reducer;
exports.getStatus = function (state) { return state.status; };
//# sourceMappingURL=list.reducers.js.map