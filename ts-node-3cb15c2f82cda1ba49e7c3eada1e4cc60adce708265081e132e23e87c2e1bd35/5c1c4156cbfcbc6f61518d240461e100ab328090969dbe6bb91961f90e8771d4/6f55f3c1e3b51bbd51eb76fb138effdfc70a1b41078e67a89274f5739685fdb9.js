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
var popup_model_1 = require("./popup.model");
var PopupComponent = (function () {
    function PopupComponent() {
    }
    PopupComponent.prototype.img = function (filename) {
        return '/assets/app/img/' + filename;
    };
    PopupComponent.prototype.close = function () {
        this.popup['isVisible'] = false;
    };
    return PopupComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", popup_model_1.Popup)
], PopupComponent.prototype, "popup", void 0);
PopupComponent = __decorate([
    core_1.Component({
        selector: 'bnb-popup',
        templateUrl: './popup.html',
        styleUrls: ['./popup.less']
    }),
    __metadata("design:paramtypes", [])
], PopupComponent);
exports.PopupComponent = PopupComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvbWFydGluLXBldGVyL2NvZGUvYm5iL3NyYy9hcHAvbW9kdWxlcy9wb3B1cC9wb3B1cC5jb21wb25lbnQudHMiLCJzb3VyY2VzIjpbIi9ob21lL21hcnRpbi1wZXRlci9jb2RlL2JuYi9zcmMvYXBwL21vZHVsZXMvcG9wdXAvcG9wdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQWlEO0FBQ2pELDZDQUFzQztBQVF0QyxJQUFhLGNBQWM7SUFJMUI7SUFDQyxDQUFDO0lBRUssNEJBQUcsR0FBVixVQUFXLFFBQWdCO1FBRTFCLE1BQU0sQ0FBQyxrQkFBa0IsR0FBRyxRQUFRLENBQUM7SUFDdEMsQ0FBQztJQUVNLDhCQUFLLEdBQVo7UUFFQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLEtBQUssQ0FBQztJQUNqQyxDQUFDO0lBRUYscUJBQUM7QUFBRCxDQUFDLEFBakJELElBaUJDO0FBZlM7SUFBUixZQUFLLEVBQUU7OEJBQVEsbUJBQUs7NkNBQUM7QUFGVixjQUFjO0lBTjFCLGdCQUFTLENBQUM7UUFDVixRQUFRLEVBQUUsV0FBVztRQUNyQixXQUFXLEVBQUUsY0FBYztRQUMzQixTQUFTLEVBQUUsQ0FBQyxjQUFjLENBQUM7S0FDM0IsQ0FBQzs7R0FFVyxjQUFjLENBaUIxQjtBQWpCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBvcHVwIH0gZnJvbSAnLi9wb3B1cC5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2JuYi1wb3B1cCcsXG5cdHRlbXBsYXRlVXJsOiAnLi9wb3B1cC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vcG9wdXAubGVzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgUG9wdXBDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpIHBvcHVwOiBQb3B1cDtcblxuXHRjb25zdHJ1Y3RvcigpXG5cdHt9XG5cblx0cHVibGljIGltZyhmaWxlbmFtZTogc3RyaW5nKTogc3RyaW5nXG5cdHtcblx0XHRyZXR1cm4gJy9hc3NldHMvYXBwL2ltZy8nICsgZmlsZW5hbWU7XG5cdH1cblxuXHRwdWJsaWMgY2xvc2UoKTogdm9pZFxuXHR7XG5cdFx0dGhpcy5wb3B1cFsnaXNWaXNpYmxlJ10gPSBmYWxzZTtcblx0fVxuXG59XG4iXX0=