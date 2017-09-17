"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dropdown_model_1 = require("../dropdown/dropdown.model");
var Link = (function () {
    function Link(link) {
        var _this = this;
        try {
            if (link.type !== 'dropdown') {
                this.link = {
                    'id': link.id,
                    'type': link.type,
                    'title': link.title,
                    'icon': link.icon
                };
            }
            else {
                var list_1;
                this.link = {
                    'id': [],
                    'type': link.type,
                    'icon': link.icon
                };
                list_1 = [];
                link.id.forEach(function (item) {
                    if (item.show) {
                        _this.link.id.push({
                            'id': item.id,
                            'type': item.type
                        });
                        list_1.push(item.title);
                    }
                });
                this.link.dropdown = new dropdown_model_1.Dropdown(list_1);
                this.link.dropdown.setTitle(link.title);
                this.link.dropdown.setCenterTitle();
                this.link.dropdown.setCenterListItems();
                this.link.dropdown.src = link.src;
            }
        }
        catch (e) {
            this.link = {};
        }
    }
    return Link;
}());
exports.Link = Link;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvbWFydGluLXBldGVyL2NvZGUvYm5iL3NyYy9hcHAvbW9kdWxlcy9saW5rL2xpbmsubW9kZWwudHMiLCJzb3VyY2VzIjpbIi9ob21lL21hcnRpbi1wZXRlci9jb2RlL2JuYi9zcmMvYXBwL21vZHVsZXMvbGluay9saW5rLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkRBQXNEO0FBRXREO0lBSUMsY0FBWSxJQUFTO1FBQXJCLGlCQThDQztRQTVDQSxJQUNBLENBQUM7WUFDQSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLFVBQVUsQ0FBQyxDQUM3QixDQUFDO2dCQUNBLElBQUksQ0FBQyxJQUFJLEdBQUc7b0JBQ1gsSUFBSSxFQUFHLElBQUksQ0FBQyxFQUFFO29CQUNkLE1BQU0sRUFBRyxJQUFJLENBQUMsSUFBSTtvQkFDbEIsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLO29CQUNuQixNQUFNLEVBQUcsSUFBSSxDQUFDLElBQUk7aUJBQ2xCLENBQUM7WUFDSCxDQUFDO1lBQ0QsSUFBSSxDQUNKLENBQUM7Z0JBQ0EsSUFBSSxNQUFJLENBQUM7Z0JBRVQsSUFBSSxDQUFDLElBQUksR0FBRztvQkFDWCxJQUFJLEVBQUUsRUFBRTtvQkFDUixNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUk7b0JBQ2pCLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSTtpQkFDakIsQ0FBQztnQkFFRixNQUFJLEdBQUcsRUFBRSxDQUFDO2dCQUNWLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSTtvQkFDcEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUNkLENBQUM7d0JBQ0EsS0FBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRCQUNqQixJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUU7NEJBQ2IsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJO3lCQUNqQixDQUFDLENBQUM7d0JBQ0gsTUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3ZCLENBQUM7Z0JBQ0YsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSx5QkFBUSxDQUFDLE1BQUksQ0FBQyxDQUFDO2dCQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztnQkFDeEMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDbkMsQ0FBQztRQUNGLENBQUM7UUFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDVCxDQUFDO1lBQ0EsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDaEIsQ0FBQztJQUNGLENBQUM7SUFDRixXQUFDO0FBQUQsQ0FBQyxBQW5ERCxJQW1EQztBQW5EWSxvQkFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERyb3Bkb3duIH0gZnJvbSAnLi4vZHJvcGRvd24vZHJvcGRvd24ubW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgTGluayB7XG5cblx0cHVibGljIGxpbms6IGFueTtcblxuXHRjb25zdHJ1Y3RvcihsaW5rOiBhbnkpXG5cdHtcblx0XHR0cnlcblx0XHR7XG5cdFx0XHRpZiAobGluay50eXBlICE9PSAnZHJvcGRvd24nKVxuXHRcdFx0e1xuXHRcdFx0XHR0aGlzLmxpbmsgPSB7XG5cdFx0XHRcdFx0J2lkJzpcdFx0bGluay5pZCxcblx0XHRcdFx0XHQndHlwZSc6XHRcdGxpbmsudHlwZSxcblx0XHRcdFx0XHQndGl0bGUnOlx0bGluay50aXRsZSxcblx0XHRcdFx0XHQnaWNvbic6XHRcdGxpbmsuaWNvblxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0ZWxzZVxuXHRcdFx0e1xuXHRcdFx0XHRsZXQgbGlzdDtcblxuXHRcdFx0XHR0aGlzLmxpbmsgPSB7XG5cdFx0XHRcdFx0J2lkJzpcdFtdLFxuXHRcdFx0XHRcdCd0eXBlJzpcdGxpbmsudHlwZSxcblx0XHRcdFx0XHQnaWNvbic6XHRsaW5rLmljb25cblx0XHRcdFx0fTtcblxuXHRcdFx0XHRsaXN0ID0gW107XG5cdFx0XHRcdGxpbmsuaWQuZm9yRWFjaCgoaXRlbSkgPT4ge1xuXHRcdFx0XHRcdGlmIChpdGVtLnNob3cpXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5saW5rLmlkLnB1c2goe1xuXHRcdFx0XHRcdFx0XHQnaWQnOiBpdGVtLmlkLFxuXHRcdFx0XHRcdFx0XHQndHlwZSc6IGl0ZW0udHlwZVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRsaXN0LnB1c2goaXRlbS50aXRsZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHR0aGlzLmxpbmsuZHJvcGRvd24gPSBuZXcgRHJvcGRvd24obGlzdCk7XG5cdFx0XHRcdHRoaXMubGluay5kcm9wZG93bi5zZXRUaXRsZShsaW5rLnRpdGxlKTtcblx0XHRcdFx0dGhpcy5saW5rLmRyb3Bkb3duLnNldENlbnRlclRpdGxlKCk7XG5cdFx0XHRcdHRoaXMubGluay5kcm9wZG93bi5zZXRDZW50ZXJMaXN0SXRlbXMoKTtcblx0XHRcdFx0dGhpcy5saW5rLmRyb3Bkb3duLnNyYyA9IGxpbmsuc3JjO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAoZSlcblx0XHR7XG5cdFx0XHR0aGlzLmxpbmsgPSB7fTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==