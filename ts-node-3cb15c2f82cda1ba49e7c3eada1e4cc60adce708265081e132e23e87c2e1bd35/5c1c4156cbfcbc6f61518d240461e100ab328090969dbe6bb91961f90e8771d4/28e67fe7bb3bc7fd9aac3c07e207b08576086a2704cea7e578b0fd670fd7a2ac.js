"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = require("@angular/animations");
exports.sliderAnimation = animations_1.trigger('animateSlide', [
    animations_1.state('down, next, active', animations_1.style({
        visibility: 'visible'
    })),
    animations_1.state('inactive', animations_1.style({
        visibility: 'hidden'
    })),
    animations_1.transition('down => inactive', [
        animations_1.animate(400, animations_1.keyframes([
            animations_1.style({
                visibility: 'visible',
                zIndex: 50
            })
        ]))
    ]),
    animations_1.transition('next => inactive', [
        animations_1.animate(800, animations_1.keyframes([
            animations_1.style({
                opacity: 1,
                visibility: 'visible',
                zIndex: 50
            }),
            animations_1.style({
                opacity: 0,
                transform: 'translate3d(50%, 0, 0) rotate3d(0, 0, 1, 120deg)',
                visibility: 'visible',
                zIndex: 50,
            })
        ]))
    ]),
    // inactive -> active
    animations_1.transition('inactive => down', [
        animations_1.animate(400, animations_1.keyframes([
            animations_1.style({
                opacity: 0,
                visibility: 'visible',
                transform: 'translate3d(-50%, -100%, 0) scale(0, 0)',
                zIndex: 100
            }),
            animations_1.style({
                opacity: 1,
                visibility: 'visible',
                transform: 'translate3d(-50%, 0, 0) scale(1, 1)',
                zIndex: 100
            })
        ]))
    ]),
    animations_1.transition('inactive => next', [
        animations_1.animate(1000, animations_1.keyframes([
            animations_1.style({
                opacity: 0,
                transform: 'translate3d(-150%, 0, 0) rotate3d(0, 0, 1, -120deg)',
                visibility: 'visible',
                zIndex: 100
            }),
            animations_1.style({
                opacity: 1,
                transform: 'translate3d(-50%, 0, 0)',
                visibility: 'visible',
                zIndex: 100
            })
        ]))
    ])
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvbWFydGluLXBldGVyL2NvZGUvYm5iL3NyYy9hcHAvbWFpbi9zbGlkZXIvc2xpZGVyLWFuaW1hdGlvbi50cyIsInNvdXJjZXMiOlsiL2hvbWUvbWFydGluLXBldGVyL2NvZGUvYm5iL3NyYy9hcHAvbWFpbi9zbGlkZXIvc2xpZGVyLWFuaW1hdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGtEQUE0RjtBQUUvRSxRQUFBLGVBQWUsR0FBRyxvQkFBTyxDQUFDLGNBQWMsRUFBRTtJQUN0RCxrQkFBSyxDQUFDLG9CQUFvQixFQUN6QixrQkFBSyxDQUFDO1FBQ0wsVUFBVSxFQUFFLFNBQVM7S0FDckIsQ0FBQyxDQUNGO0lBQ0Qsa0JBQUssQ0FBQyxVQUFVLEVBQ2Ysa0JBQUssQ0FBQztRQUNMLFVBQVUsRUFBRSxRQUFRO0tBQ3BCLENBQUMsQ0FDRjtJQUNELHVCQUFVLENBQUMsa0JBQWtCLEVBQUU7UUFDOUIsb0JBQU8sQ0FBQyxHQUFHLEVBQUUsc0JBQVMsQ0FBQztZQUN0QixrQkFBSyxDQUFDO2dCQUNMLFVBQVUsRUFBRSxTQUFTO2dCQUNyQixNQUFNLEVBQUUsRUFBRTthQUNWLENBQUM7U0FDRixDQUFDLENBQUM7S0FDSCxDQUFDO0lBQ0YsdUJBQVUsQ0FBQyxrQkFBa0IsRUFBRTtRQUM5QixvQkFBTyxDQUFDLEdBQUcsRUFBRSxzQkFBUyxDQUFDO1lBQ3RCLGtCQUFLLENBQUM7Z0JBQ0wsT0FBTyxFQUFFLENBQUM7Z0JBQ1YsVUFBVSxFQUFFLFNBQVM7Z0JBQ3JCLE1BQU0sRUFBRSxFQUFFO2FBQ1YsQ0FBQztZQUNGLGtCQUFLLENBQUM7Z0JBQ0wsT0FBTyxFQUFFLENBQUM7Z0JBQ1YsU0FBUyxFQUFFLGtEQUFrRDtnQkFDN0QsVUFBVSxFQUFFLFNBQVM7Z0JBQ3JCLE1BQU0sRUFBRSxFQUFFO2FBQ1YsQ0FBQztTQUNGLENBQUMsQ0FBQztLQUNILENBQUM7SUFDRixxQkFBcUI7SUFDckIsdUJBQVUsQ0FBQyxrQkFBa0IsRUFBRTtRQUM5QixvQkFBTyxDQUFDLEdBQUcsRUFBRSxzQkFBUyxDQUFDO1lBQ3RCLGtCQUFLLENBQUM7Z0JBQ0wsT0FBTyxFQUFFLENBQUM7Z0JBQ1YsVUFBVSxFQUFFLFNBQVM7Z0JBQ3JCLFNBQVMsRUFBRSx5Q0FBeUM7Z0JBQ3BELE1BQU0sRUFBRSxHQUFHO2FBQ1gsQ0FBQztZQUNGLGtCQUFLLENBQUM7Z0JBQ0wsT0FBTyxFQUFFLENBQUM7Z0JBQ1YsVUFBVSxFQUFFLFNBQVM7Z0JBQ3JCLFNBQVMsRUFBRSxxQ0FBcUM7Z0JBQ2hELE1BQU0sRUFBRSxHQUFHO2FBQ1gsQ0FBQztTQUNGLENBQUMsQ0FBQztLQUNILENBQUM7SUFDRix1QkFBVSxDQUFDLGtCQUFrQixFQUFFO1FBQzlCLG9CQUFPLENBQUMsSUFBSSxFQUFFLHNCQUFTLENBQUM7WUFDdkIsa0JBQUssQ0FBQztnQkFDTCxPQUFPLEVBQUUsQ0FBQztnQkFDVixTQUFTLEVBQUUscURBQXFEO2dCQUNoRSxVQUFVLEVBQUUsU0FBUztnQkFDckIsTUFBTSxFQUFFLEdBQUc7YUFDWCxDQUFDO1lBQ0Ysa0JBQUssQ0FBQztnQkFDTCxPQUFPLEVBQUUsQ0FBQztnQkFDVixTQUFTLEVBQUUseUJBQXlCO2dCQUNwQyxVQUFVLEVBQUUsU0FBUztnQkFDckIsTUFBTSxFQUFFLEdBQUc7YUFDWCxDQUFDO1NBQ0YsQ0FBQyxDQUFDO0tBQ0gsQ0FBQztDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRyaWdnZXIsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgYW5pbWF0ZSwga2V5ZnJhbWVzIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5cbmV4cG9ydCBjb25zdCBzbGlkZXJBbmltYXRpb24gPSB0cmlnZ2VyKCdhbmltYXRlU2xpZGUnLCBbXG5cdHN0YXRlKCdkb3duLCBuZXh0LCBhY3RpdmUnLFxuXHRcdHN0eWxlKHtcblx0XHRcdHZpc2liaWxpdHk6ICd2aXNpYmxlJ1xuXHRcdH0pXG5cdCksXG5cdHN0YXRlKCdpbmFjdGl2ZScsXG5cdFx0c3R5bGUoe1xuXHRcdFx0dmlzaWJpbGl0eTogJ2hpZGRlbidcblx0XHR9KVxuXHQpLFxuXHR0cmFuc2l0aW9uKCdkb3duID0+IGluYWN0aXZlJywgW1xuXHRcdGFuaW1hdGUoNDAwLCBrZXlmcmFtZXMoW1xuXHRcdFx0c3R5bGUoe1xuXHRcdFx0XHR2aXNpYmlsaXR5OiAndmlzaWJsZScsXG5cdFx0XHRcdHpJbmRleDogNTBcblx0XHRcdH0pXG5cdFx0XSkpXG5cdF0pLFxuXHR0cmFuc2l0aW9uKCduZXh0ID0+IGluYWN0aXZlJywgW1xuXHRcdGFuaW1hdGUoODAwLCBrZXlmcmFtZXMoW1xuXHRcdFx0c3R5bGUoe1xuXHRcdFx0XHRvcGFjaXR5OiAxLFxuXHRcdFx0XHR2aXNpYmlsaXR5OiAndmlzaWJsZScsXG5cdFx0XHRcdHpJbmRleDogNTBcblx0XHRcdH0pLFxuXHRcdFx0c3R5bGUoe1xuXHRcdFx0XHRvcGFjaXR5OiAwLFxuXHRcdFx0XHR0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCg1MCUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIDEyMGRlZyknLFxuXHRcdFx0XHR2aXNpYmlsaXR5OiAndmlzaWJsZScsXG5cdFx0XHRcdHpJbmRleDogNTAsXG5cdFx0XHR9KVxuXHRcdF0pKVxuXHRdKSxcblx0Ly8gaW5hY3RpdmUgLT4gYWN0aXZlXG5cdHRyYW5zaXRpb24oJ2luYWN0aXZlID0+IGRvd24nLCBbXG5cdFx0YW5pbWF0ZSg0MDAsIGtleWZyYW1lcyhbXG5cdFx0XHRzdHlsZSh7XG5cdFx0XHRcdG9wYWNpdHk6IDAsXG5cdFx0XHRcdHZpc2liaWxpdHk6ICd2aXNpYmxlJyxcblx0XHRcdFx0dHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoLTUwJSwgLTEwMCUsIDApIHNjYWxlKDAsIDApJyxcblx0XHRcdFx0ekluZGV4OiAxMDBcblx0XHRcdH0pLFxuXHRcdFx0c3R5bGUoe1xuXHRcdFx0XHRvcGFjaXR5OiAxLFxuXHRcdFx0XHR2aXNpYmlsaXR5OiAndmlzaWJsZScsXG5cdFx0XHRcdHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKC01MCUsIDAsIDApIHNjYWxlKDEsIDEpJyxcblx0XHRcdFx0ekluZGV4OiAxMDBcblx0XHRcdH0pXG5cdFx0XSkpXG5cdF0pLFxuXHR0cmFuc2l0aW9uKCdpbmFjdGl2ZSA9PiBuZXh0JywgW1xuXHRcdGFuaW1hdGUoMTAwMCwga2V5ZnJhbWVzKFtcblx0XHRcdHN0eWxlKHtcblx0XHRcdFx0b3BhY2l0eTogMCxcblx0XHRcdFx0dHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoLTE1MCUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIC0xMjBkZWcpJyxcblx0XHRcdFx0dmlzaWJpbGl0eTogJ3Zpc2libGUnLFxuXHRcdFx0XHR6SW5kZXg6IDEwMFxuXHRcdFx0fSksXG5cdFx0XHRzdHlsZSh7XG5cdFx0XHRcdG9wYWNpdHk6IDEsXG5cdFx0XHRcdHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKC01MCUsIDAsIDApJyxcblx0XHRcdFx0dmlzaWJpbGl0eTogJ3Zpc2libGUnLFxuXHRcdFx0XHR6SW5kZXg6IDEwMFxuXHRcdFx0fSlcblx0XHRdKSlcblx0XSlcbl0pO1xuIl19