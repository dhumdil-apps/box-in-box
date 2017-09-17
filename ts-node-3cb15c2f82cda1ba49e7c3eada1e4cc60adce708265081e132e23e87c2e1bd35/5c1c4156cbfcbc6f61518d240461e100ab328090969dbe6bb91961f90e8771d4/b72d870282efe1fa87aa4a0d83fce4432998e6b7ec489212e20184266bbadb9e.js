"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_server_1 = require("@angular/platform-server");
var app_module_1 = require("./app.module");
var bnb_component_1 = require("./bnb.component");
var ngx_perfect_scrollbar_1 = require("ngx-perfect-scrollbar");
var PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
var AppServerModule = (function () {
    function AppServerModule() {
    }
    return AppServerModule;
}());
AppServerModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_server_1.ServerModule,
            app_module_1.AppModule,
            ngx_perfect_scrollbar_1.PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG)
        ],
        bootstrap: [bnb_component_1.BnbComponent]
    })
], AppServerModule);
exports.AppServerModule = AppServerModule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvbWFydGluLXBldGVyL2NvZGUvYm5iL3NyYy9hcHAvYXBwLnNlcnZlci5tb2R1bGUudHMiLCJzb3VyY2VzIjpbIi9ob21lL21hcnRpbi1wZXRlci9jb2RlL2JuYi9zcmMvYXBwL2FwcC5zZXJ2ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQXlDO0FBQ3pDLDREQUF3RDtBQUN4RCwyQ0FBeUM7QUFDekMsaURBQStDO0FBRS9DLCtEQUFtRTtBQUVuRSxJQUFNLHdCQUF3QixHQUFvQztJQUNqRSxlQUFlLEVBQUUsSUFBSTtDQUNyQixDQUFDO0FBV0YsSUFBYSxlQUFlO0lBQTVCO0lBQStCLENBQUM7SUFBRCxzQkFBQztBQUFELENBQUMsQUFBaEMsSUFBZ0M7QUFBbkIsZUFBZTtJQVQzQixlQUFRLENBQUM7UUFDVCxPQUFPLEVBQUU7WUFDUiw4QkFBWTtZQUNaLHNCQUFTO1lBQ1QsOENBQXNCLENBQUMsT0FBTyxDQUFDLHdCQUF3QixDQUFDO1NBQ3hEO1FBQ0QsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztLQUN6QixDQUFDO0dBRVcsZUFBZSxDQUFJO0FBQW5CLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNlcnZlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLXNlcnZlcic7XG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuL2FwcC5tb2R1bGUnO1xuaW1wb3J0IHsgQm5iQ29tcG9uZW50IH0gZnJvbSAnLi9ibmIuY29tcG9uZW50JztcblxuaW1wb3J0IHsgUGVyZmVjdFNjcm9sbGJhck1vZHVsZSB9IFx0XHRcdFx0ZnJvbSAnbmd4LXBlcmZlY3Qtc2Nyb2xsYmFyJztcbmltcG9ydCB7IFBlcmZlY3RTY3JvbGxiYXJDb25maWdJbnRlcmZhY2UgfVx0XHRmcm9tICduZ3gtcGVyZmVjdC1zY3JvbGxiYXInO1xuY29uc3QgUEVSRkVDVF9TQ1JPTExCQVJfQ09ORklHOiBQZXJmZWN0U2Nyb2xsYmFyQ29uZmlnSW50ZXJmYWNlID0ge1xuXHRzdXBwcmVzc1Njcm9sbFg6IHRydWVcbn07XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRTZXJ2ZXJNb2R1bGUsXG5cdFx0QXBwTW9kdWxlLFxuXHRcdFBlcmZlY3RTY3JvbGxiYXJNb2R1bGUuZm9yUm9vdChQRVJGRUNUX1NDUk9MTEJBUl9DT05GSUcpXG5cdF0sXG5cdGJvb3RzdHJhcDogW0JuYkNvbXBvbmVudF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBTZXJ2ZXJNb2R1bGUgeyB9XG4iXX0=