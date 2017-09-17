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
var LinkComponent = (function () {
    function LinkComponent() {
    }
    LinkComponent.prototype.isset = function (str) {
        return (str !== '');
    };
    LinkComponent.prototype.src = function (str) {
        return (this.path + str);
    };
    return LinkComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], LinkComponent.prototype, "link", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], LinkComponent.prototype, "path", void 0);
LinkComponent = __decorate([
    core_1.Component({
        selector: 'bnb-link',
        templateUrl: './link.html',
        styleUrls: ['./link.less']
    })
], LinkComponent);
exports.LinkComponent = LinkComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvbWFydGluLXBldGVyL2NvZGUvYm5iL3NyYy9hcHAvbW9kdWxlcy9saW5rL2xpbmsuY29tcG9uZW50LnRzIiwic291cmNlcyI6WyIvaG9tZS9tYXJ0aW4tcGV0ZXIvY29kZS9ibmIvc3JjL2FwcC9tb2R1bGVzL2xpbmsvbGluay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBaUQ7QUFRakQsSUFBYSxhQUFhO0lBQTFCO0lBZUEsQ0FBQztJQVZPLDZCQUFLLEdBQVosVUFBYSxHQUFXO1FBRXZCLE1BQU0sQ0FBQyxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBRU0sMkJBQUcsR0FBVixVQUFXLEdBQVc7UUFFckIsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUYsb0JBQUM7QUFBRCxDQUFDLEFBZkQsSUFlQztBQWJTO0lBQVIsWUFBSyxFQUFFOzsyQ0FBTTtBQUNMO0lBQVIsWUFBSyxFQUFFOzsyQ0FBTTtBQUhGLGFBQWE7SUFOekIsZ0JBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFdBQVcsRUFBRSxhQUFhO1FBQzFCLFNBQVMsRUFBRSxDQUFDLGFBQWEsQ0FBQztLQUMxQixDQUFDO0dBRVcsYUFBYSxDQWV6QjtBQWZZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdibmItbGluaycsXG5cdHRlbXBsYXRlVXJsOiAnLi9saW5rLmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9saW5rLmxlc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIExpbmtDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpIGxpbms7XG5cdEBJbnB1dCgpIHBhdGg7XG5cblx0cHVibGljIGlzc2V0KHN0cjogc3RyaW5nKTogYm9vbGVhblxuXHR7XG5cdFx0cmV0dXJuIChzdHIgIT09ICcnKTtcblx0fVxuXG5cdHB1YmxpYyBzcmMoc3RyOiBzdHJpbmcpOiBzdHJpbmdcblx0e1xuXHRcdHJldHVybiAodGhpcy5wYXRoICsgc3RyKTtcblx0fVxuXG59XG4iXX0=