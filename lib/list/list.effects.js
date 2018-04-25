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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var Observable_1 = require("rxjs/Observable");
var effects_1 = require("@ngrx/effects");
var operators_1 = require("rxjs/operators");
var services_1 = require("../services");
var list_actions_1 = require("./list.actions");
var FormsListEffects = /** @class */ (function () {
    function FormsListEffects(actions$, router, service) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.service = service;
        this.EditProfileRequest$ = this.actions$.ofType(list_actions_1.FormsListActionTypes.FORMS_LIST).map(function (data) { return new list_actions_1.FormsListStartAction(); });
        this.GetForm$ = this.actions$
            .ofType(list_actions_1.FormsListActionTypes.GET_FORM_SCHEMA)
            .pipe(operators_1.map(function (action) { return action.payload; }), operators_1.switchMap(function (id) { return _this.service.get(id); }), operators_1.map(function (formSchema) { return new list_actions_1.FormSchemaFechedAction(formSchema); }));
        this.get_forms_list$ = this.actions$
            .ofType(list_actions_1.FormsListActionTypes.FORMS_LIST_START)
            .pipe(operators_1.switchMap(function (data) { return _this.service.getList(); }), operators_1.map(function (res) { return new list_actions_1.FormsListSucceedAction(res); }), operators_1.catchError(function () { return Observable_1.Observable.of(new list_actions_1.FormsListFailedAction()); }));
    }
    FormsListEffects.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    FormsListEffects.ctorParameters = function () { return [
        { type: effects_1.Actions, },
        { type: router_1.Router, },
        { type: services_1.FormService, },
    ]; };
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], FormsListEffects.prototype, "EditProfileRequest$", void 0);
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], FormsListEffects.prototype, "GetForm$", void 0);
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], FormsListEffects.prototype, "get_forms_list$", void 0);
    return FormsListEffects;
}());
exports.FormsListEffects = FormsListEffects;
//# sourceMappingURL=list.effects.js.map