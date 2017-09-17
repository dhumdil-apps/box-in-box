import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

export const headerAnimation = trigger('headerAnimation', [
	state('*',
		style({
			visibility: 'visible'
		})
	),
	state('void',
		style({})
	),
	transition(':enter', [
		animate(400, keyframes([
			style({
				opacity: 0,
				transform: 'translate3d(-100%, 0, 0)'
			}),
			style({
				opacity: 0,
				transform: 'translate3d(-80%, 0, 0)'
			}),
			style({
				opacity: 1,
				transform: 'none'
			})
		]))
	]),
	transition(':leave', [
		animate(400, keyframes([
			style({
				transform: 'none',
				opacity: 1
			}),
			style({
				opacity: 1,
				transform: 'translate3d(-20%, 0, 0)'
			}),
			style({
				opacity: 0,
				transform: 'translate3d(-100%, 0, 0)'
			})
		]))
	])
]);
