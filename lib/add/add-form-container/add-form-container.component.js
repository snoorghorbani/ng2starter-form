"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var models_1 = require("../../models");
var add_form_actions_1 = require("../add-form.actions");
var list_1 = require("../../list");
var services_1 = require("../../services");
var AddFormContainerComponent = /** @class */ (function () {
    function AddFormContainerComponent(store, service) {
        this.store = store;
        this.service = service;
    }
    AddFormContainerComponent.prototype.ngOnInit = function () {
        this.schema = new models_1.FormSchemaModel();
        this.schema.init();
        this.store.dispatch(new list_1.AddFormSchemaAction(this.schema));
    };
    AddFormContainerComponent.prototype.add = function (form) {
        this.store.dispatch(new add_form_actions_1.AddFormAction(form));
    };
    AddFormContainerComponent.prototype.update_schema = function (form) {
        this.store.dispatch(new list_1.UpdateFormSchemaAction(form));
    };
    AddFormContainerComponent.decorators = [
        { type: core_1.Component, args: [{
                    template: "<ngs-form-add \n\t\t\t\t\t[schema]=\"schema\" \n\t\t\t\t\t(changes)=\"update_schema($event)\" \n\t\t\t\t\t(submited)=add($event)\n\t\t\t\t></ngs-form-add>"
                },] },
    ];
    /** @nocollapse */
    AddFormContainerComponent.ctorParameters = function () { return [
        { type: store_1.Store, },
        { type: services_1.FormService, },
    ]; };
    return AddFormContainerComponent;
}());
exports.AddFormContainerComponent = AddFormContainerComponent;
//# sourceMappingURL=add-form-container.component.js.map