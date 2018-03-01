(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./form-routing.module"));
__export(require("./form.config"));
__export(require("./form.module"));
//services
__export(require("./services"));
//components and actions
__export(require("./add"));
__export(require("./edit"));
__export(require("./list"));
__export(require("./main-container"));
__export(require("./view"));
//models
__export(require("./models"));

})));
