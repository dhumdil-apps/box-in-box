"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var animations_1 = require("@angular/platform-browser/animations");
// main
var bnb_component_1 = require("./bnb.component");
var main_component_1 = require("./main/main.component");
var slider_component_1 = require("./main/slider/slider.component");
var header_component_1 = require("./main/header/header.component");
var footer_component_1 = require("./main/footer/footer.component");
// modules
var popup_component_1 = require("./modules/popup/popup.component");
var dropdown_component_1 = require("./modules/dropdown/dropdown.component");
var link_component_1 = require("./modules/link/link.component");
// services
var get_service_1 = require("./services/http/get.service");
var post_service_1 = require("./services/http/post.service");
var ngx_perfect_scrollbar_1 = require("ngx-perfect-scrollbar");
var PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
// router
var app_routing_1 = require("./app.routing");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            bnb_component_1.BnbComponent,
            main_component_1.MainComponent,
            slider_component_1.SliderComponent,
            header_component_1.HeaderComponent,
            footer_component_1.FooterComponent,
            popup_component_1.PopupComponent,
            dropdown_component_1.DropdownComponent,
            link_component_1.LinkComponent,
            app_routing_1.routedComponents
        ],
        imports: [
            platform_browser_1.BrowserModule.withServerTransition({ appId: 'bnb' }),
            forms_1.FormsModule,
            http_1.HttpModule,
            animations_1.BrowserAnimationsModule,
            app_routing_1.AppRoutingModule,
            ngx_perfect_scrollbar_1.PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG)
        ],
        providers: [
            get_service_1.HttpGETService,
            post_service_1.HttpPOSTService
        ],
        bootstrap: [
            bnb_component_1.BnbComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvbWFydGluLXBldGVyL2NvZGUvYm5iL3NyYy9hcHAvYXBwLm1vZHVsZS50cyIsInNvdXJjZXMiOlsiL2hvbWUvbWFydGluLXBldGVyL2NvZGUvYm5iL3NyYy9hcHAvYXBwLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLDhEQUErRDtBQUMvRCxzQ0FBZ0Q7QUFDaEQsd0NBQW1EO0FBQ25ELHNDQUFpRDtBQUNqRCxtRUFBa0Y7QUFFbEYsT0FBTztBQUNQLGlEQUFxRDtBQUNyRCx3REFBMkQ7QUFDM0QsbUVBQXNFO0FBQ3RFLG1FQUFzRTtBQUN0RSxtRUFBc0U7QUFFdEUsVUFBVTtBQUNWLG1FQUFzRTtBQUN0RSw0RUFBOEU7QUFDOUUsZ0VBQW1FO0FBRW5FLFdBQVc7QUFDWCwyREFBa0U7QUFDbEUsNkRBQW9FO0FBQ3BFLCtEQUFtRTtBQUVuRSxJQUFNLHdCQUF3QixHQUFvQztJQUNqRSxlQUFlLEVBQUUsSUFBSTtDQUNyQixDQUFDO0FBRUYsU0FBUztBQUNULDZDQUFtRTtBQStCbkUsSUFBYSxTQUFTO0lBQXRCO0lBQXdCLENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQUFBekIsSUFBeUI7QUFBWixTQUFTO0lBN0JyQixlQUFRLENBQUM7UUFDVCxZQUFZLEVBQUU7WUFDYiw0QkFBWTtZQUNaLDhCQUFhO1lBQ2Isa0NBQWU7WUFDZixrQ0FBZTtZQUNmLGtDQUFlO1lBQ2YsZ0NBQWM7WUFDZCxzQ0FBaUI7WUFDakIsOEJBQWE7WUFDYiw4QkFBZ0I7U0FDaEI7UUFDRCxPQUFPLEVBQUU7WUFDUixnQ0FBYSxDQUFDLG9CQUFvQixDQUFDLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBQyxDQUFDO1lBQ2xELG1CQUFXO1lBQ1gsaUJBQVU7WUFDVixvQ0FBdUI7WUFDdkIsOEJBQWdCO1lBQ2hCLDhDQUFzQixDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQztTQUN4RDtRQUNELFNBQVMsRUFBRTtZQUNWLDRCQUFjO1lBQ2QsOEJBQWU7U0FDZjtRQUNELFNBQVMsRUFBRTtZQUNWLDRCQUFZO1NBQ1o7S0FDRCxDQUFDO0dBRVcsU0FBUyxDQUFHO0FBQVosOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCcm93c2VyTW9kdWxlIH1cdFx0XHRcdFx0XHRmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IE5nTW9kdWxlIH1cdFx0XHRcdFx0XHRcdFx0ZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9XHRcdFx0XHRcdFx0XHRmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBIdHRwTW9kdWxlIH1cdFx0XHRcdFx0XHRcdGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfVx0XHRcdFx0ZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcblxuLy8gbWFpblxuaW1wb3J0IHsgQm5iQ29tcG9uZW50IH1cdFx0XHRcdFx0XHRcdGZyb20gJy4vYm5iLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYWluQ29tcG9uZW50IH1cdFx0XHRcdFx0XHRmcm9tICcuL21haW4vbWFpbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2xpZGVyQ29tcG9uZW50IH1cdFx0XHRcdFx0XHRmcm9tICcuL21haW4vc2xpZGVyL3NsaWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgSGVhZGVyQ29tcG9uZW50IH1cdFx0XHRcdFx0XHRmcm9tICcuL21haW4vaGVhZGVyL2hlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9vdGVyQ29tcG9uZW50IH1cdFx0XHRcdFx0XHRmcm9tICcuL21haW4vZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQnO1xuXG4vLyBtb2R1bGVzXG5pbXBvcnQgeyBQb3B1cENvbXBvbmVudCB9XHRcdFx0XHRcdFx0ZnJvbSAnLi9tb2R1bGVzL3BvcHVwL3BvcHVwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEcm9wZG93bkNvbXBvbmVudCB9XHRcdFx0XHRcdGZyb20gJy4vbW9kdWxlcy9kcm9wZG93bi9kcm9wZG93bi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlua0NvbXBvbmVudCB9XHRcdFx0XHRcdFx0ZnJvbSAnLi9tb2R1bGVzL2xpbmsvbGluay5jb21wb25lbnQnO1xuXG4vLyBzZXJ2aWNlc1xuaW1wb3J0IHsgSHR0cEdFVFNlcnZpY2UgfVx0XHRcdFx0XHRcdGZyb20gJy4vc2VydmljZXMvaHR0cC9nZXQuc2VydmljZSc7XG5pbXBvcnQgeyBIdHRwUE9TVFNlcnZpY2UgfVx0XHRcdFx0XHRcdGZyb20gJy4vc2VydmljZXMvaHR0cC9wb3N0LnNlcnZpY2UnO1xuaW1wb3J0IHsgUGVyZmVjdFNjcm9sbGJhck1vZHVsZSB9IFx0XHRcdFx0ZnJvbSAnbmd4LXBlcmZlY3Qtc2Nyb2xsYmFyJztcbmltcG9ydCB7IFBlcmZlY3RTY3JvbGxiYXJDb25maWdJbnRlcmZhY2UgfVx0XHRmcm9tICduZ3gtcGVyZmVjdC1zY3JvbGxiYXInO1xuY29uc3QgUEVSRkVDVF9TQ1JPTExCQVJfQ09ORklHOiBQZXJmZWN0U2Nyb2xsYmFyQ29uZmlnSW50ZXJmYWNlID0ge1xuXHRzdXBwcmVzc1Njcm9sbFg6IHRydWVcbn07XG5cbi8vIHJvdXRlclxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSwgcm91dGVkQ29tcG9uZW50cyB9XHRmcm9tICcuL2FwcC5yb3V0aW5nJztcblxuQE5nTW9kdWxlKHtcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0Qm5iQ29tcG9uZW50LFxuXHRcdE1haW5Db21wb25lbnQsXG5cdFx0U2xpZGVyQ29tcG9uZW50LFxuXHRcdEhlYWRlckNvbXBvbmVudCxcblx0XHRGb290ZXJDb21wb25lbnQsXG5cdFx0UG9wdXBDb21wb25lbnQsXG5cdFx0RHJvcGRvd25Db21wb25lbnQsXG5cdFx0TGlua0NvbXBvbmVudCxcblx0XHRyb3V0ZWRDb21wb25lbnRzXG5cdF0sXG5cdGltcG9ydHM6IFtcblx0XHRCcm93c2VyTW9kdWxlLndpdGhTZXJ2ZXJUcmFuc2l0aW9uKHthcHBJZDogJ2JuYid9KSxcblx0XHRGb3Jtc01vZHVsZSxcblx0XHRIdHRwTW9kdWxlLFxuXHRcdEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLFxuXHRcdEFwcFJvdXRpbmdNb2R1bGUsXG5cdFx0UGVyZmVjdFNjcm9sbGJhck1vZHVsZS5mb3JSb290KFBFUkZFQ1RfU0NST0xMQkFSX0NPTkZJRylcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0SHR0cEdFVFNlcnZpY2UsXG5cdFx0SHR0cFBPU1RTZXJ2aWNlXG5cdF0sXG5cdGJvb3RzdHJhcDogW1xuXHRcdEJuYkNvbXBvbmVudFxuXHRdXG59KVxuXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHt9XG4iXX0=