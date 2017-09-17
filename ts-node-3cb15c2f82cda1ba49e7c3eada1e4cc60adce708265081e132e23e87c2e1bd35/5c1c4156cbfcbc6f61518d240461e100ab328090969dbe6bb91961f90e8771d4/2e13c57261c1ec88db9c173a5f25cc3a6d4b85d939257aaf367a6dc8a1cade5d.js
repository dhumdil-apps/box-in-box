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
var AppServerModule = (function () {
    function AppServerModule() {
    }
    return AppServerModule;
}());
AppServerModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_server_1.ServerModule,
            app_module_1.AppModule
        ],
        bootstrap: [bnb_component_1.BnbComponent]
    })
], AppServerModule);
exports.AppServerModule = AppServerModule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvbWFydGluLXBldGVyL2NvZGUvYm5iL3NyYy9hcHAvYXBwLnNlcnZlci5tb2R1bGUudHMiLCJzb3VyY2VzIjpbIi9ob21lL21hcnRpbi1wZXRlci9jb2RlL2JuYi9zcmMvYXBwL2FwcC5zZXJ2ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQXlDO0FBQ3pDLDREQUF3RDtBQUN4RCwyQ0FBeUM7QUFDekMsaURBQStDO0FBVS9DLElBQWEsZUFBZTtJQUE1QjtJQUErQixDQUFDO0lBQUQsc0JBQUM7QUFBRCxDQUFDLEFBQWhDLElBQWdDO0FBQW5CLGVBQWU7SUFSM0IsZUFBUSxDQUFDO1FBQ1QsT0FBTyxFQUFFO1lBQ1IsOEJBQVk7WUFDWixzQkFBUztTQUNUO1FBQ0QsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztLQUN6QixDQUFDO0dBRVcsZUFBZSxDQUFJO0FBQW5CLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNlcnZlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLXNlcnZlcic7XG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuL2FwcC5tb2R1bGUnO1xuaW1wb3J0IHsgQm5iQ29tcG9uZW50IH0gZnJvbSAnLi9ibmIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdFNlcnZlck1vZHVsZSxcblx0XHRBcHBNb2R1bGVcblx0XSxcblx0Ym9vdHN0cmFwOiBbQm5iQ29tcG9uZW50XVxufSlcblxuZXhwb3J0IGNsYXNzIEFwcFNlcnZlck1vZHVsZSB7IH1cbiJdfQ==