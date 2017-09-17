"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var link_model_1 = require("../../modules/link/link.model");
var Navigation = (function () {
    function Navigation(data) {
        var _this = this;
        this.active = 0;
        this.links = [];
        try {
            data.forEach(function (item) {
                if (item.show) {
                    _this.links.push((new link_model_1.Link(item)).link);
                }
            });
            this.loading = false;
        }
        catch (e) {
            this.links = [];
            this.loading = true;
        }
    }
    return Navigation;
}());
exports.Navigation = Navigation;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvbWFydGluLXBldGVyL2NvZGUvYm5iL3NyYy9hcHAvbWFpbi9oZWFkZXIvaGVhZGVyLm1vZGVsLnRzIiwic291cmNlcyI6WyIvaG9tZS9tYXJ0aW4tcGV0ZXIvY29kZS9ibmIvc3JjL2FwcC9tYWluL2hlYWRlci9oZWFkZXIubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw0REFBc0Q7QUFFdEQ7SUFRQyxvQkFBWSxJQUFTO1FBQXJCLGlCQW9CQztRQWxCQSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUVoQixJQUNBLENBQUM7WUFDQSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSTtnQkFDakIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUNkLENBQUM7b0JBQ0EsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLGlCQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDeEMsQ0FBQztZQUNGLENBQUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDdEIsQ0FBQztRQUNELEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUNULENBQUM7WUFDQSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUNoQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNyQixDQUFDO0lBQ0YsQ0FBQztJQUNGLGlCQUFDO0FBQUQsQ0FBQyxBQTdCRCxJQTZCQztBQTdCWSxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpbmsgfVx0XHRmcm9tICcuLi8uLi9tb2R1bGVzL2xpbmsvbGluay5tb2RlbCc7XG5cbmV4cG9ydCBjbGFzcyBOYXZpZ2F0aW9uIHtcblxuXHRwdWJsaWMgbGlua3M6IGFueTtcblx0cHVibGljIGlzVmlzaWJsZTogYm9vbGVhbjtcblx0cHVibGljIGxvYWRpbmc6IGJvb2xlYW47XG5cdHB1YmxpYyBhY3RpdmU6IG51bWJlcjtcblx0cHVibGljIGFuaW1hdGlvbjogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKGRhdGE6IGFueSlcblx0e1xuXHRcdHRoaXMuYWN0aXZlID0gMDtcblx0XHR0aGlzLmxpbmtzID0gW107XG5cblx0XHR0cnlcblx0XHR7XG5cdFx0XHRkYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcblx0XHRcdFx0aWYgKGl0ZW0uc2hvdylcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMubGlua3MucHVzaCgobmV3IExpbmsoaXRlbSkpLmxpbmspO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdHRoaXMubG9hZGluZyA9IGZhbHNlO1xuXHRcdH1cblx0XHRjYXRjaCAoZSlcblx0XHR7XG5cdFx0XHR0aGlzLmxpbmtzID0gW107XG5cdFx0XHR0aGlzLmxvYWRpbmcgPSB0cnVlO1xuXHRcdH1cblx0fVxufVxuIl19