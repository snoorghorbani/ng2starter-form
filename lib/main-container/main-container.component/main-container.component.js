"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var router_1 = require("@angular/router");
var MainContainerComponent = /** @class */ (function () {
    function MainContainerComponent(route, store) {
        this.route = route;
        this.store = store;
    }
    MainContainerComponent.decorators = [
        { type: core_1.Component, args: [{
                    template: "<router-outlet></router-outlet>"
                },] },
    ];
    /** @nocollapse */
    MainContainerComponent.ctorParameters = function () { return [
        { type: router_1.ActivatedRoute, },
        { type: store_1.Store, },
    ]; };
    return MainContainerComponent;
}());
exports.MainContainerComponent = MainContainerComponent;
//# sourceMappingURL=main-container.component.js.map