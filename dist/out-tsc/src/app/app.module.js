"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var http_1 = require("@angular/common/http");
var ng2_slim_loading_bar_1 = require("ng2-slim-loading-bar");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var create_component_1 = require("./components/create/create.component");
var index_component_1 = require("./components/index/index.component");
var edit_component_1 = require("./components/edit/edit.component");
var adunit_service_1 = require("./adunit.service");
var routes = [
    {
        path: 'create',
        component: create_component_1.CreateComponent
    },
    {
        path: 'edit/:id',
        component: edit_component_1.EditComponent
    },
    {
        path: 'index',
        component: index_component_1.IndexComponent
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                create_component_1.CreateComponent,
                index_component_1.IndexComponent,
                edit_component_1.EditComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot(routes),
                ng2_slim_loading_bar_1.SlimLoadingBarModule,
                http_1.HttpClientModule,
                forms_1.ReactiveFormsModule
            ],
            providers: [adunit_service_1.AdunitService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map