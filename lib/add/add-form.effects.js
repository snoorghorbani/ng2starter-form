"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/operator/map");
require("rxjs/add/operator/mergeMap");
require("rxjs/add/operator/switchMap");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var Observable_1 = require("rxjs/Observable");
var effects_1 = require("@ngrx/effects");
var services_1 = require("../services");
var add_form_actions_1 = require("./add-form.actions");
var operators_1 = require("rxjs/operators");
var AddFormEffects = /** @class */ (function () {
    function AddFormEffects(actions$, router, service) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.service = service;
        this.AddForm$ = this.actions$
            .ofType(add_form_actions_1.AddFormActionTypes.ADD_FORM)
            .pipe(operators_1.map(function (action) { return action.payload; }), operators_1.map(function (data) { return new add_form_actions_1.AddFormStartAction(data); }));
        this.AddFormStart$ = this.actions$
            .ofType(add_form_actions_1.AddFormActionTypes.ADD_FORM_START)
            .pipe(operators_1.map(function (action) { return action.payload; }), operators_1.switchMap(function (data) { return _this.service.add(data); }), operators_1.map(function (res) { return new add_form_actions_1.AddFormSucceedAction(); }), operators_1.catchError(function () { return Observable_1.Observable.of(new add_form_actions_1.AddFormFailedAction()); }));
    }
    AddFormEffects.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    AddFormEffects.ctorParameters = function () { return [
        { type: effects_1.Actions, },
        { type: router_1.Router, },
        { type: services_1.FormService, },
    ]; };
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], AddFormEffects.prototype, "AddForm$", void 0);
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], AddFormEffects.prototype, "AddFormStart$", void 0);
    return AddFormEffects;
}());
exports.AddFormEffects = AddFormEffects;
//# sourceMappingURL=add-form.effects.js.map