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
var edit_form_actions_1 = require("./edit-form.actions");
var list_1 = require("../list");
var EditFormEffects = /** @class */ (function () {
    function EditFormEffects(actions$, router, service) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.service = service;
        this.EditForm$ = this.actions$
            .ofType(edit_form_actions_1.EditFormActionTypes.EDIT_FORM)
            .map(effects_1.toPayload)
            .map(function (data) { return new edit_form_actions_1.EditFormStartAction(data); });
        this.EditFormStart$ = this.actions$
            .ofType(edit_form_actions_1.EditFormActionTypes.EDIT_FORM_START)
            .map(effects_1.toPayload)
            .switchMap(function (data) { return _this.service.update(data); })
            .map(function (formSchema) { return new edit_form_actions_1.EditFormSucceedAction(formSchema); })
            .catch(function () { return Observable_1.Observable.of(new edit_form_actions_1.EditFormFailedAction()); });
        this.UpdateFormsListStart$ = this.actions$
            .ofType(edit_form_actions_1.EditFormActionTypes.EDIT_FORM_SUCCEED)
            .map(effects_1.toPayload)
            .map(function (formSchema) { return new list_1.UpdateFormSchemaAction(formSchema); });
    }
    EditFormEffects.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    EditFormEffects.ctorParameters = function () { return [
        { type: effects_1.Actions, },
        { type: router_1.Router, },
        { type: services_1.FormService, },
    ]; };
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], EditFormEffects.prototype, "EditForm$", void 0);
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], EditFormEffects.prototype, "EditFormStart$", void 0);
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], EditFormEffects.prototype, "UpdateFormsListStart$", void 0);
    return EditFormEffects;
}());
exports.EditFormEffects = EditFormEffects;
//# sourceMappingURL=edit-form.effects.js.map