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
var HttpPOSTService = (function () {
    function HttpPOSTService(http) {
        this.http = http;
    }
    HttpPOSTService.prototype.post = function (link, data) {
        this.http.post(link, data).subscribe();
    };
    return HttpPOSTService;
}());
HttpPOSTService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], HttpPOSTService);
exports.HttpPOSTService = HttpPOSTService;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvbWFydGluLXBldGVyL2NvZGUvYm5iL3NyYy9hcHAvc2VydmljZXMvaHR0cC9wb3N0LnNlcnZpY2UudHMiLCJzb3VyY2VzIjpbIi9ob21lL21hcnRpbi1wZXRlci9jb2RlL2JuYi9zcmMvYXBwL3NlcnZpY2VzL2h0dHAvcG9zdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUFxQztBQUNyQyxpQ0FBK0I7QUFHL0IsSUFBYSxlQUFlO0lBRTNCLHlCQUFxQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUM5QixDQUFDO0lBRUssOEJBQUksR0FBWCxVQUFZLElBQVksRUFBRSxJQUFTO1FBRWxDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRUYsc0JBQUM7QUFBRCxDQUFDLEFBVkQsSUFVQztBQVZZLGVBQWU7SUFEM0IsaUJBQVUsRUFBRTtxQ0FHZSxXQUFJO0dBRm5CLGVBQWUsQ0FVM0I7QUFWWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEh0dHBQT1NUU2VydmljZSB7XG5cblx0Y29uc3RydWN0b3IgKHByaXZhdGUgaHR0cDogSHR0cClcblx0e31cblxuXHRwdWJsaWMgcG9zdChsaW5rOiBzdHJpbmcsIGRhdGE6IGFueSk6IHZvaWRcblx0e1xuXHRcdHRoaXMuaHR0cC5wb3N0KGxpbmssIGRhdGEpLnN1YnNjcmliZSgpO1xuXHR9XG5cbn1cbiJdfQ==