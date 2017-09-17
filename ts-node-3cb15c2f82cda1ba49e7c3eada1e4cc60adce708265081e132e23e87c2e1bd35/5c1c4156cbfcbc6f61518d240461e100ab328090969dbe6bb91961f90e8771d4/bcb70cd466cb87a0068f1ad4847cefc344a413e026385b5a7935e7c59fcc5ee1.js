"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = require("@angular/animations");
exports.headerAnimation = animations_1.trigger('headerAnimation', [
    animations_1.state('*', animations_1.style({
        visibility: 'visible'
    })),
    animations_1.state('void', animations_1.style({})),
    animations_1.transition(':enter', [
        animations_1.animate(400, animations_1.keyframes([
            animations_1.style({
                opacity: 0,
                transform: 'translate3d(-100%, 0, 0)'
            }),
            animations_1.style({
                opacity: 0,
                transform: 'translate3d(-80%, 0, 0)'
            }),
            animations_1.style({
                opacity: 1,
                transform: 'none'
            })
        ]))
    ]),
    animations_1.transition(':leave', [
        animations_1.animate(400, animations_1.keyframes([
            animations_1.style({
                transform: 'none',
                opacity: 1
            }),
            animations_1.style({
                opacity: 1,
                transform: 'translate3d(-20%, 0, 0)'
            }),
            animations_1.style({
                opacity: 0,
                transform: 'translate3d(-100%, 0, 0)'
            })
        ]))
    ])
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvbWFydGluLXBldGVyL2NvZGUvYm5iL3NyYy9hcHAvbWFpbi9oZWFkZXIvaGVhZGVyLWFuaW1hdGlvbi50cyIsInNvdXJjZXMiOlsiL2hvbWUvbWFydGluLXBldGVyL2NvZGUvYm5iL3NyYy9hcHAvbWFpbi9oZWFkZXIvaGVhZGVyLWFuaW1hdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGtEQUE0RjtBQUUvRSxRQUFBLGVBQWUsR0FBRyxvQkFBTyxDQUFDLGlCQUFpQixFQUFFO0lBQ3pELGtCQUFLLENBQUMsR0FBRyxFQUNSLGtCQUFLLENBQUM7UUFDTCxVQUFVLEVBQUUsU0FBUztLQUNyQixDQUFDLENBQ0Y7SUFDRCxrQkFBSyxDQUFDLE1BQU0sRUFDWCxrQkFBSyxDQUFDLEVBQUUsQ0FBQyxDQUNUO0lBQ0QsdUJBQVUsQ0FBQyxRQUFRLEVBQUU7UUFDcEIsb0JBQU8sQ0FBQyxHQUFHLEVBQUUsc0JBQVMsQ0FBQztZQUN0QixrQkFBSyxDQUFDO2dCQUNMLE9BQU8sRUFBRSxDQUFDO2dCQUNWLFNBQVMsRUFBRSwwQkFBMEI7YUFDckMsQ0FBQztZQUNGLGtCQUFLLENBQUM7Z0JBQ0wsT0FBTyxFQUFFLENBQUM7Z0JBQ1YsU0FBUyxFQUFFLHlCQUF5QjthQUNwQyxDQUFDO1lBQ0Ysa0JBQUssQ0FBQztnQkFDTCxPQUFPLEVBQUUsQ0FBQztnQkFDVixTQUFTLEVBQUUsTUFBTTthQUNqQixDQUFDO1NBQ0YsQ0FBQyxDQUFDO0tBQ0gsQ0FBQztJQUNGLHVCQUFVLENBQUMsUUFBUSxFQUFFO1FBQ3BCLG9CQUFPLENBQUMsR0FBRyxFQUFFLHNCQUFTLENBQUM7WUFDdEIsa0JBQUssQ0FBQztnQkFDTCxTQUFTLEVBQUUsTUFBTTtnQkFDakIsT0FBTyxFQUFFLENBQUM7YUFDVixDQUFDO1lBQ0Ysa0JBQUssQ0FBQztnQkFDTCxPQUFPLEVBQUUsQ0FBQztnQkFDVixTQUFTLEVBQUUseUJBQXlCO2FBQ3BDLENBQUM7WUFDRixrQkFBSyxDQUFDO2dCQUNMLE9BQU8sRUFBRSxDQUFDO2dCQUNWLFNBQVMsRUFBRSwwQkFBMEI7YUFDckMsQ0FBQztTQUNGLENBQUMsQ0FBQztLQUNILENBQUM7Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIGFuaW1hdGUsIGtleWZyYW1lcyB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5leHBvcnQgY29uc3QgaGVhZGVyQW5pbWF0aW9uID0gdHJpZ2dlcignaGVhZGVyQW5pbWF0aW9uJywgW1xuXHRzdGF0ZSgnKicsXG5cdFx0c3R5bGUoe1xuXHRcdFx0dmlzaWJpbGl0eTogJ3Zpc2libGUnXG5cdFx0fSlcblx0KSxcblx0c3RhdGUoJ3ZvaWQnLFxuXHRcdHN0eWxlKHt9KVxuXHQpLFxuXHR0cmFuc2l0aW9uKCc6ZW50ZXInLCBbXG5cdFx0YW5pbWF0ZSg0MDAsIGtleWZyYW1lcyhbXG5cdFx0XHRzdHlsZSh7XG5cdFx0XHRcdG9wYWNpdHk6IDAsXG5cdFx0XHRcdHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKSdcblx0XHRcdH0pLFxuXHRcdFx0c3R5bGUoe1xuXHRcdFx0XHRvcGFjaXR5OiAwLFxuXHRcdFx0XHR0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgtODAlLCAwLCAwKSdcblx0XHRcdH0pLFxuXHRcdFx0c3R5bGUoe1xuXHRcdFx0XHRvcGFjaXR5OiAxLFxuXHRcdFx0XHR0cmFuc2Zvcm06ICdub25lJ1xuXHRcdFx0fSlcblx0XHRdKSlcblx0XSksXG5cdHRyYW5zaXRpb24oJzpsZWF2ZScsIFtcblx0XHRhbmltYXRlKDQwMCwga2V5ZnJhbWVzKFtcblx0XHRcdHN0eWxlKHtcblx0XHRcdFx0dHJhbnNmb3JtOiAnbm9uZScsXG5cdFx0XHRcdG9wYWNpdHk6IDFcblx0XHRcdH0pLFxuXHRcdFx0c3R5bGUoe1xuXHRcdFx0XHRvcGFjaXR5OiAxLFxuXHRcdFx0XHR0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgtMjAlLCAwLCAwKSdcblx0XHRcdH0pLFxuXHRcdFx0c3R5bGUoe1xuXHRcdFx0XHRvcGFjaXR5OiAwLFxuXHRcdFx0XHR0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCknXG5cdFx0XHR9KVxuXHRcdF0pKVxuXHRdKVxuXSk7XG4iXX0=