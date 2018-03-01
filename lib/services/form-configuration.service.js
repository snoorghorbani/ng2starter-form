"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var config_1 = require("@soushians/config");
var form_config_1 = require("../form.config");
var FormConfigurationService = /** @class */ (function () {
    function FormConfigurationService(configFile, store) {
        var _this = this;
        this.store = store;
        this.config$ = new BehaviorSubject_1.BehaviorSubject(form_config_1.MODULE_DEFAULT_CONFIG);
        this._config = Object.assign({}, form_config_1.MODULE_DEFAULT_CONFIG, configFile);
        this.config$.next(this._config);
        this.store.select(config_1.getFormModuleConfig).subscribe(function (userConfig) {
            if (!userConfig)
                return;
            _this._config = Object.assign({}, _this._config, userConfig.Config);
            _this.config$.next(_this._config);
        });
    }
    Object.defineProperty(FormConfigurationService.prototype, "config", {
        get: function () {
            return this._config;
        },
        enumerable: true,
        configurable: true
    });
    FormConfigurationService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    FormConfigurationService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core_1.Inject, args: [form_config_1.MODULE_CONFIG_TOKEN,] },] },
        { type: store_1.Store, },
    ]; };
    return FormConfigurationService;
}());
exports.FormConfigurationService = FormConfigurationService;
//# sourceMappingURL=form-configuration.service.js.map