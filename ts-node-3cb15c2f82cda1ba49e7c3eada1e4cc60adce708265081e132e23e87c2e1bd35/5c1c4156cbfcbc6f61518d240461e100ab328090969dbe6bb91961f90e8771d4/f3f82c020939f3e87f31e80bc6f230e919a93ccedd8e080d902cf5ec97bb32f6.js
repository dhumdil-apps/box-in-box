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
var slides_model_1 = require("./slides.model");
var slider_animation_1 = require("./slider-animation");
var SliderComponent = (function () {
    function SliderComponent(getService) {
        this.getService = getService;
        this.slider = {
            'active': -1,
            'animation': '',
            'BTNsEnabled': true,
            'auto-slide': {},
            'isAutoSlideOn': false
        };
        this.hack = {
            'active': 0,
            'animation': 'active'
        };
    }
    SliderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getService.get('slider.json').subscribe(function (data) {
            _this.slider.slides = (new slides_model_1.Slides(data)).slides;
            _this.setAutoSlideOn();
        });
    };
    SliderComponent.prototype.setAutoSlideOn = function () {
        var _this = this;
        if (this.slider.slides.length > 0) {
            this.randomizeSlide();
            this.slider.isAutoSlideOn = true;
            this.slider.active = this.hack.active;
            this.slider['auto-slide'] = setInterval(function () {
                _this.changeSlide('next', _this.slider.active < _this.slider.slides.length - 1 ? _this.slider.active + 1 : 0);
            }, 6000);
        }
    };
    SliderComponent.prototype.setAutoSlideOff = function () {
        this.slider.isAutoSlideOn = false;
        clearInterval(this.slider['auto-slide']);
    };
    SliderComponent.prototype.randomizeSlide = function () {
        this.hack.active = Math.floor((Math.random() * (this.slider.slides.length)));
        this.selectSlide(this.slider.active);
    };
    SliderComponent.prototype.selectSlide = function (index) {
        if (this.slider.isAutoSlideOn) {
            this.setAutoSlideOff();
        }
        if (this.slider.active !== index) {
            this.changeSlide('down', index);
        }
    };
    SliderComponent.prototype.changeSlide = function (animation, activeIndex) {
        if (this.slider.BTNsEnabled) {
            this.slider.BTNsEnabled = false; // disable button
            this.hack.active = activeIndex; // change active slide
            this.slider.animation = animation; // animate
            this.hack.animation = animation;
        }
    };
    SliderComponent.prototype.animationStarted = function (ev) {
        // console.log(ev.fromState, '->', ev.toState, ev.totalTime + 'ms');
        if (ev.toState === 'down' || ev.toState === 'next') {
            // active -> 'animation' -> inactive
            this.slider.active = this.hack.active;
        }
    };
    SliderComponent.prototype.animationDone = function (ev) {
        if (ev.fromState === 'inactive' && (ev.toState === 'down' || ev.toState === 'next')) {
            // inactive -> 'animation' -> active
            this.slider.animation = 'active';
        }
        if (ev.toState === 'active') {
            // enable slider buttons
            this.slider.BTNsEnabled = true;
        }
    };
    return SliderComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SliderComponent.prototype, "page", void 0);
__decorate([
    core_1.ViewChild('wrapper'),
    __metadata("design:type", Object)
], SliderComponent.prototype, "wrapper", void 0);
SliderComponent = __decorate([
    core_1.Component({
        selector: 'bnb-slider',
        templateUrl: './slider.html',
        styleUrls: ['./slider.less'],
        animations: [slider_animation_1.sliderAnimation]
    }),
    __metadata("design:paramtypes", [get_service_1.HttpGETService])
], SliderComponent);
exports.SliderComponent = SliderComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvbWFydGluLXBldGVyL2NvZGUvYm5iL3NyYy9hcHAvbWFpbi9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC50cyIsInNvdXJjZXMiOlsiL2hvbWUvbWFydGluLXBldGVyL2NvZGUvYm5iL3NyYy9hcHAvbWFpbi9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUFzRTtBQUN0RSwrREFBd0U7QUFDeEUsK0NBQWlEO0FBQ2pELHVEQUE0RDtBQVM1RCxJQUFhLGVBQWU7SUFTM0IseUJBQW9CLFVBQTBCO1FBQTFCLGVBQVUsR0FBVixVQUFVLENBQWdCO1FBRTdDLElBQUksQ0FBQyxNQUFNLEdBQUc7WUFDYixRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQ1osV0FBVyxFQUFFLEVBQUU7WUFDZixhQUFhLEVBQUUsSUFBSTtZQUNuQixZQUFZLEVBQUUsRUFBRTtZQUNoQixlQUFlLEVBQUUsS0FBSztTQUN0QixDQUFDO1FBQ0YsSUFBSSxDQUFDLElBQUksR0FBRztZQUNYLFFBQVEsRUFBRSxDQUFDO1lBQ1gsV0FBVyxFQUFFLFFBQVE7U0FDckIsQ0FBQztJQUNILENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQUEsaUJBTUM7UUFKQSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJO1lBQ2hELEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxxQkFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQy9DLEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFTyx3Q0FBYyxHQUF0QjtRQUFBLGlCQVlDO1FBVkEsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUNsQyxD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O1lBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUNsQyxDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sS0FBSyxRQUFRLENBQUMsQ0FDNUIsQ0FBQztZQUNBLHdCQUF3QjtZQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDaEMsQ0FBQztJQUNGLENBQUM7SUFFRixzQkFBQztBQUFELENBQUMsQUF6R0QsSUF5R0M7QUFwR1M7SUFBUixZQUFLLEVBQUU7OzZDQUFNO0FBRVE7SUFBckIsZ0JBQVMsQ0FBQyxTQUFTLENBQUM7O2dEQUFTO0FBUGxCLGVBQWU7SUFQM0IsZ0JBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRSxZQUFZO1FBQ3RCLFdBQVcsRUFBRSxlQUFlO1FBQzVCLFNBQVMsRUFBRSxDQUFDLGVBQWUsQ0FBQztRQUM1QixVQUFVLEVBQUUsQ0FBQyxrQ0FBZSxDQUFDO0tBQzdCLENBQUM7cUNBVytCLDRCQUFjO0dBVGxDLGVBQWUsQ0F5RzNCO0FBekdZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIElucHV0LCBPbkluaXQgfVx0XHRcdGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEdFVFNlcnZpY2UgfVx0XHRcdFx0XHRcdFx0XHRmcm9tICcuLi8uLi9zZXJ2aWNlcy9odHRwL2dldC5zZXJ2aWNlJztcbmltcG9ydCB7IFNsaWRlcyB9XHRcdFx0XHRcdFx0XHRcdFx0XHRmcm9tICcuL3NsaWRlcy5tb2RlbCc7XG5pbXBvcnQgeyBzbGlkZXJBbmltYXRpb24gfVx0XHRcdFx0XHRcdFx0XHRmcm9tICcuL3NsaWRlci1hbmltYXRpb24nO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdibmItc2xpZGVyJyxcblx0dGVtcGxhdGVVcmw6ICcuL3NsaWRlci5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vc2xpZGVyLmxlc3MnXSxcblx0YW5pbWF0aW9uczogW3NsaWRlckFuaW1hdGlvbl1cbn0pXG5cbmV4cG9ydCBjbGFzcyBTbGlkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdHB1YmxpYyBzbGlkZXI6IGFueTtcblx0cHJpdmF0ZSBoYWNrOiBhbnk7XG5cblx0QElucHV0KCkgcGFnZTtcblxuXHRAVmlld0NoaWxkKCd3cmFwcGVyJykgd3JhcHBlcjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGdldFNlcnZpY2U6IEh0dHBHRVRTZXJ2aWNlKVxuXHR7XG5cdFx0dGhpcy5zbGlkZXIgPSB7XG5cdFx0XHQnYWN0aXZlJzogLTEsXG5cdFx0XHQnYW5pbWF0aW9uJzogJycsXG5cdFx0XHQnQlROc0VuYWJsZWQnOiB0cnVlLFxuXHRcdFx0J2F1dG8tc2xpZGUnOiB7fSxcblx0XHRcdCdpc0F1dG9TbGlkZU9uJzogZmFsc2Vcblx0XHR9O1xuXHRcdHRoaXMuaGFjayA9IHtcblx0XHRcdCdhY3RpdmUnOiAwLFxuXHRcdFx0J2FuaW1hdGlvbic6ICdhY3RpdmUnXG5cdFx0fTtcblx0fVxuXG5cdG5nT25Jbml0KClcblx0e1xuXHRcdHRoaXMuZ2V0U2VydmljZS5nZXQoJ3NsaWRlci5qc29uJykuc3Vic2NyaWJlKGRhdGEgPT4ge1xuXHRcdFx0dGhpcy5zbGlkZXIuc2xpZGVzID0gKG5ldyBTbGlkZXMoZGF0YSkpLnNsaWRlcztcblx0XHRcdHRoaXMuc2V0QXV0b1NsaWRlT24oKTtcblx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgc2V0QXV0b1NsaWRlT24oKTogdm9pZFxuXHR7XG5cdFx0aWYgKHRoaXMuc2xpZGVyLnNsaWRlcy5sZW5ndGggPiAwKVxuXHRcdHtcblx0XHRcdHRoaXMucmFuZG9taXplU2xpZGUoKTtcblx0XHRcdHRoaXMuc2xpZGVyLmlzQXV0b1NsaWRlT24gPSB0cnVlO1xuXHRcdFx0dGhpcy5zbGlkZXIuYWN0aXZlID0gdGhpcy5oYWNrLmFjdGl2ZTtcblxuXHRcdFx0dGhpcy5zbGlkZXJbJ2F1dG8tc2xpZGUnXSA9IHNldEludGVydmFsKCgpID0+IHtcblx0XHRcdFx0dGhpcy5jaGFuZ2VTbGlkZSgnbmV4dCcsIHRoaXMuc2xpZGVyLmFjdGl2ZSA8IHRoaXMuc2xpZGVyLnNsaWRlcy5sZW5ndGggLSAxID8gdGhpcy5zbGlkZXIuYWN0aXZlICsgMSA6IDApO1xuXHRcdFx0fSwgNjAwMCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBzZXRBdXRvU2xpZGVPZmYoKTogdm9pZFxuXHR7XG5cdFx0dGhpcy5zbGlkZXIuaXNBdXRvU2xpZGVPbiA9IGZhbHNlO1xuXHRcdGNsZWFySW50ZXJ2YWwodGhpcy5zbGlkZXJbJ2F1dG8tc2xpZGUnXSk7XG5cdH1cblxuXHRwcml2YXRlIHJhbmRvbWl6ZVNsaWRlKCk6IHZvaWRcblx0e1xuXHRcdHRoaXMuaGFjay5hY3RpdmUgPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogKHRoaXMuc2xpZGVyLnNsaWRlcy5sZW5ndGgpKSk7XG5cdFx0dGhpcy5zZWxlY3RTbGlkZSh0aGlzLnNsaWRlci5hY3RpdmUpO1xuXHR9XG5cblx0cHVibGljIHNlbGVjdFNsaWRlKGluZGV4OiBudW1iZXIpOiB2b2lkXG5cdHtcblx0XHRpZiAodGhpcy5zbGlkZXIuaXNBdXRvU2xpZGVPbilcblx0XHR7XG5cdFx0XHR0aGlzLnNldEF1dG9TbGlkZU9mZigpO1xuXHRcdH1cblx0XHRpZiAodGhpcy5zbGlkZXIuYWN0aXZlICE9PSBpbmRleClcblx0XHR7XG5cdFx0XHR0aGlzLmNoYW5nZVNsaWRlKCdkb3duJywgaW5kZXgpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY2hhbmdlU2xpZGUoYW5pbWF0aW9uOiBzdHJpbmcsIGFjdGl2ZUluZGV4OiBudW1iZXIpOiB2b2lkXG5cdHtcblx0XHRpZiAodGhpcy5zbGlkZXIuQlROc0VuYWJsZWQpXG5cdFx0e1xuXHRcdFx0dGhpcy5zbGlkZXIuQlROc0VuYWJsZWQgPSBmYWxzZTsgLy8gZGlzYWJsZSBidXR0b25cblx0XHRcdHRoaXMuaGFjay5hY3RpdmUgPSBhY3RpdmVJbmRleDsgLy8gY2hhbmdlIGFjdGl2ZSBzbGlkZVxuXHRcdFx0dGhpcy5zbGlkZXIuYW5pbWF0aW9uID0gYW5pbWF0aW9uOyAvLyBhbmltYXRlXG5cdFx0XHR0aGlzLmhhY2suYW5pbWF0aW9uID0gYW5pbWF0aW9uO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBhbmltYXRpb25TdGFydGVkKGV2OiBhbnkpOiB2b2lkXG5cdHtcblx0XHQvLyBjb25zb2xlLmxvZyhldi5mcm9tU3RhdGUsICctPicsIGV2LnRvU3RhdGUsIGV2LnRvdGFsVGltZSArICdtcycpO1xuXHRcdGlmIChldi50b1N0YXRlID09PSAnZG93bicgfHwgZXYudG9TdGF0ZSA9PT0gJ25leHQnKVxuXHRcdHtcblx0XHRcdC8vIGFjdGl2ZSAtPiAnYW5pbWF0aW9uJyAtPiBpbmFjdGl2ZVxuXHRcdFx0dGhpcy5zbGlkZXIuYWN0aXZlID0gdGhpcy5oYWNrLmFjdGl2ZTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgYW5pbWF0aW9uRG9uZShldjogYW55KTogdm9pZFxuXHR7XG5cdFx0aWYgKGV2LmZyb21TdGF0ZSA9PT0gJ2luYWN0aXZlJyAmJiAoZXYudG9TdGF0ZSA9PT0gJ2Rvd24nIHx8IGV2LnRvU3RhdGUgPT09ICduZXh0JykpXG5cdFx0e1xuXHRcdFx0Ly8gaW5hY3RpdmUgLT4gJ2FuaW1hdGlvbicgLT4gYWN0aXZlXG5cdFx0XHR0aGlzLnNsaWRlci5hbmltYXRpb24gPSAnYWN0aXZlJztcblx0XHR9XG5cdFx0aWYgKGV2LnRvU3RhdGUgPT09ICdhY3RpdmUnKVxuXHRcdHtcblx0XHRcdC8vIGVuYWJsZSBzbGlkZXIgYnV0dG9uc1xuXHRcdFx0dGhpcy5zbGlkZXIuQlROc0VuYWJsZWQgPSB0cnVlO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=