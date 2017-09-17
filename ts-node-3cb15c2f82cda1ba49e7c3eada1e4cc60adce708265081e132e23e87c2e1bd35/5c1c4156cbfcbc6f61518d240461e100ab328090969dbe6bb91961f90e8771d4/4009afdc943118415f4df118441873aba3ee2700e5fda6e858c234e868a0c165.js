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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var HttpGETService = (function () {
    function HttpGETService(http) {
        this.http = http;
    }
    HttpGETService.prototype.get = function (link) {
        return this.http.get('assets/admin/json/' + link).map(function (res) { return res.json().data || {}; });
    };
    return HttpGETService;
}());
HttpGETService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], HttpGETService);
exports.HttpGETService = HttpGETService;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvbWFydGluLXBldGVyL2NvZGUvYm5iL3NyYy9hcHAvc2VydmljZXMvaHR0cC9nZXQuc2VydmljZS50cyIsInNvdXJjZXMiOlsiL2hvbWUvbWFydGluLXBldGVyL2NvZGUvYm5iL3NyYy9hcHAvc2VydmljZXMvaHR0cC9nZXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEyQztBQUMzQyxzQ0FBcUM7QUFDckMsaUNBQStCO0FBRy9CLElBQWEsY0FBYztJQUUxQix3QkFBcUIsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07SUFDOUIsQ0FBQztJQUVLLDRCQUFHLEdBQVYsVUFBVyxJQUFZO1FBRXRCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxJQUFJLEVBQUUsRUFBckIsQ0FBcUIsQ0FBRSxDQUFDO0lBQ3RGLENBQUM7SUFFRixxQkFBQztBQUFELENBQUMsQUFWRCxJQVVDO0FBVlksY0FBYztJQUQxQixpQkFBVSxFQUFFO3FDQUdlLFdBQUk7R0FGbkIsY0FBYyxDQVUxQjtBQVZZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSHR0cEdFVFNlcnZpY2Uge1xuXG5cdGNvbnN0cnVjdG9yIChwcml2YXRlIGh0dHA6IEh0dHApXG5cdHt9XG5cblx0cHVibGljIGdldChsaW5rOiBzdHJpbmcpOiBhbnlcblx0e1xuXHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0KCdhc3NldHMvYWRtaW4vanNvbi8nICsgbGluaykubWFwKHJlcyA9PiByZXMuanNvbigpLmRhdGEgfHwge30gKTtcblx0fVxuXG59XG4iXX0=