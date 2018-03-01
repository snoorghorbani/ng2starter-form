"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var store_1 = require("@ngrx/store");
var models_1 = require("../../models");
var services_1 = require("../../services");
var edit_form_actions_1 = require("../../edit/edit-form.actions");
var add_1 = require("../../add");
var list_1 = require("../../list");
var EditFormContainerComponent = /** @class */ (function (_super) {
    __extends(EditFormContainerComponent, _super);
    function EditFormContainerComponent(service, route, store) {
        var _this = _super.call(this, store, service) || this;
        _this.service = service;
        _this.route = route;
        _this.store = store;
        _this.formGroup = models_1.EditFormApiModel.Request.formGroup;
        return _this;
    }
    EditFormContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .map(function (params) { return params["_id"]; })
            .subscribe(function (id) { return _this.store.dispatch(new list_1.GetFormSchemaAction(id)); });
        this.route.params
            .map(function (params) { return params["_id"]; })
            .switchMap(function (id) { return _this.service.selectFormById(id); })
            .filter(function (data) { return data != null; })
            .take(1)
            .subscribe(function (formSchema) {
            debugger;
            _this.schema = formSchema;
            _this.formGroup.patchValue(formSchema);
        });
    };
    EditFormContainerComponent.prototype.update = function (data) {
        this.store.dispatch(new edit_form_actions_1.EditFormAction(data));
    };
    EditFormContainerComponent.decorators = [
        { type: core_1.Component, args: [{
                    template: "<edit-form\n\t\t\t\t\t[formGroup]=\"formGroup\"\n\t\t\t\t\t[schema]=\"schema\"\n\t\t\t\t\t(changes)=\"update_schema($event)\"\n\t\t\t\t\t(submited)=\"update($event)\">\n\t\t\t\t</edit-form>"
                },] },
    ];
    /** @nocollapse */
    EditFormContainerComponent.ctorParameters = function () { return [
        { type: services_1.FormService, },
        { type: router_1.ActivatedRoute, },
        { type: store_1.Store, },
    ]; };
    return EditFormContainerComponent;
}(add_1.AddFormContainerComponent));
exports.EditFormContainerComponent = EditFormContainerComponent;
//# sourceMappingURL=edit-form-container.component.js.map