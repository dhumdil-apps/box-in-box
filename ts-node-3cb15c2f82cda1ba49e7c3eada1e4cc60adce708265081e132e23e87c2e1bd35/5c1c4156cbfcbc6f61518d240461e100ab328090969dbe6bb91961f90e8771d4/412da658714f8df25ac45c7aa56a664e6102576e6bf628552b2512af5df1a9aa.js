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
var get_service_1 = require("../services/http/get.service");
var routerFadeIn_1 = require("./content/router-transitions/routerFadeIn");
var MainComponent = (function () {
    function MainComponent(router, getService) {
        this.router = router;
        this.getService = getService;
        this.page = {
            'browser-height': 0,
            'browser-width': 0,
            'fixed-header': false,
            'scroll-sections': ['header', 'content', 'footer'],
            'path': 'assets/app/img/',
            'langs': ['en'],
            'langIndex': 0,
            'loading': true,
            'scrolled-px': 0,
            'scrolling': false,
            'header-loaded': false,
            'header-len': 0,
            'full-header': false
        };
        this.init();
    }
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        // handleResize
        this.page['browser-height'] = this.bnb.nativeElement.offsetParent.clientHeight;
        this.page['browser-width'] = this.bnb.nativeElement.offsetParent.clientWidth;
        setInterval(function () {
            if (_this.bnb.nativeElement.offsetParent.clientWidth !== _this.page['browser-width']) {
                _this.page['browser-width'] = _this.bnb.nativeElement.offsetParent.clientWidth;
                if (_this.page['header-loaded']) {
                    _this.page['full-header'] = (_this.page['browser-width'] <= ((_this.page['header-len'] * 250) + 200));
                }
            }
            if (_this.bnb.nativeElement.offsetParent.clientHeight !== _this.page['browser-height']) {
                _this.page['browser-height'] = _this.bnb.nativeElement.offsetParent.clientHeight;
            }
        }, 50);
    };
    MainComponent.prototype.init = function () {
        var _this = this;
        this.getService.get('app.json').subscribe(function (data) {
            try {
                _this.page['langs'] = data['langs'];
                _this.page['langIndex'] = data['langIndex'];
            }
            catch (e) {
                _this.page['langs'] = ['en'];
                _this.page['langIndex'] = 0;
            }
            _this.page['loading'] = false;
        });
    };
    MainComponent.prototype.navigateTo = function (navigation) {
        switch (navigation.type) {
            case 'content':
                {
                    this.scrollTo('content');
                    this.router.navigate([navigation.id]);
                    return;
                }
            case 'scroll':
                {
                    this.scrollTo(navigation.id);
                    return;
                }
            default: return;
        }
    };
    MainComponent.prototype.scrollTo = function (section) {
        var _this = this;
        this.page['scrolling'] = true;
        var start = this.getScrollTop() + 1;
        var end = 0;
        if (section === this.page['scroll-sections'][1]) {
            end = this.page['browser-height'] - 50;
        }
        else if (section === this.page['scroll-sections'][2]) {
            end = this.getScrollHeight() - this.getOffsetHeight();
        }
        var step = end;
        if (start > end) {
            // scroll UP
            var interval_1 = setInterval(function () {
                step = Math.ceil((start - end) / 12.5);
                start = start - step;
                if (start > end) {
                    _this.setScrollTop(start);
                }
                else {
                    _this.setScrollTop(end);
                    clearInterval(interval_1);
                    _this.page['scrolling'] = false;
                }
            }, 10);
        }
        else if (start < end) {
            // scroll DOWN
            var interval_2 = setInterval(function () {
                step = Math.floor(step / 1.001);
                start = start + (end - step);
                if (start < end) {
                    _this.setScrollTop(start);
                }
                else {
                    _this.setScrollTop(end);
                    clearInterval(interval_2);
                    _this.page['scrolling'] = false;
                }
            }, 10);
        }
        else {
            this.page['scrolling'] = false;
        }
    };
    MainComponent.prototype.onScroll = function () {
        this.getScrollTop();
        this.page['fixed-header'] = (this.getScrollTop() >= (this.page['browser-height'] - 51));
    };
    MainComponent.prototype.getScrollTop = function () {
        this.page['scrolled-px'] = this.bnb.nativeElement.scrollTop;
        return this.page['scrolled-px'];
    };
    MainComponent.prototype.setScrollTop = function (size) {
        this.bnb.nativeElement.scrollTop = size;
    };
    MainComponent.prototype.getOffsetHeight = function () {
        return this.bnb.nativeElement.offsetHeight;
    };
    MainComponent.prototype.getScrollHeight = function () {
        return this.bnb.nativeElement.scrollHeight;
    };
    return MainComponent;
}());
__decorate([
    core_1.HostBinding('@routerTransition'),
    __metadata("design:type", Object)
], MainComponent.prototype, "routerTransition", void 0);
__decorate([
    core_1.ViewChild('bnb'),
    __metadata("design:type", Object)
], MainComponent.prototype, "bnb", void 0);
MainComponent = __decorate([
    core_1.Component({
        selector: 'bnb-main',
        templateUrl: './main.html',
        styleUrls: ['./main.less'],
        animations: [routerFadeIn_1.routerTransition]
    }),
    __metadata("design:paramtypes", [router_1.Router, get_service_1.HttpGETService])
], MainComponent);
exports.MainComponent = MainComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvbWFydGluLXBldGVyL2NvZGUvYm5iL3NyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC50cyIsInNvdXJjZXMiOlsiL2hvbWUvbWFydGluLXBldGVyL2NvZGUvYm5iL3NyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEyRTtBQUMzRSwwQ0FBa0Q7QUFDbEQsNERBQXFFO0FBQ3JFLDBFQUFvRjtBQVNwRixJQUFhLGFBQWE7SUFRekIsdUJBQW9CLE1BQWMsRUFBVSxVQUEwQjtRQUFsRCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBZ0I7UUFFckUsSUFBSSxDQUFDLElBQUksR0FBRztZQUNYLGdCQUFnQixFQUFFLENBQUM7WUFDbkIsZUFBZSxFQUFFLENBQUM7WUFDbEIsY0FBYyxFQUFFLEtBQUs7WUFDckIsaUJBQWlCLEVBQUUsQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLFFBQVEsQ0FBQztZQUNsRCxNQUFNLEVBQUUsaUJBQWlCO1lBQ3pCLE9BQU8sRUFBRyxDQUFDLElBQUksQ0FBQztZQUNoQixXQUFXLEVBQUUsQ0FBQztZQUNkLFNBQVMsRUFBRSxJQUFJO1lBQ2YsYUFBYSxFQUFFLENBQUM7WUFDaEIsV0FBVyxFQUFFLEtBQUs7WUFDbEIsZUFBZSxFQUFFLEtBQUs7WUFDdEIsWUFBWSxFQUFFLENBQUM7WUFDZixhQUFhLEVBQUUsS0FBSztTQUNwQixDQUFDO1FBQ0YsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFBQSxpQkFtQkM7UUFqQkEsZUFBZTtRQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDO1FBQy9FLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcs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LENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7UUFDNUQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVPLG9DQUFZLEdBQXBCLFVBQXFCLElBQVk7UUFFaEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUN6QyxDQUFDO0lBRU8sdUNBQWUsR0FBdkI7UUFFQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDO0lBQzVDLENBQUM7SUFFTyx1Q0FBZSxHQUF2QjtRQUVDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUM7SUFDNUMsQ0FBQztJQUVGLG9CQUFDO0FBQUQsQ0FBQyxBQWhMRCxJQWdMQztBQTVLa0M7SUFBakMsa0JBQVcsQ0FBQyxtQkFBbUIsQ0FBQzs7dURBQWtCO0FBRWpDO0lBQWpCLGdCQUFTLENBQUMsS0FBSyxDQUFDOzswQ0FBSztBQU5WLGFBQWE7SUFQekIsZ0JBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFdBQVcsRUFBRSxhQUFhO1FBQzFCLFNBQVMsRUFBRSxDQUFDLGFBQWEsQ0FBQztRQUMxQixVQUFVLEVBQUUsQ0FBRSwrQkFBZ0IsQ0FBRTtLQUNoQyxDQUFDO3FDQVUyQixlQUFNLEVBQXNCLDRCQUFjO0dBUjFELGFBQWEsQ0FnTHpCO0FBaExZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgSG9zdEJpbmRpbmcgIH1cdGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH1cdFx0XHRcdFx0XHRcdFx0XHRcdGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBIdHRwR0VUU2VydmljZSB9XHRcdFx0XHRcdFx0XHRcdGZyb20gJy4uL3NlcnZpY2VzL2h0dHAvZ2V0LnNlcnZpY2UnO1xuaW1wb3J0IHsgcm91dGVyVHJhbnNpdGlvbiB9XHRcdFx0XHRcdFx0XHRcdGZyb20gJy4vY29udGVudC9yb3V0ZXItdHJhbnNpdGlvbnMvcm91dGVyRmFkZUluJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYm5iLW1haW4nLFxuXHR0ZW1wbGF0ZVVybDogJy4vbWFpbi5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vbWFpbi5sZXNzJ10sXG5cdGFuaW1hdGlvbnM6IFsgcm91dGVyVHJhbnNpdGlvbiBdXG59KVxuXG5leHBvcnQgY2xhc3MgTWFpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0cHVibGljIHBhZ2U6IGFueTtcblxuXHRASG9zdEJpbmRpbmcoJ0Byb3V0ZXJUcmFuc2l0aW9uJykgcm91dGVyVHJhbnNpdGlvbjtcblxuXHRAVmlld0NoaWxkKCdibmInKSBibmI7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBnZXRTZXJ2aWNlOiBIdHRwR0VUU2VydmljZSlcblx0e1xuXHRcdHRoaXMucGFnZSA9IHtcblx0XHRcdCdicm93c2VyLWhlaWdodCc6IDAsIC8vIHVzZXIncyB3ZWIgYnJvd3NlclxuXHRcdFx0J2Jyb3dzZXItd2lkdGgnOiAwLCAvLyB1c2VyJ3Mgd2ViIGJyb3dzZXJcblx0XHRcdCdmaXhlZC1oZWFkZXInOiBmYWxzZSwgLy8gaGVhZGVyXG5cdFx0XHQnc2Nyb2xsLXNlY3Rpb25zJzogWydoZWFkZXInLCAnY29udGVudCcsICdmb290ZXInXSwgLy8gbGlzdCBzZWN0aW9ucyBmb3Igc2Nyb2xsaW5nXG5cdFx0XHQncGF0aCc6ICdhc3NldHMvYXBwL2ltZy8nLCAvLyBwYXRoIHRvIGljb25zXG5cdFx0XHQnbGFuZ3MnOiAgWydlbiddLFxuXHRcdFx0J2xhbmdJbmRleCc6IDAsXG5cdFx0XHQnbG9hZGluZyc6IHRydWUsXG5cdFx0XHQnc2Nyb2xsZWQtcHgnOiAwLFxuXHRcdFx0J3Njcm9sbGluZyc6IGZhbHNlLFxuXHRcdFx0J2hlYWRlci1sb2FkZWQnOiBmYWxzZSxcblx0XHRcdCdoZWFkZXItbGVuJzogMCxcblx0XHRcdCdmdWxsLWhlYWRlcic6IGZhbHNlXG5cdFx0fTtcblx0XHR0aGlzLmluaXQoKTtcblx0fVxuXG5cdG5nT25Jbml0KClcblx0e1xuXHRcdC8vIGhhbmRsZVJlc2l6ZVxuXHRcdHRoaXMucGFnZVsnYnJvd3Nlci1oZWlnaHQnXSA9IHRoaXMuYm5iLm5hdGl2ZUVsZW1lbnQub2Zmc2V0UGFyZW50LmNsaWVudEhlaWdodDtcblx0XHR0aGlzLnBhZ2VbJ2Jyb3dzZXItd2lkdGgnXSA9IHRoaXMuYm5iLm5hdGl2ZUVsZW1lbnQub2Zmc2V0UGFyZW50LmNsaWVudFdpZHRoO1xuXHRcdHNldEludGVydmFsKCgpID0+IHtcblx0XHRcdGlmICh0aGlzLmJuYi5uYXRpdmVFbGVtZW50Lm9mZnNldFBhcmVudC5jbGllbnRXaWR0aCAhPT0gdGhpcy5wYWdlWydicm93c2VyLXdpZHRoJ10pXG5cdFx0XHR7XG5cdFx0XHRcdHRoaXMucGFnZVsnYnJvd3Nlci13aWR0aCddID0gdGhpcy5ibmIubmF0aXZlRWxlbWVudC5vZmZzZXRQYXJlbnQuY2xpZW50V2lkdGg7XG5cdFx0XHRcdGlmICh0aGlzLnBhZ2VbJ2hlYWRlci1sb2FkZWQnXSlcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMucGFnZVsnZnVsbC1oZWFkZXInXSA9ICAodGhpcy5wYWdlWydicm93c2VyLXdpZHRoJ10gPD0gKCh0aGlzLnBhZ2VbJ2hlYWRlci1sZW4nXSAqIDI1MCkgKyAyMDApKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuYm5iLm5hdGl2ZUVsZW1lbnQub2Zmc2V0UGFyZW50LmNsaWVudEhlaWdodCAhPT0gdGhpcy5wYWdlWydicm93c2VyLWhlaWdodCddKVxuXHRcdFx0e1xuXHRcdFx0XHR0aGlzLnBhZ2VbJ2Jyb3dzZXItaGVpZ2h0J10gPSB0aGlzLmJuYi5uYXRpdmVFbGVtZW50Lm9mZnNldFBhcmVudC5jbGllbnRIZWlnaHQ7XG5cdFx0XHR9XG5cdFx0fSwgNTApO1xuXHR9XG5cblx0cHJpdmF0ZSBpbml0KClcblx0e1xuXHRcdHRoaXMuZ2V0U2VydmljZS5nZXQoJ2FwcC5qc29uJykuc3Vic2NyaWJlKGRhdGEgPT4ge1xuXHRcdFx0dHJ5XG5cdFx0XHR7XG5cdFx0XHRcdHRoaXMucGFnZVsnbGFuZ3MnXSA9IGRhdGFbJ2xhbmdzJ107XG5cdFx0XHRcdHRoaXMucGFnZVsnbGFuZ0luZGV4J10gPSBkYXRhWydsYW5nSW5kZXgnXTtcblx0XHRcdH1cblx0XHRcdGNhdGNoIChlKVxuXHRcdFx0e1xuXHRcdFx0XHR0aGlzLnBhZ2VbJ2xhbmdzJ10gPSBbJ2VuJ107XG5cdFx0XHRcdHRoaXMucGFnZVsnbGFuZ0luZGV4J10gPSAwO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5wYWdlWydsb2FkaW5nJ10gPSBmYWxzZTtcblx0XHR9KTtcblx0fVxuXG5cdHB1YmxpYyBuYXZpZ2F0ZVRvKG5hdmlnYXRpb246IGFueSk6IHZvaWRcblx0e1xuXHRcdHN3aXRjaCAobmF2aWdhdGlvbi50eXBlKVxuXHRcdHtcblx0XHRcdGNhc2UgJ2NvbnRlbnQnOlxuXHRcdFx0e1xuXHRcdFx0XHR0aGlzLnNjcm9sbFRvKCdjb250ZW50Jyk7XG5cdFx0XHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFtuYXZpZ2F0aW9uLmlkXSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGNhc2UgJ3Njcm9sbCc6XG5cdFx0XHR7XG5cdFx0XHRcdHRoaXMuc2Nyb2xsVG8obmF2aWdhdGlvbi5pZCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGRlZmF1bHQ6IHJldHVybjtcblx0XHR9XG5cblx0fVxuXG5cdHByaXZhdGUgc2Nyb2xsVG8oc2VjdGlvbjogc3RyaW5nKTogdm9pZFxuXHR7XG5cdFx0dGhpcy5wYWdlWydzY3JvbGxpbmcnXSA9IHRydWU7XG5cdFx0bGV0IHN0YXJ0ID0gdGhpcy5nZXRTY3JvbGxUb3AoKSArIDE7XG5cdFx0bGV0IGVuZFx0PSAwO1xuXG5cdFx0aWYgKHNlY3Rpb24gPT09IHRoaXMucGFnZVsnc2Nyb2xsLXNlY3Rpb25zJ11bMV0pXG5cdFx0e1xuXHRcdFx0ZW5kID0gdGhpcy5wYWdlWydicm93c2VyLWhlaWdodCddIC0gNTA7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKHNlY3Rpb24gPT09IHRoaXMucGFnZVsnc2Nyb2xsLXNlY3Rpb25zJ11bMl0pXG5cdFx0e1xuXHRcdFx0ZW5kID0gdGhpcy5nZXRTY3JvbGxIZWlnaHQoKSAtIHRoaXMuZ2V0T2Zmc2V0SGVpZ2h0KCk7XG5cdFx0fVxuXG5cdFx0bGV0IHN0ZXAgPSBlbmQ7XG5cblx0XHRpZiAoc3RhcnQgPiBlbmQpXG5cdFx0e1xuXHRcdFx0Ly8gc2Nyb2xsIFVQXG5cdFx0XHRjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcblxuXHRcdFx0XHRzdGVwXHQ9IE1hdGguY2VpbCgoc3RhcnQgLSBlbmQpIC8gMTIuNSk7XG5cdFx0XHRcdHN0YXJ0XHQ9IHN0YXJ0IC0gc3RlcDtcblxuXHRcdFx0XHRpZiAoc3RhcnQgPiBlbmQpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnNldFNjcm9sbFRvcChzdGFydCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zZXRTY3JvbGxUb3AoZW5kKTtcblx0XHRcdFx0XHRjbGVhckludGVydmFsKGludGVydmFsKTtcblx0XHRcdFx0XHR0aGlzLnBhZ2VbJ3Njcm9sbGluZyddID0gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH0sIDEwKTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAoc3RhcnQgPCBlbmQpXG5cdFx0e1xuXHRcdFx0Ly8gc2Nyb2xsIERPV05cblx0XHRcdGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXG5cdFx0XHRcdHN0ZXBcdD0gTWF0aC5mbG9vcihzdGVwIC8gMS4wMDEpO1xuXHRcdFx0XHRzdGFydFx0PSBzdGFydCArIChlbmQgLSBzdGVwKTtcblxuXHRcdFx0XHRpZiAoc3RhcnQgPCBlbmQpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnNldFNjcm9sbFRvcChzdGFydCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zZXRTY3JvbGxUb3AoZW5kKTtcblx0XHRcdFx0XHRjbGVhckludGVydmFsKGludGVydmFsKTtcblx0XHRcdFx0XHR0aGlzLnBhZ2VbJ3Njcm9sbGluZyddID0gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH0sIDEwKTtcblx0XHR9XG5cdFx0ZWxzZVxuXHRcdHtcblx0XHRcdHRoaXMucGFnZVsnc2Nyb2xsaW5nJ10gPSBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgb25TY3JvbGwoKTogdm9pZFxuXHR7XG5cdFx0dGhpcy5nZXRTY3JvbGxUb3AoKTtcblx0XHR0aGlzLnBhZ2VbJ2ZpeGVkLWhlYWRlciddID0gKHRoaXMuZ2V0U2Nyb2xsVG9wKCkgPj0gKHRoaXMucGFnZVsnYnJvd3Nlci1oZWlnaHQnXSAtIDUxKSk7XG5cdH1cblxuXHRwcml2YXRlIGdldFNjcm9sbFRvcCgpOiBudW1iZXJcblx0e1xuXHRcdHRoaXMucGFnZVsnc2Nyb2xsZWQtcHgnXSA9IHRoaXMuYm5iLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wO1xuXHRcdHJldHVybiB0aGlzLnBhZ2VbJ3Njcm9sbGVkLXB4J107XG5cdH1cblxuXHRwcml2YXRlIHNldFNjcm9sbFRvcChzaXplOiBudW1iZXIpOiB2b2lkXG5cdHtcblx0XHR0aGlzLmJuYi5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcCA9IHNpemU7XG5cdH1cblxuXHRwcml2YXRlIGdldE9mZnNldEhlaWdodCgpOiBudW1iZXJcblx0e1xuXHRcdHJldHVybiB0aGlzLmJuYi5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodDtcblx0fVxuXG5cdHByaXZhdGUgZ2V0U2Nyb2xsSGVpZ2h0KCk6IG51bWJlclxuXHR7XG5cdFx0cmV0dXJuIHRoaXMuYm5iLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xuXHR9XG5cbn1cbiJdfQ==