"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var main_container_1 = require("./main-container");
var add_1 = require("./add");
var edit_1 = require("./edit");
var list_1 = require("./list");
var routes = [
    {
        path: "form",
        component: main_container_1.MainContainerComponent,
        children: [
            {
                path: "add",
                component: add_1.AddFormContainerComponent
            },
            {
                path: "edit/:_id",
                component: edit_1.EditFormContainerComponent
            },
            {
                path: "",
                component: list_1.FormListContainerComponent
            }
        ]
    }
];
exports.RoutingModule = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=form-routing.module.js.map