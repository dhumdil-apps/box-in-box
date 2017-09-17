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
var header_model_1 = require("./header.model");
var header_animation_1 = require("./header-animation");
var HeaderComponent = (function () {
    function HeaderComponent(getService) {
        this.getService = getService;
        this.navigate = new core_1.EventEmitter();
        this.navigation = {
            'loading': true
        };
    }
    HeaderComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var path = this.page['langs'][this.page['langIndex']] + '/header.json';
        this.getService.get(path).subscribe(function (data) {
            _this.navigation = new header_model_1.Navigation(data);
            _this.navigation.animation = 'void';
            _this.page['header-loaded'] = true;
            _this.page['header-len'] = _this.navigation.links.length;
            _this.page['full-header'] = (_this.page['browser-width'] <= ((_this.navigation.links.length * 250) + 200));
        });
    };
    HeaderComponent.prototype.navigateTo = function (link, index) {
        this.navigation.active = index;
        this.closeMenu();
        this.navigate.emit(link);
        this.page['active-index'] = index;
    };
    HeaderComponent.prototype.navigateToSelected = function (link, index) {
        this.navigation.active = index;
        this.scrollToNavigation();
        this.navigateTo(link.id[link.dropdown.selected], index);
        link.dropdown.select(-1);
    };
    HeaderComponent.prototype.scrollToNavigation = function () {
        this.navigate.emit({
            'type': 'scroll',
            'id': 'content'
        });
    };
    HeaderComponent.prototype.toggleMenu = function () {
        this.navigation.isVisible ? this.closeMenu() : this.showMenu();
    };
    HeaderComponent.prototype.closeMenu = function () {
        if (this.page['full-header']) {
            this.navigation.animation = 'void';
            this.navigation.isVisible = false;
        }
    };
    HeaderComponent.prototype.showMenu = function () {
        var _this = this;
        this.navigation.animation = 'non-void';
        this.scrollToNavigation();
        this.navigation.isVisible = true;
        var interval1 = setInterval(function () {
            if (!_this.page['scrolling']) {
                var scrolledPx_1 = _this.page['scrolled-px'];
                clearInterval(interval1);
                var interval2_1 = setInterval(function () {
                    if (scrolledPx_1 !== _this.page['scrolled-px']) {
                        _this.closeMenu();
                        clearInterval(interval2_1);
                    }
                }, 100);
            }
        }, 100);
    };
    HeaderComponent.prototype.isFull = function () {
        if (this.page['full-header']) {
            // this.navigation.animation = 'void';
            // this.navigation.isVisible = true;
            // this.closeMenu();
            return true;
        }
        this.navigation.isVisible = false;
        return false;
    };
    HeaderComponent.prototype.menuIsActive = function () {
        return this.navigation.isVisible;
    };
    return HeaderComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], HeaderComponent.prototype, "page", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], HeaderComponent.prototype, "navigate", void 0);
HeaderComponent = __decorate([
    core_1.Component({
        selector: 'bnb-header',
        templateUrl: './header.html',
        styleUrls: ['./header.less'],
        animations: [header_animation_1.headerAnimation]
    }),
    __metadata("design:paramtypes", [get_service_1.HttpGETService])
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvbWFydGluLXBldGVyL2NvZGUvYm5iL3NyYy9hcHAvbWFpbi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC50cyIsInNvdXJjZXMiOlsiL2hvbWUvbWFydGluLXBldGVyL2NvZGUvYm5iL3NyYy9hcHAvbWFpbi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUFzRjtBQUN0RiwrREFBMkU7QUFDM0UsK0NBQXVEO0FBQ3ZELHVEQUErRDtBQVMvRCxJQUFhLGVBQWU7SUFPM0IseUJBQW9CLFVBQTBCO1FBQTFCLGVBQVUsR0FBVixVQUFVLENBQWdCO1FBRnBDLGFBQVEsR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUl2QyxJQUFJLENBQUMsVUFBVSxHQUFHO1lBQ2pCLFNBQVMsRUFBRSxJQUFJO1NBQ2YsQ0FBQztJQUNILENBQUM7SUFFRCx5Q0FBZSxHQUFmO1FBQUEsaUJBV0M7UUFUQSxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxjQUFjLENBQUM7UUFFekUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUN2QyxLQUFJLENBQUMsVUFBVSxHQUFHLElBQUkseUJBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2QyxLQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7WUFDbkMsS0FBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDbEMsS0FBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7WUFDdkQsS0FBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FB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WUFDdEMsb0NBQW9DO1lBQ3BDLG9CQUFvQjtZQUVwQixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2IsQ0FBQztRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2QsQ0FBQztJQUVNLHNDQUFZLEdBQW5CO1FBRUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDO0lBQ2xDLENBQUM7SUFFRixzQkFBQztBQUFELENBQUMsQUE5R0QsSUE4R0M7QUExR1M7SUFBUixZQUFLLEVBQUU7OzZDQUFNO0FBQ0o7SUFBVCxhQUFNLEVBQUU7O2lEQUErQjtBQUw1QixlQUFlO0lBUDNCLGdCQUFTLENBQUM7UUFDVixRQUFRLEVBQUUsWUFBWTtRQUN0QixXQUFXLEVBQUUsZUFBZTtRQUM1QixTQUFTLEVBQUUsQ0FBQyxlQUFlLENBQUM7UUFDNUIsVUFBVSxFQUFFLENBQUMsa0NBQWUsQ0FBQztLQUM3QixDQUFDO3FDQVMrQiw0QkFBYztHQVBsQyxlQUFlLENBOEczQjtBQTlHWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBBZnRlclZpZXdJbml0IH1cdGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEdFVFNlcnZpY2UgfVx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmcm9tICcuLi8uLi9zZXJ2aWNlcy9odHRwL2dldC5zZXJ2aWNlJztcbmltcG9ydCB7IE5hdmlnYXRpb24gfVx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZyb20gJy4vaGVhZGVyLm1vZGVsJztcbmltcG9ydCB7IGhlYWRlckFuaW1hdGlvbiB9XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZyb20gJy4vaGVhZGVyLWFuaW1hdGlvbic7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2JuYi1oZWFkZXInLFxuXHR0ZW1wbGF0ZVVybDogJy4vaGVhZGVyLmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9oZWFkZXIubGVzcyddLFxuXHRhbmltYXRpb25zOiBbaGVhZGVyQW5pbWF0aW9uXVxufSlcblxuZXhwb3J0IGNsYXNzIEhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG5cdHB1YmxpYyBuYXZpZ2F0aW9uOiBhbnk7XG5cblx0QElucHV0KCkgcGFnZTtcblx0QE91dHB1dCgpIG5hdmlnYXRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZ2V0U2VydmljZTogSHR0cEdFVFNlcnZpY2UpXG5cdHtcblx0XHR0aGlzLm5hdmlnYXRpb24gPSB7XG5cdFx0XHQnbG9hZGluZyc6IHRydWVcblx0XHR9O1xuXHR9XG5cblx0bmdBZnRlclZpZXdJbml0KClcblx0e1xuXHRcdGNvbnN0IHBhdGggPSB0aGlzLnBhZ2VbJ2xhbmdzJ11bdGhpcy5wYWdlWydsYW5nSW5kZXgnXV0gKyAnL2hlYWRlci5qc29uJztcblxuXHRcdHRoaXMuZ2V0U2VydmljZS5nZXQocGF0aCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xuXHRcdFx0dGhpcy5uYXZpZ2F0aW9uID0gbmV3IE5hdmlnYXRpb24oZGF0YSk7XG5cdFx0XHR0aGlzLm5hdmlnYXRpb24uYW5pbWF0aW9uID0gJ3ZvaWQnO1xuXHRcdFx0dGhpcy5wYWdlWydoZWFkZXItbG9hZGVkJ10gPSB0cnVlO1xuXHRcdFx0dGhpcy5wYWdlWydoZWFkZXItbGVuJ10gPSB0aGlzLm5hdmlnYXRpb24ubGlua3MubGVuZ3RoO1xuXHRcdFx0dGhpcy5wYWdlWydmdWxsLWhlYWRlciddID0gICh0aGlzLnBhZ2VbJ2Jyb3dzZXItd2lkdGgnXSA8PSAoKHRoaXMubmF2aWdhdGlvbi5saW5rcy5sZW5ndGggKiAyNTApICsgMjAwKSk7XG5cdFx0fSk7XG5cdH1cblxuXHRwdWJsaWMgbmF2aWdhdGVUbyhsaW5rOiBhbnksIGluZGV4OiBudW1iZXIpOiB2b2lkXG5cdHtcblx0XHR0aGlzLm5hdmlnYXRpb24uYWN0aXZlID0gaW5kZXg7XG5cdFx0dGhpcy5jbG9zZU1lbnUoKTtcblx0XHR0aGlzLm5hdmlnYXRlLmVtaXQobGluayk7XG5cdFx0dGhpcy5wYWdlWydhY3RpdmUtaW5kZXgnXSA9IGluZGV4O1xuXHR9XG5cblx0cHVibGljIG5hdmlnYXRlVG9TZWxlY3RlZChsaW5rOiBhbnksIGluZGV4OiBudW1iZXIpOiB2b2lkXG5cdHtcblx0XHR0aGlzLm5hdmlnYXRpb24uYWN0aXZlID0gaW5kZXg7XG5cdFx0dGhpcy5zY3JvbGxUb05hdmlnYXRpb24oKTtcblx0XHR0aGlzLm5hdmlnYXRlVG8obGluay5pZFtsaW5rLmRyb3Bkb3duLnNlbGVjdGVkXSwgaW5kZXgpO1xuXHRcdGxpbmsuZHJvcGRvd24uc2VsZWN0KC0xKTtcblx0fVxuXG5cdHB1YmxpYyBzY3JvbGxUb05hdmlnYXRpb24oKTogdm9pZFxuXHR7XG5cdFx0dGhpcy5uYXZpZ2F0ZS5lbWl0KHtcblx0XHRcdCd0eXBlJzogJ3Njcm9sbCcsXG5cdFx0XHQnaWQnOiAnY29udGVudCdcblx0XHR9KTtcblx0fVxuXG5cdHB1YmxpYyB0b2dnbGVNZW51KCk6IHZvaWRcblx0e1xuXHRcdHRoaXMubmF2aWdhdGlvbi5pc1Zpc2libGUgPyB0aGlzLmNsb3NlTWVudSgpIDogdGhpcy5zaG93TWVudSgpO1xuXHR9XG5cblx0cHVibGljIGNsb3NlTWVudSgpOiB2b2lkXG5cdHtcblx0XHRpZiAodGhpcy5wYWdlWydmdWxsLWhlYWRlciddKVxuXHRcdHtcblx0XHRcdHRoaXMubmF2aWdhdGlvbi5hbmltYXRpb24gPSAndm9pZCc7XG5cdFx0XHR0aGlzLm5hdmlnYXRpb24uaXNWaXNpYmxlID0gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBzaG93TWVudSgpOiB2b2lkXG5cdHtcblx0XHR0aGlzLm5hdmlnYXRpb24uYW5pbWF0aW9uID0gJ25vbi12b2lkJztcblx0XHR0aGlzLnNjcm9sbFRvTmF2aWdhdGlvbigpO1xuXHRcdHRoaXMubmF2aWdhdGlvbi5pc1Zpc2libGUgPSB0cnVlO1xuXG5cdFx0Y29uc3QgaW50ZXJ2YWwxID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXG5cdFx0XHRpZiAoIXRoaXMucGFnZVsnc2Nyb2xsaW5nJ10pXG5cdFx0XHR7XG5cdFx0XHRcdGNvbnN0IHNjcm9sbGVkUHggPSB0aGlzLnBhZ2VbJ3Njcm9sbGVkLXB4J107XG5cdFx0XHRcdGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwxKTtcblxuXHRcdFx0XHRjb25zdCBpbnRlcnZhbDIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHNjcm9sbGVkUHggIT09ICB0aGlzLnBhZ2VbJ3Njcm9sbGVkLXB4J10pXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5jbG9zZU1lbnUoKTtcblx0XHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwyKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sIDEwMCk7XG5cblx0XHRcdH1cblxuXHRcdH0sIDEwMCk7XG5cdH1cblxuXHRwdWJsaWMgaXNGdWxsKCk6IGJvb2xlYW5cblx0e1xuXHRcdGlmICh0aGlzLnBhZ2VbJ2Z1bGwtaGVhZGVyJ10pXG5cdFx0e1xuXHRcdFx0Ly8gdGhpcy5uYXZpZ2F0aW9uLmFuaW1hdGlvbiA9ICd2b2lkJztcblx0XHRcdC8vIHRoaXMubmF2aWdhdGlvbi5pc1Zpc2libGUgPSB0cnVlO1xuXHRcdFx0Ly8gdGhpcy5jbG9zZU1lbnUoKTtcblxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdHRoaXMubmF2aWdhdGlvbi5pc1Zpc2libGUgPSBmYWxzZTtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRwdWJsaWMgbWVudUlzQWN0aXZlKCk6IGJvb2xlYW5cblx0e1xuXHRcdHJldHVybiB0aGlzLm5hdmlnYXRpb24uaXNWaXNpYmxlO1xuXHR9XG5cbn1cbiJdfQ==