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
var forms_1 = require("@angular/forms");
var adunit_service_1 = require("../../adunit.service");
var EditComponent = /** @class */ (function () {
    function EditComponent(route, router, adunitservice, fb) {
        this.route = route;
        this.router = router;
        this.adunitservice = adunitservice;
        this.fb = fb;
        this.adunit = {};
        this.createForm();
    }
    EditComponent.prototype.createForm = function () {
        this.angForm = this.fb.group({
            unit_name: ['', forms_1.Validators.required],
            unit_price: ['', forms_1.Validators.required]
        });
    };
    EditComponent.prototype.updateAdUnit = function (unit_name, unit_price) {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.adunitservice.updateAdUnit(unit_name, unit_price, params['id']);
            _this.router.navigate(['index']);
        });
    };
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.adunitservice.editAdUnit(params['id']).subscribe(function (res) {
                _this.adunit = res;
            });
        });
    };
    EditComponent = __decorate([
        core_1.Component({
            selector: 'app-edit',
            templateUrl: './edit.component.html',
            styleUrls: ['./edit.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            adunit_service_1.AdunitService,
            forms_1.FormBuilder])
    ], EditComponent);
    return EditComponent;
}());
exports.EditComponent = EditComponent;
//# sourceMappingURL=edit.component.js.map