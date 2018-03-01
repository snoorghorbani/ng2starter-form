"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var store_1 = require("@ngrx/store");
var infra_1 = require("@soushians/infra");
var models_1 = require("../models");
var form_configuration_service_1 = require("./form-configuration.service");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var FormService = /** @class */ (function () {
    function FormService(http, store, configurationService) {
        this.http = http;
        this.store = store;
        this.configurationService = configurationService;
    }
    FormService.prototype.add = function (data) {
        var _this = this;
        var model = new models_1.AddFormApiModel.Request(data);
        return this.configurationService.config$
            .filter(function (config) { return config.endpoints.addForm != ""; })
            .take(1)
            .switchMap(function (config) { return _this.http.post(config.endpoints.addForm, model.getRequestBody()); })
            .map(function (response) { return response.Result; });
    };
    FormService.prototype.get = function (_id) {
        var _this = this;
        return this.configurationService.config$
            .filter(function (config) { return config.endpoints.getForm != ""; })
            .take(1)
            .switchMap(function (config) { return _this.http.get(infra_1.stringTemplate(config.endpoints.getForm, { _id: _id })); })
            .map(function (response) { return response.Result; });
    };
    FormService.prototype.getList = function () {
        var _this = this;
        return this.configurationService.config$
            .filter(function (config) { return config.endpoints.getList != ""; })
            .switchMap(function (config) { return _this.http.get(config.endpoints.getList); })
            .map(function (response) { return response.Result; });
    };
    FormService.prototype.update = function (data) {
        var _this = this;
        var model = new models_1.EditFormApiModel.Request(data);
        return this.configurationService.config$
            .filter(function (config) { return config.endpoints.editForm != ""; })
            .take(1)
            .switchMap(function (config) { return _this.http.put(config.endpoints.editForm, model.getRequestBody()); })
            .map(function (response) { return response.Result; });
    };
    FormService.prototype.delete = function (_id) {
        var _this = this;
        return this.configurationService.config$
            .filter(function (config) { return config.endpoints.deleteForm != ""; })
            .switchMap(function (config) { return _this.http.get(config.endpoints.deleteForm); });
    };
    FormService.prototype.selectFormById = function (_id) {
        var subject = new BehaviorSubject_1.BehaviorSubject(undefined);
        this.store
            .select(function (state) { return state.form.list.data; })
            .filter(function (forms) { return forms != null; })
            .map(function (forms) { return forms.find(function (form) { return form._id == _id; }); })
            .subscribe(function (FormSchemaModel) { return subject.next(FormSchemaModel); });
        return subject.asObservable();
    };
    FormService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    FormService.ctorParameters = function () { return [
        { type: http_1.HttpClient, },
        { type: store_1.Store, },
        { type: form_configuration_service_1.FormConfigurationService, },
    ]; };
    return FormService;
}());
exports.FormService = FormService;
//# sourceMappingURL=form.service.js.map