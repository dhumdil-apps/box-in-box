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
var dropdown_model_1 = require("./dropdown.model");
var DropdownComponent = (function () {
    function DropdownComponent() {
        this.selected = new core_1.EventEmitter();
    }
    DropdownComponent.prototype.select = function (index) {
        this.dropdown.select(index);
        this.dropdown.hide();
        this.selected.emit();
    };
    DropdownComponent.prototype.toggle = function () {
        this.dropdown.toggle();
    };
    // todo: close on scroll
    DropdownComponent.prototype.close = function () {
        this.dropdown.hide();
    };
    return DropdownComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", dropdown_model_1.Dropdown)
], DropdownComponent.prototype, "dropdown", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DropdownComponent.prototype, "path", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DropdownComponent.prototype, "selected", void 0);
DropdownComponent = __decorate([
    core_1.Component({
        selector: 'bnb-dropdown',
        templateUrl: './dropdown.html',
        styleUrls: ['./dropdown.less']
    })
], DropdownComponent);
exports.DropdownComponent = DropdownComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvbWFydGluLXBldGVyL2NvZGUvYm5iL3NyYy9hcHAvbW9kdWxlcy9kcm9wZG93bi9kcm9wZG93bi5jb21wb25lbnQudHMiLCJzb3VyY2VzIjpbIi9ob21lL21hcnRpbi1wZXRlci9jb2RlL2JuYi9zcmMvYXBwL21vZHVsZXMvZHJvcGRvd24vZHJvcGRvd24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQXVFO0FBQ3ZFLG1EQUFvRDtBQVFwRCxJQUFhLGlCQUFpQjtJQU45QjtRQVVXLGFBQVEsR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztJQW9CekMsQ0FBQztJQWxCTyxrQ0FBTSxHQUFiLFVBQWMsS0FBYTtRQUUxQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVNLGtDQUFNLEdBQWI7UUFFQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCx3QkFBd0I7SUFDakIsaUNBQUssR0FBWjtRQUVDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVGLHdCQUFDO0FBQUQsQ0FBQyxBQXhCRCxJQXdCQztBQXRCUztJQUFSLFlBQUssRUFBRTs4QkFBVyx5QkFBUTttREFBQztBQUNuQjtJQUFSLFlBQUssRUFBRTs7K0NBQU07QUFDSjtJQUFULGFBQU0sRUFBRTs7bURBQStCO0FBSjVCLGlCQUFpQjtJQU43QixnQkFBUyxDQUFDO1FBQ1YsUUFBUSxFQUFFLGNBQWM7UUFDeEIsV0FBVyxFQUFFLGlCQUFpQjtRQUM5QixTQUFTLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztLQUM5QixDQUFDO0dBRVcsaUJBQWlCLENBd0I3QjtBQXhCWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9XHRmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERyb3Bkb3duIH1cdFx0XHRcdFx0XHRcdFx0XHRmcm9tICcuL2Ryb3Bkb3duLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYm5iLWRyb3Bkb3duJyxcblx0dGVtcGxhdGVVcmw6ICcuL2Ryb3Bkb3duLmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9kcm9wZG93bi5sZXNzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBEcm9wZG93bkNvbXBvbmVudCB7XG5cblx0QElucHV0KCkgZHJvcGRvd246IERyb3Bkb3duO1xuXHRASW5wdXQoKSBwYXRoO1xuXHRAT3V0cHV0KCkgc2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0cHVibGljIHNlbGVjdChpbmRleDogbnVtYmVyKTogdm9pZFxuXHR7XG5cdFx0dGhpcy5kcm9wZG93bi5zZWxlY3QoaW5kZXgpO1xuXHRcdHRoaXMuZHJvcGRvd24uaGlkZSgpO1xuXHRcdHRoaXMuc2VsZWN0ZWQuZW1pdCgpO1xuXHR9XG5cblx0cHVibGljIHRvZ2dsZSgpOiB2b2lkXG5cdHtcblx0XHR0aGlzLmRyb3Bkb3duLnRvZ2dsZSgpO1xuXHR9XG5cblx0Ly8gdG9kbzogY2xvc2Ugb24gc2Nyb2xsXG5cdHB1YmxpYyBjbG9zZSgpOiB2b2lkXG5cdHtcblx0XHR0aGlzLmRyb3Bkb3duLmhpZGUoKTtcblx0fVxuXG59XG4iXX0=