"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
require("rxjs/add/operator/map");
require("rxjs/add/operator/mergeMap");
var effects_1 = require("@ngrx/effects");
var services_1 = require("../services");
var FormEffects = /** @class */ (function () {
    function FormEffects(actions$, router, service) {
        this.actions$ = actions$;
        this.router = router;
        this.service = service;
    }
    FormEffects.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    FormEffects.ctorParameters = function () { return [
        { type: effects_1.Actions, },
        { type: router_1.Router, },
        { type: services_1.FormService, },
    ]; };
    return FormEffects;
}());
exports.FormEffects = FormEffects;
//# sourceMappingURL=main-container.effects.js.map