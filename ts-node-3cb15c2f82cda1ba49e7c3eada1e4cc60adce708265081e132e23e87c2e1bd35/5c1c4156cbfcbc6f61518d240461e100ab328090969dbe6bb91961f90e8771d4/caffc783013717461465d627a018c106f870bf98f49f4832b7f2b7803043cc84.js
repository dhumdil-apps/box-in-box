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
var get_service_1 = require("../../services/http/get.service");
var footer_model_1 = require("./footer.model");
var FooterComponent = (function () {
    function FooterComponent(getService) {
        this.getService = getService;
        this.footer = {
            'loading': true
        };
    }
    FooterComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var path = this.page['langs'][this.page['langIndex']] + '/' + 'footer.json';
        this.getService.get(path).subscribe(function (data) {
            _this.footer = new footer_model_1.Footer(data);
        });
    };
    return FooterComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], FooterComponent.prototype, "page", void 0);
FooterComponent = __decorate([
    core_1.Component({
        selector: 'bnb-footer',
        templateUrl: './footer.html',
        styleUrls: ['./footer.less']
    }),
    __metadata("design:paramtypes", [get_service_1.HttpGETService])
], FooterComponent);
exports.FooterComponent = FooterComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvbWFydGluLXBldGVyL2NvZGUvYm5iL3NyYy9hcHAvbWFpbi9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC50cyIsInNvdXJjZXMiOlsiL2hvbWUvbWFydGluLXBldGVyL2NvZGUvYm5iL3NyYy9hcHAvbWFpbi9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUFnRTtBQUNoRSwrREFBcUU7QUFDckUsK0NBQThDO0FBUTlDLElBQWEsZUFBZTtJQU0zQix5QkFBb0IsVUFBMEI7UUFBMUIsZUFBVSxHQUFWLFVBQVUsQ0FBZ0I7UUFFN0MsSUFBSSxDQUFDLE1BQU0sR0FBRztZQUNiLFNBQVMsRUFBRSxJQUFJO1NBQ2YsQ0FBQztJQUNILENBQUM7SUFFRCx5Q0FBZSxHQUFmO1FBQUEsaUJBT0M7UUFMQSxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsYUFBYSxDQUFDO1FBRTlFLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDdkMsS0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLHFCQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUYsc0JBQUM7QUFBRCxDQUFDLEFBdEJELElBc0JDO0FBbEJTO0lBQVIsWUFBSyxFQUFFOzs2Q0FBTTtBQUpGLGVBQWU7SUFOM0IsZ0JBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRSxZQUFZO1FBQ3RCLFdBQVcsRUFBRSxlQUFlO1FBQzVCLFNBQVMsRUFBRSxDQUFDLGVBQWUsQ0FBQztLQUM1QixDQUFDO3FDQVErQiw0QkFBYztHQU5sQyxlQUFlLENBc0IzQjtBQXRCWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQWZ0ZXJWaWV3SW5pdCwgSW5wdXQgfVx0ZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwR0VUU2VydmljZSB9XHRcdFx0XHRcdGZyb20gJy4uLy4uL3NlcnZpY2VzL2h0dHAvZ2V0LnNlcnZpY2UnO1xuaW1wb3J0IHsgRm9vdGVyIH1cdFx0XHRcdFx0XHRcdGZyb20gJy4vZm9vdGVyLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYm5iLWZvb3RlcicsXG5cdHRlbXBsYXRlVXJsOiAnLi9mb290ZXIuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL2Zvb3Rlci5sZXNzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBGb290ZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuXHRwdWJsaWMgZm9vdGVyOiBhbnk7XG5cblx0QElucHV0KCkgcGFnZTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGdldFNlcnZpY2U6IEh0dHBHRVRTZXJ2aWNlKVxuXHR7XG5cdFx0dGhpcy5mb290ZXIgPSB7XG5cdFx0XHQnbG9hZGluZyc6IHRydWVcblx0XHR9O1xuXHR9XG5cblx0bmdBZnRlclZpZXdJbml0KClcblx0e1xuXHRcdGNvbnN0IHBhdGggPSB0aGlzLnBhZ2VbJ2xhbmdzJ11bdGhpcy5wYWdlWydsYW5nSW5kZXgnXV0gKyAnLycgKyAnZm9vdGVyLmpzb24nO1xuXG5cdFx0dGhpcy5nZXRTZXJ2aWNlLmdldChwYXRoKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG5cdFx0XHR0aGlzLmZvb3RlciA9IG5ldyBGb290ZXIoZGF0YSk7XG5cdFx0fSk7XG5cdH1cblxufVxuIl19