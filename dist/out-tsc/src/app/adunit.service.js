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
var http_1 = require("@angular/common/http");
var AdunitService = /** @class */ (function () {
    function AdunitService(http) {
        this.http = http;
        this.uri = 'http://localhost:4000/adunits';
    }
    AdunitService.prototype.addAdUnit = function (unit_name, unit_price) {
        var obj = {
            unit_name: unit_name,
            unit_price: unit_price
        };
        this.http.post(this.uri + "/add", obj)
            .subscribe(function (res) { return console.log('Done'); });
    };
    AdunitService.prototype.getAdUnits = function () {
        return this
            .http
            .get("" + this.uri);
    };
    AdunitService.prototype.editAdUnit = function (id) {
        return this
            .http
            .get(this.uri + "/edit/" + id);
    };
    AdunitService.prototype.updateAdUnit = function (unit_name, unit_price, id) {
        var obj = {
            unit_name: unit_name,
            unit_price: unit_price
        };
        this
            .http
            .post(this.uri + "/update/" + id, obj)
            .subscribe(function (res) { return console.log('Done'); });
    };
    AdunitService.prototype.deleteAdUnit = function (id) {
        return this
            .http
            .get(this.uri + "/delete/" + id);
    };
    AdunitService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], AdunitService);
    return AdunitService;
}());
exports.AdunitService = AdunitService;
//# sourceMappingURL=adunit.service.js.map