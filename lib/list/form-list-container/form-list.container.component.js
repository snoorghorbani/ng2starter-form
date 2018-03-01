"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var list_actions_1 = require("../../list/list.actions");
var FormListContainerComponent = /** @class */ (function () {
    function FormListContainerComponent(store) {
        this.store = store;
        this.data$ = this.store.select(function (state) { return state.form.list.data; });
    }
    FormListContainerComponent.prototype.ngOnInit = function () {
        this.store.dispatch(new list_actions_1.FormsListAction());
    };
    FormListContainerComponent.decorators = [
        { type: core_1.Component, args: [{
                    template: "<form-list\n\t\t\t\t\t[data]=\"data$\">\n\t\t\t\t</form-list>"
                },] },
    ];
    /** @nocollapse */
    FormListContainerComponent.ctorParameters = function () { return [
        { type: store_1.Store, },
    ]; };
    return FormListContainerComponent;
}());
exports.FormListContainerComponent = FormListContainerComponent;
//# sourceMappingURL=form-list.container.component.js.map